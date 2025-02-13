import React from 'react';
import { View, Text, Image } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import styles from "./SelectedMapScreenStyle";
import { mapSelectorMockedData } from "../mocks/mapSelectorMockedData";
import { LinearGradient } from 'expo-linear-gradient';

type RootStackParamList = {
  SelectedMap: { selectedMap: string };
};

const SelectedMapScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'SelectedMap'>>();
  const { selectedMap } = route.params;

  const mapData = mapSelectorMockedData.find(map => map.title === selectedMap);

  return (
    <LinearGradient style={{ flex: 1 }} colors={['#3A393F', '#A9A9A9', '#808080']}>
      <View style={styles.container}>
        {mapData ? (
          <>
            <Text style={styles.title}>Selected Map</Text>
            <Text style={styles.mapTitle}>{mapData.title}</Text>
            <Image source={mapData.background} style={styles.mapImage} />
          </>
        ) : (
          <Text style={styles.errorText}>Map not found</Text>
        )}
      </View>
    </LinearGradient>
  );
};

export default SelectedMapScreen;