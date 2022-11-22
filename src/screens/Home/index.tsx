import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Empty from "../../components/Empty";
import Separator from "../../components/Separator";
import Task from "../../components/Task";
import { styles } from "./styles";


export default function Home() {
    const [task, setTask] = useState("")
    const [inputSelected, setInputSelected] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image style={styles.logo} source={require('../../../assets/Logo.png')} />


                <View style={styles.form}>
                    <TextInput
                        style={[styles.input, {borderColor: inputSelected ? "#5E60CE" : "#0D0D0D"}]}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor="#6b6b6b"       
                        onChangeText={setTask}
                        value={task}
                        onFocus={() => setInputSelected(true)}
                        onBlur={() => setInputSelected(false)}
                    />
                    <TouchableOpacity style={styles.button}>
                        <Image style={styles.adicionarBotao} source={require('../../../assets/plus.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.containerTasks}>
                <View style={styles.create}>
                    <Text style={styles.textCreate}>Criadas</Text>
                    <Text style={styles.textCount}>0</Text>
                </View>
                <View style={styles.create}>
                    <Text style={styles.textEnd}>Concluidas</Text>
                    <Text style={styles.textCount}>0</Text>
                </View>
            </View>

            <Separator/>

            <View>
                {/* <Empty/> */}
                <View>
                    <Task/>
                </View>

            </View>

            

        </View>
    )
}