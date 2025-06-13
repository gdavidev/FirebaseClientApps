import {FlatList, StyleSheet, RefreshControl, Pressable} from "react-native";
import TodoItem from "../TodoItem";

// Example usage with dummy data
export default function TodoList({data, onDonePress, onLongPress, refreshing, onRefresh}) {
    return (
        <FlatList
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            contentContainerStyle={styles.list}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Pressable
                    onLongPress={() => onLongPress(item)}
                >
                    <TodoItem
                        todo={item}
                        onDonePress={() => onDonePress(item)}
                    />
                </Pressable>
            )}
        />
    );
}

const styles = StyleSheet.create({
    list: {
        padding: 20,
        width: '100%'
    }
});