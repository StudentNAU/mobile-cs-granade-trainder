import { View, Text, Image } from "react-native";

const TrigerMapSelector = ({title, image}) => {
    

    return (
        <View style={{flexDirection: "row", borderBottomWidth: 1, gap: 8, alignItems: 'center', paddingVertical: 8, paddingHorizontal: 4, borderColor: '#a5adab'}}>
            <Image style={{width: 40, height: 40}} source={image}/>
            <Text>
                {title}
            </Text>
        </View>
    )
}
export default TrigerMapSelector;