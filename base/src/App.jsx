import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './components/ToDoList'; // Import from components folder
import ToDoForm from './components/ToDoForm'; // Import from components folder

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  // Function to add a new task
  const addTask = (newTask) => {
    // Check if the task is not empty and not already in the tasks
    if (newTask && !tasks.includes(newTask)) {
      setTasks([...tasks, newTask]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f5f5f5',
  },
});

export default App;
