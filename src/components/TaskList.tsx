type TaskListProps = {
  tasks: string[];
  onDeleteTask: (index: number) => void;
};

function TaskList({ tasks, onDeleteTask }: TaskListProps) {
  if (tasks.length === 0) {
    return <p className="empty-message">No tasks yet. Add one to get started.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index}>
          <span>{task}</span>
          <button onClick={() => onDeleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;