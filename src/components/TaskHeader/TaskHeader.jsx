import React, { useState } from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = () => {
	// sample values to be replaced
	const [totalTask, setTotalTask] = useState(0);
	const [unCompletedTask, setUncompletedTask] = useState(0);

	// NOTE: do not delete `data-cy` key value pair
	return (
		<div data-cy="task-header" className={styles.taskHeader}>
			<b data-cy="header-remaining-task">
				Uncompleted Task : {unCompletedTask}
			</b>
			<b data-cy="header-total-task">Total Task : {totalTask}</b>
		</div>
	);
};

export default TaskHeader;
