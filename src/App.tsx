import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme === "true";
  });

  const [tasks, setTasks] = useState<string[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  function addTask(taskText: string) {
    const updatedTasks = [...tasks, taskText];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  function deleteTask(indexToDelete: number) {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  function toggleTheme() {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("darkMode", String(newTheme));
  }

  return (
    <main className={isDarkMode ? "app dark" : "app light"}>
      <section className="card">
        <div className="header">
          <div>
            <h1>Task Manager</h1>
            <p>Add tasks, keep them saved, and switch your theme.</p>
          </div>

          <ThemeToggle isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
        </div>

        <TaskForm onAddTask={addTask} />
        <TaskList tasks={tasks} onDeleteTask={deleteTask} />
      </section>
    </main>
  );
}

export default App;