import { useState } from "react";

type TaskFormProps = {
  onAddTask: (taskText: string) => void;
};

function TaskForm({ onAddTask }: TaskFormProps) {
  const [taskText, setTaskText] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (taskText.trim() === "") {
      return;
    }

    onAddTask(taskText.trim());
    setTaskText("");
  }

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Enter a task"
        value={taskText}
        onChange={(event) => setTaskText(event.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;