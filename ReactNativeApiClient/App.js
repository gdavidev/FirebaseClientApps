import {StatusBar} from 'expo-status-bar';
import {Alert, Button, Pressable, Modal, StyleSheet, Text, TextInput, View} from 'react-native';
import {useCallback, useEffect, useState} from "react";
import TodosRepository from "./factory/todosRepository";
import TodoList from "./components/TodoList";
import Todo from "./data/Todo";
import TodoItem from "./TodoItem";

export default function App() {
    const [inputName, setInputName] = useState('');
    const [inputDescription, setInputDescription] = useState('');
    const [isLoading, setLoading] = useState(true);
    const [todos, setTodos] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(undefined);

    const fetchTodos = useCallback(() => {
        setLoading(true)
        TodosRepository.getAllTodos()
            .then(data => {
                setTodos(data)
                setLoading(false)
            })
    }, [setTodos, setLoading])

    useEffect(() => {
        fetchTodos();
    }, []);

    const handleSubmit = useCallback(() => {
        if (!inputName || !inputDescription) {
            Alert.alert('Validation', 'Please fill in all fields');
            return;
        }

        const newTodo = new Todo(undefined, inputName, inputDescription, false)
        TodosRepository.createTodo(newTodo)
            .then(newId => {
                newTodo.id = newId
                setTodos(t => [...t, newTodo])
            });
    }, [inputName, inputDescription]);

    const handleDoneClick = useCallback((todo) => {
        const newStatus = !todo.done

        setTodos(prevTodos =>
            prevTodos.map(t => t.id === todo.id ? { ...t, done: newStatus } : t));

        TodosRepository.setTodoDoneStatus(todo.id, newStatus)
            .then(() => console.log("succ"))
    }, [setTodos, TodosRepository]);

    const handleDeleteClick = useCallback((todo) => {
        setTodos(prevTodos =>
            prevTodos.filter(t => t.id !== todo.id));

        TodosRepository.deleteTodo(todo.id)
            .then(() => console.log("succ"))
    }, [setTodos, TodosRepository])

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text>Name:</Text>
                <TextInput
                    placeholder="Enter the task name"
                    style={styles.textInput}
                    onChangeText={setInputName} />
                <Text>Description:</Text>
                <TextInput
                    placeholder="Enter the task description"
                    style={styles.textInput}
                    onChangeText={setInputDescription} />

                <Button title="Create" onPress={handleSubmit} />
            </View>

            <View style={{ flex: 1 }}>
            {
                isLoading ? (
                    <Text>Loading...</Text>
                ) : (
                    todos.length === 0 ? (
                        <Text>No Todos Loaded</Text>
                    ) : (
                        <TodoList
                            data={todos}
                            refreshing={isLoading}
                            onRefresh={fetchTodos}
                            onLongPress={(todo) => {
                                setModalVisible(true)
                                setSelectedTodo(todo)
                            }}
                            onDonePress={handleDoneClick}
                        />
                    )
                )
            }
            </View>

            <Modal
                transparent
                animationType="fade"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <Pressable style={styles.modalBackdrop} onPress={() => setModalVisible(false)}>
                    <View style={styles.modalContainer}>
                        <TodoItem
                            todo={selectedTodo}
                            onDonePress={() => {
                                setSelectedTodo(t => ({...t, done: !t.done }));
                                handleDoneClick(selectedTodo)
                            }} />
                        <Button
                            title="Delete"
                            onPress={() => {
                                handleDeleteClick(selectedTodo)
                                setModalVisible(false)
                                setSelectedTodo(undefined)
                            }}
                            style={styles.option} />
                    </View>
                </Pressable>
            </Modal>

            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    todoText: {
        color: 'black',
    },
    form: {
        padding: 20,
        marginTop: 40,
        width: '100%'
    },
    textInput: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        width: '100%'
    },
    label: {
        marginBottom: 5,
    },
    modalBackdrop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 24,
        borderRadius: 16,
        minWidth: 250,
        alignItems: 'center',
        elevation: 6,
    },
    option: {
        fontSize: 18,
        paddingVertical: 10,
    },
});
