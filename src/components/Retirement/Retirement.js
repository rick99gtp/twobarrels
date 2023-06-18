import { useEffect } from "react";

const Retirement = () => {
	useEffect(() => {
		document.title = "Retirement";
	}, []);
	return (
		<div className="outer-container">
			<div className="job-detail-container">
				<h1 className="job-details-title">Retirement</h1>
				<p>
					Two Barrels provides an optional Safe Harbor 401(k) plan managed by
					Fidelity and makes matching contributions of up to 4% of an employee’s
					annual compensation. Employees can enroll on the first day following
					60 days of employment and take advantage of the 401(k)’s tax-deferred
					growth potential with pretax contributions. An independent financial
					advisor is available for guidance to help you choose your investments
					wisely and create a long-term plan.
				</p>
				<p>Some perks about 401(k) plans:</p>
				<ul>
					<li>
						Employer contributions vest immediately. No vesting period means you
						have 100% ownership of all the money in your 401(k).
					</li>
					<li>Individuals can rollover existing 401(k) plans into this one.</li>
					<li>
						You can contribute as much as legally allowed or as little as you
						want.
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Retirement;
