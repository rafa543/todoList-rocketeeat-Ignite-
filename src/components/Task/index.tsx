import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import Checkbox from 'expo-checkbox';
import { styles } from "./styles";
import { Feather } from '@expo/vector-icons';

interface Task {
    title: string;
    done: boolean;
}

type Props = {
    taskTitle: string
    onRemove: () => void
    onPress: (checked: Task) => void;
}

export default function Task({ taskTitle, onPress, onRemove }: Props) {
    const [isChecked, setChecked] = useState(false);

    function toggle() {
        setChecked(!isChecked)

        const task: Task = {
            title: taskTitle,
            done: !isChecked
        }

        onPress(task)
    }

    return (
        <TouchableOpacity style={styles.container} onPress={() => toggle()}>
            <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={toggle}
                color={isChecked ? '#5E60CE' : undefined}
            />
            <Text style={[styles.task, { textDecorationLine: isChecked ? 'line-through' : 'none', color: isChecked ? '#808080' : "#fff" }]}>{taskTitle}</Text>
            <TouchableOpacity onPress={onRemove}>
                <Feather style={styles.icone} name="trash-2" size={22} color="#808080" />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}