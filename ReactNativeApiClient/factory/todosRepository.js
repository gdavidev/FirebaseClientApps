import {doc, deleteDoc, getDocs, addDoc, updateDoc} from "firebase/firestore";
import {todoCollection} from "./firestore";
import Todo from "../data/Todo";

export default class TodosRepository {
    static async getAllTodos() {
        const snapshot = await getDocs(todoCollection)
        const todos = [];

        snapshot.forEach(doc => {
            const data = doc.data()

            todos.push(new Todo(
                doc.id,
                data.Name,
                data.Description,
                data.Done,
            ))
        });

        return todos;
    }

    static async createTodo(todo) {
        const document = await addDoc(todoCollection, {
            Name: todo.name,
            Description: todo.description,
            Done: false
        })
        return document.id;
    }
    
    static async setTodoDoneStatus(todoId, newStatus) {
        const docRef = doc(
            todoCollection,
            todoId);
        await updateDoc(docRef, { Done: newStatus })
    }

    static async deleteTodo(todoId) {
        const docRef = doc(
            todoCollection,
            todoId);
        await deleteDoc(docRef);
    }
}