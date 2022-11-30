import { useState } from "react";
import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Empty from "../../components/Empty";
import Separator from "../../components/Separator";
import Task from "../../components/Task";
import { styles } from "./styles";

interface Task {
    id: number
    title: string;
    done: boolean;
}

export default function Home() {
    const [newTask, setNewTask] = useState<Task[]>([])
    const [task, setTask] = useState("")
    const [inputSelected, setInputSelected] = useState(false)

    function handleTaskAdd() {
        if (task === '') {
            return Alert.alert("Tarefa vazia", "Tarefa não pode ser vazia.")
        }

        const Task: Task = {
            id: new Date().getTime(),
            title: task,
            done: false
        }
        setNewTask(precState => [...precState, Task])
        setTask('')
    }

    function handleRemoveTask(name: string) {
        Alert.alert("Remover", `Remover a tarefa ${name}?`, [
            {
                text: 'Sim',
                onPress: () => {
                    setNewTask(prevState => prevState.filter(task => task.title !== name))
                }
            },
            {
                text: "Não",
                style: 'cancel'
            }
        ])
    }

    function handleMarkTaskAsDone(checked: Task) {
        setNewTask(array => array.map(item => {
            if (item.title === checked.title) {
                if (checked.done === true) {
                    item.done = true;
                } else {
                    item.done = false;
                }
            }
            return item
        }))

    }

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image style={styles.logo} source={require('../../assets/Logo.png')} />

                <View style={styles.form}>
                    <TextInput
                        style={[styles.input, { borderColor: inputSelected ? "#5E60CE" : "#0D0D0D" }]}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor="#6b6b6b"
                        onChangeText={setTask}
                        value={task}
                        onFocus={() => setInputSelected(true)}
                        onBlur={() => setInputSelected(false)}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
                        <Image style={styles.adicionarBotao} source={require('../../assets/plus.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.containerTasks}>
                <View style={styles.create}>
                    <Text style={styles.textCreate}>Criadas</Text>
                    <Text style={styles.textCount}>{newTask.length || 0}</Text>
                </View>
                <View style={styles.create}>
                    <Text style={styles.textEnd}>Concluidas</Text>
                    <Text style={styles.textCount}>{newTask.filter(task => task.done === true).length || 0}</Text>
                </View>
            </View>


            {
                newTask.length > 0 ? <></> : <Separator />
            }

            <View style={{ flex: 1 }}>
                <View style={{ marginHorizontal: 24 }}>
                    <FlatList
                        data={newTask}
                        keyExtractor={item => String(item.id)}
                        renderItem={({ item }) => (
                            <Task
                                key={item.id}
                                taskTitle={item.title}
                                onRemove={() => handleRemoveTask(item.title)}
                                onPress={handleMarkTaskAsDone}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={() => (
                            <Empty />
                        )}
                    />

                </View>

            </View>



        </View>
    )
}