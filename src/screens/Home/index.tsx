import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Empty from "../../components/Empty";
import Separator from "../../components/Separator";
import { loadTask } from "../../libs/storage";
import Task from "../../components/Task";
import { styles } from "./styles";

interface Task {
    title: string;
    done: boolean;
}

export default function Home() {
    const [todoList, setTodoList] = useState<string[]>([])
    const [newTask, setNewTask] = useState<Task[]>([])
    const [task, setTask] = useState("")
    const [inputSelected, setInputSelected] = useState(false)

    useEffect(() => {
        // loadTask()
        
        // async function loadTask2() {
        //     const tasks = await loadTask()
        //     setNewTask(tasks)
        // }
        // loadTask2()
    }, []);



    async function addTaskStorage() {
        try {
            await AsyncStorage.setItem("@tasks:task", JSON.stringify(newTask));
            console.log('salvou')
        } catch (error) {
            Alert.alert("Deu Error")
            throw new Error("Deu erro")
        }
    }

    async function addCheckStorage() {
        try {
            AsyncStorage.setItem("@tasks:taskCheckd", JSON.stringify(todoList));
            console.log('salvou')
        } catch (error) {
            console.log(error)
            Alert.alert("Deu Error")
        }
    }

    function handleTaskAdd() {
        if (task === '') {
            return Alert.alert("Tarefa vazia", "Tarefa não pode ser vazia.")
        }

        const Task: Task = {
            title: task,
            done: false
        }
        setNewTask(precState => [...precState, Task])
        // addTaskStorage()
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
                    console.log(item.done)
                    item.done = false;
                }
            }
            return item
        }))
        console.log(newTask)

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
                todoList.length > 0 ? <></> : <Separator />
            }

            <View style={{ flex: 1 }}>
                <View style={{ marginHorizontal: 24 }}>
                    <FlatList
                        data={newTask}
                        keyExtractor={item => item.title}
                        renderItem={({ item }) => (
                            <Task
                                key={item.title}
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