import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import Checkbox from 'expo-checkbox';
import { styles } from "./styles";
import { Feather } from '@expo/vector-icons';

type Props = {
    task: string
    onPressTask: () => void
}

export default function Task({ task, itemd, onPressTask }: Props) {
    const [isChecked, setChecked] = useState(false);
    const [selected, setSelected] = useState([{id: 1, name: 'teste', selected: false}])

    function teste() {
        setChecked(!isChecked)
    }

    function toggle() {
        console.log(selected)
        setChecked(!isChecked)
    }

    return (
        <TouchableOpacity style={styles.container} onPress={toggle}>
            <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#5E60CE' : undefined}
            />
            <Text style={styles.task}>{task}</Text>
            <TouchableOpacity onPress={() => console.log("clicou")}>
                <Feather style={styles.icone} name="trash-2" size={22} color="#808080" />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}