import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesScreensParamsList } from "../models/RoutesParams";
import { RoutesDrawerParamsList } from "../models/RoutesDrawerParams";


export function navigationScreens() {
    const navigation = useNavigation<
        NativeStackNavigationProp<
            RoutesScreensParamsList>>();

    return navigation;
}

export function navigationAll() {
    const navigation = useNavigation<
        NativeStackNavigationProp<
             RoutesScreensParamsList
                & RoutesDrawerParamsList
        >>();

    return navigation;
}