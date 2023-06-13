import { useEffect } from "react";

const WFHComfortPackage = () => {
	useEffect(() => {
		document.title = "WFH Comfort Package";
	}, []);
	return (
		<div className="job-detail-container">
			<h1 className="job-details-title">WFH Comfort Package</h1>
			<p>
				A Work From Home comfort package will be available to choose items to
				make a more productive and comfortable at home work experience. Need a
				new chair? Cool. A desk? We’ve got you covered. Additionally, eligible
				employees qualify for a WFH quarterly allowance. Think of this allowance
				as a way to upgrade your internet, pay for downtown parking, or to buy
				yourself a fancy espresso machine. You do you.
			</p>
		</div>
	);
};

export default WFHComfortPackage;
