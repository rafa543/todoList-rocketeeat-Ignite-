import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#262626',
        borderRadius: 8,
        paddingVertical: 10,
        marginBottom: 10
    },
    checkbox: {
        margin: 15,
        borderRadius: 10,
        borderColor: '#4EA8DE',
        fontSize: 10
    },
    task: {
        flex: 1,
        fontSize: 15,
        color: '#F2F2F2',
        lineHeight: 20,
    },
    icone: {
        marginRight: 15
    }
})