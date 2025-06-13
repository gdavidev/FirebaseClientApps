import {StyleSheet, Switch, Text, View} from "react-native";

export default function TodoItem({ todo, onDonePress }) {
    return (
        <View style={[styles.card, todo.done && styles.cardDone]}>
            <View style={styles.textContainer}>
                <Text style={[styles.name, todo.done && styles.textDone]}>
                    {todo.name}
                </Text>
                <Text style={[styles.description, todo.done && styles.textDone]}>
                    {todo.description}
                </Text>
            </View>
            <Switch
                value={todo.done}
                onValueChange={onDonePress}
                thumbColor={todo.done ? '#4caf50' : '#ccc'}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f2f2f2',
        padding: 16,
        marginBottom: 16,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    cardDone: {
        backgroundColor: '#e0f7e9',
    },
    textContainer: {
        flex: 1,
        marginRight: 10,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    description: {
        fontSize: 14,
        color: '#555',
    },
    textDone: {
        textDecorationLine: 'line-through',
        color: '#999',
    },
});
