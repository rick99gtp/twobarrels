import "./HealthInsurance.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMedkit,
	faBuilding,
	faFile,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const HealthInsurance = () => {
	useEffect(() => {
		document.title = "Health Insurance";
	}, []);
	return (
		<div className="outer-container">
			<div className="job-detail-container">
				<h1 className="job-details-title">Health Insurance</h1>
				<p>
					Two Barrels is proud to offer its employees 100% employer-paid
					medical, dental and vision insurance through Blue Cross of Idaho.
					There is a 60 day waiting period for new employees, and coverage
					begins the first of the month following the end of the waiting period.
				</p>
				<p>Read through the following items if you’d like to learn more:</p>
				<div className="icon-list-item">
					<FontAwesomeIcon
						style={{ fontSize: "30px", position: "absolute", left: "10px" }}
						icon={faMedkit}
					/>
					<p>
						<a
							href="https://www.twobarrels.com/wp-content/uploads/2022/11/2023-2B-High-Level-Healthcare-Summary.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							Insurance Plan High Level Summary
						</a>
					</p>
				</div>
				<div className="icon-list-item">
					<FontAwesomeIcon
						style={{ fontSize: "30px", position: "absolute", left: "10px" }}
						icon={faBuilding}
					/>
					<p>
						<a
							href="http://www.twobarrels.com/wp-content/uploads/2021/12/2B-2022-SBC-PPO-1500.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							Premera Blue Cross Summary Plan $1,500 Deductible
						</a>
					</p>
				</div>
				<div className="icon-list-item">
					<FontAwesomeIcon
						style={{ fontSize: "30px", position: "absolute", left: "10px" }}
						icon={faBuilding}
					/>
					<p>
						<a
							href="http://www.twobarrels.com/wp-content/uploads/2021/12/2B-2022-SBC-PPO-4000.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							Premera Blue Cross Summary Plan $4,000 Deductible
						</a>
					</p>
				</div>
				<div className="icon-list-item">
					<FontAwesomeIcon
						style={{ fontSize: "30px", position: "absolute", left: "10px" }}
						icon={faBuilding}
					/>
					<p>
						<a
							href="http://www.twobarrels.com/wp-content/uploads/2021/12/2B-2022-SBC-PPO-4000-HSA.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							Premera Blue Cross Summary HSA Plan $4,000 Deductible
						</a>
					</p>
				</div>
				<div className="icon-list-item">
					<FontAwesomeIcon
						style={{ fontSize: "30px", position: "absolute", left: "10px" }}
						icon={faFile}
					/>
					<p>
						<a
							href="http://www.twobarrels.com/wp-content/uploads/2017/06/SBC-uniform-glossary-final.pdf.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							Glossary of Health Coverage &amp; Medical Terms
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default HealthInsurance;
