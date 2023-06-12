import jobDetails from "./JobDetails";

const JobDetail = ({ jobTitle }) => {
	return <div className="job-detail-container">{jobDetails[jobTitle]}</div>;
};

export default JobDetail;
