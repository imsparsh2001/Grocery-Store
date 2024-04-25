import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProjectData from '../../../../assets/project.json';
import { ProgressBar } from 'react-native-paper';
import styles from '../styles/specialOffer';

export default function SpecialOffer() {

  //For printing stars this component is called, that takes a rating prop as i/p
    const StarRating = ({ rating }) => {
        const filledStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        
        //This component returns a view containing a row of star icons
        return (
          <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5}}>
            {/* it uses array constructor to create an array with a length equal to filled stars */}
            {[...Array(filledStars)].map((_, index) => (
              <Icon key={index} name="star" size={20} color="gold" />
            ))}
            {halfStar && <Icon name="star-half-o" size={20} color="gold" />}
            <Text style={styles.ratingText}>4.4 (1,130)</Text>
          </View>
        );
      };

      //This component takes a parameter progress and renders progressbar
      const renderProgressBar = (progress) => {
        return (
          <ProgressBar
            progress={progress / 100}
            color="grey"
            style={{ width: '100%',height: 10, borderRadius: 5, marginTop: 5 }}
          />
        );
      };

    return(
      <View style={{backgroundColor:"#fff"}}>
        <ScrollView style={styles.container3}>
        <Text style={styles.firstLine} >Special Offers of the View All Week!</Text>
        <Text style={styles.secondLine}>Get exclusive ongoing offers, deals, and discount cides of
          shopping</Text>
        <Text style={styles.viewlink}>View All <Icon name="chevron-right" size={10} color='green'/></Text>
        <View style={ styles.specialoffers}>
          {/* fetching data from json file and iterating through it */}
            {ProjectData.items.map(projectItem => (
             
                <View key={projectItem.id} style={ styles.itemImg}>
                    {projectItem.discount && projectItem.discount !== "" ? (
                        <Text style={styles.percentage}>{projectItem.discount}%</Text>
                    ) : (
                        <Text>‎</Text>
                    )}
                    <Image source={{ uri: projectItem.img }} style={styles.image}  />
                    <Text style={styles.offerPrice}>${projectItem.price}</Text>
                    <Text style={styles.name}>{projectItem.name}</Text>
                    <StarRating rating={3.5} />
                    <Text style={styles.stock}>IN STOCK</Text>
                    {renderProgressBar(projectItem.availableStock)}
                    <View style={styles.availableView}>
                    <Text style={styles.available}>The available products: </Text><Text style={styles.availableQuantity}>{projectItem.availableStock}</Text>
                    </View>
                </View>
            ))}
        </View>
    </ScrollView>
    </View>
    )
}


   