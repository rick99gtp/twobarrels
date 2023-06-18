import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HowToGetAJobHere = () => {
	useEffect(() => {
		document.title = "How We Work | Two Barrels LLC";
	}, []);
	return (
		<div className="outer-container">
			<div className="page-container">
				<h1 className="job-details-title">How To Get A Job Here</h1>
				<p>
					We want to hire as much talent as possible for developing software,
					networking, and making awesome websites, so the way we hire is a
					little different than you might expect.
				</p>
				<ul>
					<li>
						<strong>We’re always hiring</strong>
						<br />
						We service about 60ish products and over 3 million active businesses
						worldwide. It’s a lot of work. We have no investors and no debt.
						Family-owned and operated. We’re in the supporting good humans
						business. If you’re good at what you’re doing, we’re always hiring.
						We’re 800+ employees strong with offices in every state.
					</li>
					<li>
						<strong>We want you to show us something</strong>
						<br />
						You’d think it’s common sense, but it’s amazing how many times we
						get only vague resumes and cover letters, GitHub links with no code
						that actually shows your skills, or links to websites you might have
						helped make but with no description of the work you actually did.
						Frankly, normal wastes a lot of our time. We’re always interested in
						hiring new talent, but the ball is in your court to show us
						something relevant to why we should hire you.
					</li>
					<li>
						<strong>We want a cover letter</strong>
						<br />
						If you upload a resume and skip the cover letter, you are wasting
						your time and your application will not be reviewed. That said, we
						know software engineers, developers, and networking people are
						probably not experts at writing cover letters. So why are we judging
						you based off a document you suck at writing and that probably
						exaggerates what you’re capable of? Well, we hire for passion and
						culture, and we want to hear what you have to say. Use the cover
						letter to talk to us. Tell us what you’d like us to know.
					</li>
					<li>
						<strong>We want to talk to you</strong>
						<br />
						We try to respond to every single application that comes in.
						Ideally, we’d have a phone conversation with every applicant. We
						have 5 recruiters, and it’s not enough though. If you don’t hear
						back from us, it’s not that we hated you. It might just be that we
						get at least 100 to sometimes 300 applications a day to sift through
						and we’re pretty much always hiring for somewhere around 120ish
						positions. Persistence does pay off here.
					</li>
					<li>
						<strong>We strive for an equal playing field</strong>
						<br />
						From the highest C-level executive to entry-level anything, it all
						starts at the same place. If you’re going to be a Senior Software
						Engineer, our President of Marketing, or our new President of
						Engineering, your path goes through the very people you may have to
						manage. We treat everyone with dignity and respect.
					</li>
					<li>
						<strong>We want you to be yourself</strong>
						<br />
						Two Barrels embraces diversity and equal opportunity. We are
						committed to eliminating barriers in the workplace and building a
						team that represents a variety of backgrounds, perspectives and
						skills, and where everyone is comfortable and feels valued. We
						believe that the more inclusive we are, the better our work will be.
					</li>
				</ul>
				<h2>Our Recruiting Process</h2>
				<p>
					Once you’ve applied, what happens next? Here’s what you can expect
					after you apply at Two Barrels:
				</p>
				<ul>
					<li>
						<strong>Privacy.</strong> To start with, we do not use third party
						software to organize and run our applicants because we believe in
						privacy as a default. We do not want people’s private information
						stored on third-party applications.
					</li>
					<li>
						<strong>Phone interview.</strong> If your cover letter and other
						application materials look good, you’ll get an email from us asking
						to have a less than 30-minute phone call to doublecheck we’re both
						on the same page.
					</li>
					<li>
						<strong>Video interview.</strong> If we both want to move forward
						we’ll have a video interview. We can bounce some questions back and
						forth over email or phone, but our goal is to tell you yes or no
						within 1 week of the initial interview. Our recruiters have full
						authority to actually hire you. Sometimes we might want to do a
						second interview, and on some types of jobs we might want to do a
						skill test.
					</li>
					<li>
						<strong>Offer. </strong>We want you to sleep on it for a couple
						nights and get back to us and see if you catch a vibe from us. We
						feel like we’re both on a journey, and we don’t want to talk you
						into working here.
					</li>
				</ul>
				<p>
					Throughout the whole process, we’ll try to be as honest as possible
					and paint as bad of a picture as possible for you so you can hopefully
					trust us as much as possible and give both of us the best shot at
					success. It’s a big move for you, and we don’t want to be a problem
					for you.
				</p>
				<p>We’d like to be the solution you’ve been looking for.</p>
				<h6>
					<Link to="/jobs/apply-now">
						Apply Now
						<FontAwesomeIcon className="btn-send-icon" icon={"chevron-right"} />
					</Link>
				</h6>
			</div>
		</div>
	);
};

export default HowToGetAJobHere;
