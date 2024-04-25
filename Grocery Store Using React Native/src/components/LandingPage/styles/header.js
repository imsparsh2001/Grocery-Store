import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container1 :{
      paddingTop:StatusBar.currentHeight,
      display:'flex'
  },
  header: {
    // height: 70,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10, 
    backgroundColor: '#fff', 
  },
  logoImage: {
    height: 40, 
    width: 70, 
    // marginTop:15
  },
  personImage : {
     height:40,
     width:40
  },
  locationImage : {
      height:50,
      width:40,
      // marginTop:10
   },
   searchBar : {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius:10,
    width:250,
    // marginTop:20,
    marginRight:10
   },
   modalOverlay: {
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
  popupBody: {
    backgroundColor: 'white',
    padding: 9,
    position: 'relative',
    borderRadius: 8,
    width: 340,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    zIndex: 3,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  locationTable: {
    width: '100%',
    marginRight:15
  },
  areaSearch: {
    borderRadius: 10,
    width: '95%',
    height: 35,
    margin: '2%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgb(164, 160, 160)',

  },
  clearBtn: {
    backgroundColor: 'transparent',
    borderRadius: 0.4,
    height: 30,
    width: 70,
    float:'right'
  },
  description: {
    marginTop: 0,
  },
  headline: {
    marginBottom: 1,
    width: '80%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    marginLeft:20,
    fontWeight: 40,
    fontSize: 30,
  },
  cell: {
    fontSize: 14,
    marginLeft:20,
  },
   
 
});

export default styles;