import { useEffect } from "react";

const MaternityPaternityLeave = () => {
	useEffect(() => {
		document.title = "Maternity and Paternity Leave";
	}, []);
	return (
		<div className="job-detail-container">
			<h1 className="job-details-title">Maternity and Paternity Leave</h1>
			<p>
				Having a child join your family is a big deal! We want you to take some
				time and enjoy this new chapter in life, so we offer three weeks of paid
				Maternity and Paternity Leave. This leave is for biological or adopted
				children.
			</p>
		</div>
	);
};

export default MaternityPaternityLeave;
