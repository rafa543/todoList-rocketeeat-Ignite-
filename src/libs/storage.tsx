import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export async function loadTask() {
    try {
        const data = await AsyncStorage.getItem('@tasks:task')
        const jsonValue = JSON.parse(data!);
        // console.log(jsonValue)
        return jsonValue
    } catch (error) {
        console.log(error+ "nao encontrou")
        Alert.alert("Deu Erro")
    }
}


