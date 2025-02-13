import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  mapTitle: {
    fontSize: 20,
    color: '#fff',
    marginVertical: 10,
  },
  mapImage: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});

export default styles;