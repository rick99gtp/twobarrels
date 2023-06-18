import { useEffect } from "react";

const FlexibleHours = () => {
	useEffect(() => {
		document.title = "Flexible Hours";
	}, []);
	return (
		<div className="outer-container">
			<div className="job-detail-container">
				<h1 className="job-details-title">Flexible Hours</h1>
				<p>
					Hey, some people are morning people and some people aren’t, so we
					don’t really care when you start your day… but you need to be able to
					coordinate your schedule with your team. If most of your team gets to
					the office at 7 am and you’re showing up at 11 am, that probably won’t
					be sustainable. It’s common sense. You’ll need to show up when you’re
					needed or convince your team to sleep in a little later.
				</p>
				<p>
					We’re all “Computer Employees” exempt from overtime pay, but our goal
					is to never have to ask you to work over 40 hours. We know continually
					working a ton of hours is not sustainable. We’d like to think you can
					get more done when you’re fresh and happy.
				</p>
				<p>
					We have a hybrid approach to our work. Some of us live near offices, a
					lot of us don’t. That said, we generally have new hires come to
					Spokane for about a week to meet the local team. We like to think that
					we’re smarter when we work together. Collaboration and teamwork are
					key to how we work at Two Barrels.
				</p>
			</div>
		</div>
	);
};

export default FlexibleHours;
