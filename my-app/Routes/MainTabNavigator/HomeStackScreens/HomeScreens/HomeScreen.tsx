import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
    return (
        <ImageBackground 
            source={require('../HomeScreens/MapSelector/images/HomeWallpaper.webp')} 
            style={styles.background}
        >
            <View>
                <TouchableOpacity 
                    style={styles.playButton} 
                    onPress={() => navigation.navigate("Map Selector")}
                >
                    <Text style={styles.buttonText}>PLAY</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1, 
        resizeMode: "cover",
        justifyContent: "flex-start",
    },
    playButton: {
        position: "absolute",
        top: 10,
        alignSelf: "center",
        width: 150,
        height: 50,
        backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 0,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    }
});

export default HomeScreen;