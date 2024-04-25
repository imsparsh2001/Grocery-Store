import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  categoriesMain: {
    width: "100%",
    margin: 'auto',
  },
  productDetails: {
    flexDirection: 'row',
    flexWrap:'wrap'
  },
  rightCategories: {
    width: '100%',
    marginBottom:20
  },
  productSection: {
    flexDirection: 'row',
    border: '1px solid rgb(214, 209, 209)',
    marginTop: '2%',
    width: '100%',
    padding: '2%',
    borderRadius: 0.4,
  },
  filterButton : {
    display:'flex',
    flexDirection:'row',
    // margin:8,
    marginTop: 10,
    marginRight: '20%',
    padding:4,
    borderWidth:1,
    borderRadius:5,
    borderColor:'grey',
    width:80,
  },
  productlistProduct: {
    margin: '2%',
    alignSelf: 'center',
  },
  rate: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    margin:2,
  },
  productDescription: {
    marginLeft: '10%',
  },
  eye: {
    border: '1px solid grey',
    width: 20,
    height: 20,
    marginTop: '4%',
    padding: '1%',
    marginLeft: '3%',
    borderRadius: 0.1,
  },
  bagBtn: {
    backgroundColor: 'rgb(35, 147, 35)',
    textAlign: 'center',
    width: 90,
    height: 25,
    borderRadius: 5,
    color: 'white',
    marginTop: 10,
    padding:2
  }, 
  cat: {
    width: '70%',
    fontSize: 15,
    cursor: 'pointer',
    paddingBottom: '1%',
    fontWeight: '500',
    height: 30,
    marginBottom: 0,
    margin:5,
    marginLeft:30
  },

  iconss: {
    width:"100%",
   display:'flex',
   flexDirection:'row',
   alignItems:"center",
   justifyContent:'space-between',
   paddingLeft:20
  },
  product : {
  width:"45%",
  borderWidth:1,
  // height:300,
  // marginRight:15,
  padding:10,
  paddingBottom:20,
  borderRadius:10,
  },
  iconssA: {
    borderWidth: 1,
    borderRadius: 0.2,
    padding: 2,
  },
  productHeader: {
    backgroundColor: 'rgb(206, 216, 213)',
    height: 50,
    textAlign: 'center',
   padding:'1%',
    fontSize: 24,
    width: "95%",
    borderRadius: 8,
    margin:12
  },
  productsName: {
    flexDirection: 'row',
  },
  pageNum: {
    marginTop: '1%',
    flexDirection: 'row',
  },
  pageNumP: {
    margin: 1,
    borderWidth: 1,
    width: '3%',
    height: '3%',
    textAlign: 'center',
    borderRadius: 0.3,
    fontSize: 12,
  },

  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 380,
    marginLeft:15,
    marginTop:10,
    gap:20
  },
  rangeSlider : {
    marginTop:50
  },
  ratingFilter :{
    marginTop:10
  },
  mobileFilterOverlay :{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  leftCategories :{
    backgroundColor: 'white',
    padding: 20,
    position: 'relative',
    borderRadius: 8,
    width: 360,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    zIndex: 3,
  },
  orderPicker: {
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    width: "45%",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 5,
    // padding: 5,
  },
  RatingNumber :{
    fontSize:20
  },
  mobileFilterOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',

  },
  leftCategories: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  heading: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  cat: {
    marginTop: 10,
  },
  categoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryName: {
    display:'flex',
    flexDirection:'row',
    fontSize: 20,
    marginLeft:20,
    fontWeight:'bold'
    },
  chevronIcon: {
    width: 2, // Adjust the width as needed
    height: 2, // Adjust the height as needed
   // Adjust the margin as needed
  },
  rangeSlider: {
    marginTop: 20,
  },
  ratingFilter: {
    marginTop: 20,
  },
  starRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  
});

export default styles;
