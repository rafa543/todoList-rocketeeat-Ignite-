import { useState } from "react";
import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Empty from "../../components/Empty";
import Separator from "../../components/Separator";
import Task from "../../components/Task";
import { styles } from "./styles";


export default function Home() {
    const [todoList, setTodoList] = useState<string[]>(['dasfasd', '3fevv'])
    const [totalConcluidas, setTotalConcluidas] = useState<string[]>([])
    const [teste, setTeste] = useState(0)
    const [task, setTask] = useState("")
    const [inputSelected, setInputSelected] = useState(false)

    function handleTaskAdd() {
        if (todoList.includes(task)) {
            return Alert.alert("Participante Existe", "Já existe um participante na lista com esse nome.")
        }

        setTodoList(precState => [...precState, task])
        setTask('')
    }

    function handlePressTask(nome: string) {
        console.log(nome)
        setTotalConcluidas(precState => [...precState, nome])
        // setTotalConcluidas(prevState => prevState.filter(totalConcluidas => totalConcluidas !== nome))
       console.log(totalConcluidas)
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image style={styles.logo} source={require('../../../assets/Logo.png')} />


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
                        <Image style={styles.adicionarBotao} source={require('../../../assets/plus.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.containerTasks}>
                <View style={styles.create}>
                    <Text style={styles.textCreate}>Criadas</Text>
                    <Text style={styles.textCount}>{todoList.length}</Text>
                </View>
                <View style={styles.create}>
                    <Text style={styles.textEnd}>Concluidas</Text>
                    <Text style={styles.textCount}>{teste}</Text>
                </View>
            </View>

            <Separator />

            <View>
                <View style={{ marginHorizontal: 24 }}>
                    <FlatList
                        data={todoList}
                        keyExtractor={item => item}
                        renderItem={({ item }) => (
                            <Task
                            key={item}
                            task={item}
                            onPressTask={() => handlePressTask(item)}
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