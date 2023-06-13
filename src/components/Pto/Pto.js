import { useEffect } from "react";

const Pto = () => {
	useEffect(() => {
		document.title = "Paid Time Off (PTO)";
	}, []);
	return (
		<div className="job-detail-container">
			<h1 className="job-details-title">Paid Time Off (PTO)</h1>
			<p>
				New, full-time Two Barrels employees accrue 22 days paid time off each
				year. This time accrues each pay period, starting with your very first
				pay period. At three full years of employment, PTO increases, and you
				start accruing 29 days of PTO each year. Once earned, your PTO doesn’t
				expire, so you can even carry it over to the next calendar year. You can
				use your PTO for sick days, vacations, holidays, or personal days. You
				can also take additional unpaid time off, including extended unpaid
				time, if your work is getting done.
			</p>
			<p>
				On your 5-year anniversary, you’ll transition to flexible time off which
				means it’s not accrued or capped.
			</p>
			<p>
				To request time off, you’ll first talk to the people you’re working with
				on your current projects and work out what you need to do to make your
				time off happen. You can then tell the HR department when you’ll be
				gone. Our goal is always to plan extended time off beforehand. Time off
				is important, and it always works better with better planning.
			</p>
		</div>
	);
};

export default Pto;
