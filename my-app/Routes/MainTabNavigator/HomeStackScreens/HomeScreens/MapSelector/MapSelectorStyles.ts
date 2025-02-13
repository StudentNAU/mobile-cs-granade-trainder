import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  mapsContainer: {
    flexGrow: 1,
    width: '100%',
    padding: 10,
    // видалено flexWrap
  },
  item: {
    flexBasis: "30%", // Це вже коректно для відображення елементів
    width: "30%",
    maxWidth: 120,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    height: 200,
  },
  selectedItem: {
    borderWidth: 3,
    borderColor: "#EEEEEE",
    backgroundColor: "#D3D3D3",
  },
  mapImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  mapTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: 'center',
    lineHeight: 22,
  },
  button: {
    width: 250,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 5,
    borderWidth: 3,
    borderColor: "#174D14",
  },
  disabledButton: {
    opacity: 0.42,
    backgroundColor: "black",
  },
  buttonText: {
    color: "#3FB015",
    fontSize: 30,
    fontWeight: "bold",
    textShadowColor: "black",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 5,
  },
});

export default styles;
