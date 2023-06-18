import { useEffect } from "react";

const Wages = () => {
	useEffect(() => {
		document.title = "Wages";
	}, []);
	return (
		<div className="outer-container">
			<div className="job-detail-container">
				<h1 className="job-details-title">Great Wage</h1>
				<p>
					Two Barrels pays well, and we care about the people who work here,
					which is why we conduct annual performance reviews with a raise option
					to provide opportunities for candid discussion. These reviews allow
					our employees to demonstrate how they excelled in the previous year
					and discuss their goals for the year to come.
				</p>
			</div>
		</div>
	);
};

export default Wages;
