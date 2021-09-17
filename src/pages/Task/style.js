import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 20,
    },
    Tasks: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    validateTasks: {
        flex: 1,
        width: "100%",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    textValidateTasks: {
        fontSize: 14,
        color: "#626262",
        paddingLeft: 5
    },
    deleteTask: {
        justifyContent: 'center',
        paddingRight: 10,
    },
    descriptionTask: {
        width: "86%",
        alignContent: 'flex-start',
        backgroundColor: "#f5f5f5cf",
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 5,
        marginLeft: 10,
        color: "#282b2db5",
    },
    buttonNewTask: {
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 30,
        left: 20,
        backgroundColor: "#F92e6a",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    iconButton: {
        color: "#fff",
        fontSize: 25,
        fontWeight: "bold",
    },
    buttonLogout: {
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 30,
        right: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    iconButtonLogout: {
        color: "#FFFFFF",
        fontSize: 25,
        fontWeight: "bold",
    }
})

export default styles;