import React from "react";
import styles from "./counter.module.css";

const Counter = ({ initialValue }) => {
	// sample value to be replaced
	const [count, setCount] = React.useState(initialValue);

	// NOTE: do not delete `data-cy` key value pair
	return (
		<div className={styles.counter}>
			<button
				data-cy="task-counter-increment-button"
				onClick={() => setCount(count + 1)}
			>
				+
			</button>
			<span data-cy="task-counter-value">{count}</span>
			<button
				data-cy="task-counter-decrement-button"
				onClick={() => {
					if (count > 0) {
						setCount(count - 1);
					}
				}}
			>
				-
			</button>
		</div>
	);
};

export default Counter;
