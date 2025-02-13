import { View, TouchableOpacity, Text, FlatList, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import React, { useState } from "react";
import { ImageBackground } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { mapSelectorMockedData } from "../MapSelector/mocks/mapSelectorMockedData";
import styles from "../MapSelector/MapSelectorStyles";

const MapSelectorScreen = () => {
  const navigation = useNavigation();
  const [selectedMap, setSelectedMap] = useState<string | null>(null);

  const handleSelectMap = (map: { title: string }) => {
    setSelectedMap(map.title);
  };

  const renderItem = ({ item }: { item: { title: string, image: any, background: any } }) => (
    <TouchableOpacity
      style={[styles.item, selectedMap === item.title && styles.selectedItem]}
      onPress={() => handleSelectMap(item)}
    >
      <ImageBackground
        source={item.background}
        style={styles.imageBackground}
        imageStyle={{ borderRadius: 10 }}
      >
        <Image source={item.image} style={styles.mapImage} />
        <Text style={styles.mapTitle}>{item.title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <LinearGradient style={{ flex: 1 }} colors={['#3A393F', '#A9A9A9', '#808080']}>
      <View style={styles.container}>
        <FlatList
          data={mapSelectorMockedData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          contentContainerStyle={styles.mapsContainer}
        />

        <TouchableOpacity
          style={[styles.button, !selectedMap && styles.disabledButton]}
          disabled={!selectedMap}
          onPress={() => navigation.navigate('Selected Map', { selectedMap })}
        >
          <ImageBackground
            source={require('./images/backgroundButton.gif')}
            style={styles.imageBackground}
          >
            <Text style={styles.buttonText}>GO</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default MapSelectorScreen;