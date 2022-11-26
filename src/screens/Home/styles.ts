import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: "#191919"
    },
    containerLogo: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#0D0D0D",
        paddingTop: 50,
        paddingBottom: 70,
    },
    logo: {
        width: 138,
        height: 40,
    },
    form: {
        width: "100%",
        flexDirection: 'row',
        marginBottom: 42,
        paddingHorizontal: 24,
        position: 'absolute',
        top: 130
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#262626',
        borderRadius: 6,
        color: '#fff',
        padding: 16,
        fontSize: 16,
        marginRight: 4,
        borderWidth: 1
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 6,
        backgroundColor: "#1E6F9F",
        alignItems: 'center',
        justifyContent: 'center'
    },
    adicionarBotao: {
        width: 16,
        height: 16
    },
    containerTasks: {
        marginTop: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 24,
    },
    create: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    textCreate: {
        color: '#4EA8DE',
        fontSize: 16,
        fontWeight: 'bold'
    },
    textEnd: {
        color: '#8284FA',
        fontSize: 16,
        fontWeight: 'bold'
    },
    textCount : {
        marginLeft: 8,
        color: '#D9D9D9',
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 20,
        width: 25,
        height: 19,
        borderRadius: 99,
        textAlign: 'center',
        backgroundColor: '#333333'
    }
})