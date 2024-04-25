import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import styles from "../styles/productList";
import { SelectList } from "react-native-dropdown-select-list";
import { Filter } from "lucide-react-native";
import MobileFilter from "./MobileFilter";
import grocery from "../../../../assets/grocery.json";
import RatingComponent from "./ratingComp";
import { useRoute } from "@react-navigation/core";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../state/cart/cartSlice";
import { Picker } from "@react-native-picker/picker";

const ProductList = ({ navigation }) => {
  const route = useRoute();

  const [sortOrder, setSortOrder] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [values, setValues] = useState([10, 1000]); // Initialize values state
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedStars, setSelectedStars] = useState(null);
  const categoryFromRoute = route.params?.category;
  const [selectedCategory, setSelectedCategory] = useState(categoryFromRoute  || "Best sellers");

  const totalItems = filteredItems.length;

  const handleThumbnailClick = (item) => {
    // Make sure item has the selectedProduct property
    navigation.navigate("Thumbnail", { selectedProduct: item });
  };

  const addToCart = (id, quantity = 1) => {
    dispatch(addItem({ id, quantity }));
    navigation.navigate("cart");
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const categories = [
    { key: "default", value: "Featured" },
    { key: "Low", value: "High to Low" },
    { key: "High", value: "Low to High" },
  ];

  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName.toLowerCase());
  };

  const getItemsByCategory = (categoryName) => {
    const category = grocery.find((cat) =>
      // Check if at least one item in the category has the specified categoryName
      cat.items.some(
        (item) => item.category.toLowerCase() === categoryName.toLowerCase()
      )
    );

    if (category) {
      const filteredItems = category.items.filter(
        (item) =>
          item.price >= values[0] &&
          item.price <= values[1] &&
          item.rating >= selectedStars
      );
      const sortedItems = filteredItems.slice().sort((a, b) => {
        if (sortOrder === "Low to High") {
          return a.price - b.price;
        } else if (sortOrder === "High to Low") {
          return b.price - a.price;
        }
        return 0;
      });

      return sortedItems.map((item) => (
        <View key={item.id} style={styles.product}>
          <TouchableOpacity onPress={() => handleThumbnailClick(item)}>
            <Image
              source={{ uri: item.img[0] }}
              style={{ width: 150, height: 150,alignSelf:'center', borderRadius: 6 }}
            />
          </TouchableOpacity>
          <Text style={{ textAlign:'center', marginTop:5 }}>{item.category}</Text>
          <Text style={{ fontWeight: "bold", textAlign:'center' }}>
            {item.name}
          </Text>
          <View style={styles.rate}>
            <RatingComponent rating={item.rating} />
          </View>
          <Text style={{ fontWeight: "bold", textAlign:'center' }}>
            ${item.price}
          </Text>

          <TouchableOpacity style={{justifyContent:"center", alignItems:'center'}} onPress={() => addToCart(item.id)}>
            <Text style={styles.bagBtn}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      ));
    } else {
      return <Text>Category '{categoryName}' not found.</Text>;
    }
  };

  const handleChange = (newValues) => {
    //Ensure that the minimum price is always less than or equal to the maximum price
    const sortedValues = newValues.sort((a, b) => a - b);
    // console.log(sortedValues);
    setValues(sortedValues);
  };

  const handleSortChange = (value) => {
    setSortOrder(value);
  };
  const handleStars = (value) => {
    setSelectedStars(selectedStars === value ? null : value);
  };

  useEffect(() => {
    // Use "bestsellers" as the default category when none is selected
    const categoryToUse = selectedCategory || "Best sellers";
    const filteredItems = getItemsByCategory(categoryToUse, values);
    setFilteredItems(filteredItems);
  }, [selectedCategory, values, sortOrder, selectedStars]);

  return (
    <View style={{ backgroundColor: "white", width:"100%" }}>
      <View style={styles.categoriesMain}>
        <View style={styles.rightCategories}>
          <View style={styles.productHeader}>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", alignSelf: "center" }}
            >
              Snacks & Munchies
            </Text>
          </View>
          <View style={styles.iconss}>
            <Text style={{ margin: 5, fontSize:16 }}>{totalItems} Items Found</Text>
            <Picker
              mode="dropdown"
              style={styles.orderPicker}
              selectedValue={sortOrder}
              onValueChange={(value) => handleSortChange(value)}
            >
              <Picker.Item label="SortBy" value="" />
              <Picker.Item label="Low to High" value="Low to High" />
              <Picker.Item label="High to Low" value="High to Low" />
            </Picker>
            <TouchableOpacity onPress={openModal}>
              <View style={styles.filterButton}>
                <Filter color="black" />
                <Text>Filter</Text>
              </View>
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View>
              {selectedCategory && (
                <View style={styles.productsContainer}>
                  {getItemsByCategory(selectedCategory)}
                </View>
              )}
            </View>
          </ScrollView>
          <MobileFilter
            isOpen={isModalOpen}
            setModalOpen={setModalOpen}
            handleClose={closeModal}
            values={values}
            setValues={setValues}
            handleChange={handleChange}
            selectedStars={selectedStars}
            handleStars={handleStars}
            selectedCategory={selectedCategory}
            handleCategoryClick={handleCategoryClick}
          />
        </View>
      </View>
    </View>
  );
};

export default ProductList;
