import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: '100%',
        // paddingTop: 50,
        // paddingBottom: 80,
        // paddingHorizontal: 24,
        backgroundColor: "#191919"
    },
    containerLogo: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#0D0D0D",
        paddingTop: 50,
        paddingBottom: 50,
    },
    logo: {
        width: 110,
        height: 32
    },
    form: {
        width: "100%",
        flexDirection: 'row',
        marginBottom: 42,
        paddingHorizontal: 24,
        position: 'absolute',
        top: 105
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#262626',
        borderRadius: 6,
        color: '#fff',
        padding: 16,
        fontSize: 16,
        marginRight: 4
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
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 24,
    },
    create: {
        flexDirection: 'row',
        marginBottom: 20
    },
    textCreate: {
        color: '#4EA8DE',
        fontSize: 14,
        fontWeight: 'bold'
    },
    textEnd: {
        color: '#8284FA',
        fontSize: 14,
        fontWeight: 'bold'
    },
    textCount : {
        marginLeft: 8,
        color: '#D9D9D9',
        fontWeight: 'bold',
        fontSize: 12,
        width: 25,
        height: 19,
        borderRadius: 999,
        textAlign: 'center',
        backgroundColor: '#333333'
    }
})