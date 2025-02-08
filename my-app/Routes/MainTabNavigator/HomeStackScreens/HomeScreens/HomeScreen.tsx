import { View, Text, Button } from "react-native";

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text>
                Home screen
            </Text>
            <Button title={'Play'} onPress={() => navigation.navigate('Map Selector')}/>
        </View>
    )
}
export default HomeScreen;