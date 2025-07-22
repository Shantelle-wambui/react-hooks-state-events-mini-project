import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  const filteredTasks = tasks.filter(task =>
    selectedCategory === "All" ? true : task.category === selectedCategory
  );
  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }
function handleDeleteTask(taskText) {
    const updatedTasks = tasks.filter(task => task.text !== taskText);
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
       categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        />
      <NewTaskForm 
       categories={CATEGORIES}
        onTaskFormSubmit={handleAddTask}
      />
      <TaskList  tasks = {filteredTasks} onDelete={handleDeleteTask}/>
    </div>
  );
}

export default App;
