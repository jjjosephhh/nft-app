import { FC } from "react";
import { Text, View } from "react-native";

interface Props {
    text: string;
}
const ScreenPlaceholder: FC<Props> = ({text}) => {
    return (
        <View style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{
                fontSize: 48,
                fontWeight: 'bold',
            }}>{text}</Text>
        </View>
    );
};

export default ScreenPlaceholder;