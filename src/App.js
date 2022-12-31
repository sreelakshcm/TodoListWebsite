import { useState } from "react";
import "./App.css";
import { Done } from "@material-ui/icons";

function App() {
	const [newTask, setNewTask] = useState("");
	const [todoList, setTodoList] = useState([]);

	const handleChanges = (event) => {
		setNewTask(event.target.value);
	};

	const handleInput = () => {
		const task = {
			id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
			taskName: newTask,
			completed: false,
		};
		setTodoList([...todoList, task]);
	};

	const deleteTask = (id) => {
		setTodoList(todoList.filter((task) => task.id !== id));
	};

	const handleCompleted = (id) => {
		setTodoList(
			todoList.map((task) => {
				if (task.id === id) {
					return { ...task, completed: true };
				} else {
					return task;
				}
			})
		);
	};

	return (
		<div className="header">
			<div className="input-list center">
				<input onChange={handleChanges} placeholder="Enter a task" />
				<button className="add-btn" onClick={handleInput}>
					Add Task
				</button>
			</div>

			<div className="list-buttons">
				<div className="list">
					{todoList.map((task, key) => {
						return (
							<div className="taskbox">
								<div
									style={{
										textDecoration: task.completed ? "line-through" : "none",
									}}
								>
									<h4>{task.taskName}</h4>
								</div>
								<div className="list-buttons">
									<button
										className="done-btn center"
										onClick={() => handleCompleted(task.id)}
									>
										<Done />
									</button>
									<button
										className="del-btn center"
										key={key.id}
										onClick={() => deleteTask(task.id)}
									>
										X
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
