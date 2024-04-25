import { SafeAreaView, Text, View, Image } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "../styles/footer";

export default function Footer() {
  return (
    <SafeAreaView style={{ width: "100%" }}>
      <View style={styles.container}>
        <View style={styles.container2}>
          <Text style={styles.title}>Categories</Text>
          <View style={styles.viewFlex}>
            <Text style={styles.category}>
              Vegetables & Fruits {"\n"}
              Breakfast & Instant food {"\n"}
              Bakery & Biscuits {"\n"}
              Atta, rice & dal {"\n"}
              Sauces & spreads {"\n"}
              Organic & gourmet {"\n"}
              Baby Care {"\n"}
              Cleaning essentials {"\n"}
              Personal Care
            </Text>
            <Text style={[styles.category, { paddingLeft: 10 }]}>
              Dairy, bread & eggs {"\n"}
              Cold drinks & juices {"\n"}
              Tea, coffee & drinks {"\n"}
              Masala, oil & more {"\n"}
              Chicken, meat & fish {"\n"}
              Paan corner {"\n"}
              Pharma & wellness {"\n"}
              Home & office {"\n"}
              Pet care
            </Text>
          </View>
        </View>

        <View style={styles.container3}>
          <Text style={styles.title}>Get to Know us</Text>
          <Text>
            Company {"\n"}
            About {"\n"}
            Blog {"\n"}
            Help Center {"\n"}
            Our Value
          </Text>
        </View>

        <View style={styles.container3}>
          <Text style={styles.title}>For Consumers</Text>
          <Text>
            Payments {"\n"}
            Shipping {"\n"}
            Product Returns {"\n"}
            FAQ {"\n"}
            Shop Checkout
          </Text>
        </View>

        <View style={styles.container3}>
          <Text style={styles.title}>Become a Shopper</Text>
          <Text>
            Shopper Opportunities {"\n"}
            Become a Shopper {"\n"}
            Earnings {"\n"}
            Ideas & Guides {"\n"}
            New Retailers
          </Text>
        </View>

        <View style={styles.container3}>
          <Text style={styles.title}>FreshCart Programs</Text>
          <Text>
            Freshcart programs {"\n"}
            Gift Cards {"\n"}
            Promos & Coupons {"\n"}
            Freshcart Ads {"\n"}
            Careers
          </Text>
        </View>

        <View style={styles.customhr}></View>

        <View style={styles.social}>
          <View>
            <Text style={styles.socialTitle}>Payment Partners</Text>
          </View>
          <View style={styles.icons}>
            <FontAwesomeIcon name="amazon" size={20} color={"#F79C34"} />
          </View>
          <View style={styles.icons}>
            <FontAwesomeIcon name="cc-paypal" size={20} color={"#0079C1"} />
          </View>
          <View style={styles.icons}>
            <FontAwesomeIcon name="cc-visa" size={20} color={"#1A1F71"} />
          </View>
          <View style={styles.icons}>
            <FontAwesomeIcon name="cc-mastercard" size={20} color={"orange"} />
          </View>
        </View>

        <View style={styles.customhr}></View>

        <View style={styles.social}>
          <View>
            <Text style={styles.socialTitle}>Download Here</Text>
          </View>
          <View style={styles.icons}>
            <MaterialCommunityIcon name="google-play" size={25} color={"#4285F4"} />
          </View>
          <View style={styles.icons}>
            <MaterialCommunityIcon name="apple" size={25} color={"#A2AAAD"} />
          </View>
        </View>

        <View style={styles.customhr}></View>

        <View style={styles.social}>
          <View>
            <Text style={styles.socialTitle}>Follow us on</Text>
          </View>
          <View style={styles.icon}>
            <FontAwesomeIcon name="facebook" size={20} color={"darkblue"} />
          </View>
          <View style={styles.icon}>
            <FontAwesomeIcon name="twitter" size={20} color={"#1DA1F2"} />
          </View>
          <View style={styles.icon}>
            <FontAwesomeIcon name="instagram" size={20} color={"crimson"} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
