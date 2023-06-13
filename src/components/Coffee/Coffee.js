import { useEffect } from "react";

const Coffee = () => {
	useEffect(() => {
		document.title = "Coffee!";
	}, []);
	return (
		<div className="job-detail-container">
			<h1 className="job-details-title">Coffee!</h1>
			<p>
				Not only do we have a coffee shop next door, we are centrally located in
				downtown Spokane within walking distance from the area’s best cafes,
				restaurants, and bars.
			</p>
		</div>
	);
};

export default Coffee;
