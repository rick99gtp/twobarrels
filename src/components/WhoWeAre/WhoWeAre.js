import "./WhoWeAre.css";
import Staff from "./Staff";
import { useEffect } from "react";

const WhoWeAre = () => {
	useEffect(() => {
		document.title = "Who freaking works here? | Two Barrels LLC";
	}, []);

	const staff = Staff.personData.map((e, idx) => (
		<div className="person-container" key={idx}>
			<div className="inner-div">
				<img src={e.image} alt="" />
				<div className="inner-div-text">
					<h5>{e.name}</h5>
				</div>
			</div>
		</div>
	));

	return (
		<div className="whoweare__container">
			<div className="whoweare__container--staff">
				<h1>Who We Are</h1>
				<hr />
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				{staff}
			</div>
		</div>
	);
};

export default WhoWeAre;
