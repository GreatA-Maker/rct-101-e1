import React, { useState } from "react";
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks";
import TaskHeader from "./TaskHeader/TaskHeader";

import styles from "./taskApp.module.css";
// import data from "../data/tasks.json";

const TaskApp = () => {
	// NOTE: do not delete `data-cy` key value pair

	const [task, setTask] = useState([]);

	const addTask = (newTask) => {
		setTask([...task, newTask]);
	};
	return (
		<div data-cy="task-app" className={styles.taskApp}>
			<TaskHeader />
			<AddTask addTask={addTask} />
			<Tasks task={task} />
		</div>
	);
};

export default TaskApp;
