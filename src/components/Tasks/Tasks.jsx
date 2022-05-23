import React from "react";
import styles from "./tasks.module.css";
import Counter from "../Counter/Counter";

const Tasks = ({ task }) => {
	// NOTE: do not delete `data-cy` key value pair
	return (
		<>
			<ul data-cy="tasks" className={styles.tasks}>
				{task.map((tasks) => {
					return (
						<li>
							<div className={styles.flex}>
								<div>{tasks}</div>
								<div>
									<Counter initialValue={1} />
								</div>
							</div>
						</li>
					);
				})}
			</ul>
			<div data-cy="tasks-empty" className={styles.empty}>
				{/* Show when No Tasks are present */}
			</div>
		</>
	);
};

export default Tasks;
