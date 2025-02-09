import { View, Text, ScrollView } from "react-native";
import TrigerMapSelector from "./components/TrigerElement";
import { LinearGradient } from 'expo-linear-gradient';
import { mapSelectorMockedData } from "./mocks/MapSelectorMockedData";

const MapSelectorScreen = () => {
    return (
        <LinearGradient style={{flex: 1}} colors={['#D3D3D3', '#A9A9A9', '#808080']}>
            <View> 
                {
                    mapSelectorMockedData.map((item, index) => {
                        return (
                            <TrigerMapSelector title={item.title} image={item.image} key={index} />
                        )
                    })
                }
            </View>
        </LinearGradient>

    )
}
export default MapSelectorScreen;