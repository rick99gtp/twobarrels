import "./ApplyNow.css";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ApplyNow = () => {
	useEffect(() => {
		document.title = "Apply Now | Two Barrels LLC";
	}, []);
	return (
		<div className="outer-container">
			<div className="apply-now">
				<h1>Apply Now</h1>
				<p>
					We are interested in every qualified candidate who is eligible to work
					in the United States. However, we are not able to sponsor visas.
				</p>
				<form
					data-parsley-validate=""
					className="apply-form submittable-form"
					method="post"
					id="apply-form"
					encType="multipart/form-data"
					action="https://www.twobarrels.com/wp-content/themes/two-barrels/forms/apply/index.php"
					noValidate=""
				>
					<div className="full-group half-group">
						<div className="name-group">
							<div className="group-half">
								<div className="label-group first">
									<label htmlFor="f-name">First Name</label>
								</div>
								<div className="input-group first">
									<input
										className="full-width form-control"
										id="f-name"
										name="f-name"
										required=""
										type="text"
									/>
									<small className="form-error">First Name is required</small>
								</div>
							</div>
							<div className="group-half">
								<div className="label-group last">
									<label htmlFor="l-name">Last Name</label>
								</div>
								<div className="input-group last">
									<input
										className="full-width form-control"
										id="l-name"
										name="l-name"
										required=""
										type="text"
									/>
									<small className="form-error">Last Name is required</small>
								</div>
							</div>
						</div>
					</div>
					<div className="full-group">
						<div className="label-group first email">
							<label htmlFor="email">Email Address</label>
						</div>
						<div className="input-group first">
							<input
								className="full-width form-control"
								id="email"
								name="email"
								required=""
								type="email"
							/>
							<small className="form-error">Email is required</small>
						</div>
					</div>
					<div className="full-group">
						<div className="label-group last">
							<label htmlFor="phone">Phone Number</label>
						</div>
						<div className="input-group">
							<input
								className="full-width form-control"
								id="phone"
								name="phone"
								required=""
								type="tel"
							/>
							<small className="form-error">Phone is required</small>
						</div>
					</div>

					<div className="full-group">
						<div className="label-group first">
							<label htmlFor="apply-state">Where are you located?</label>
						</div>
						<div className="input-group first select">
							<select required="" name="apply-state">
								<option selected="" disabled="" value="">
									Select State
								</option>
								<option value="AK">Alaska</option>
								<option value="AL">Alabama</option>
								<option value="AR">Arkansas</option>
								<option value="AZ">Arizona</option>
								<option value="CA">California</option>
								<option value="CO">Colorado</option>
								<option value="CT">Connecticut</option>
								<option value="DC">District of Columbia</option>
								<option value="DE">Delaware</option>
								<option value="FL">Florida</option>
								<option value="GA">Georgia</option>
								<option value="HI">Hawaii</option>
								<option value="IA">Iowa</option>
								<option value="ID">Idaho</option>
								<option value="IL">Illinois</option>
								<option value="IN">Indiana</option>
								<option value="KS">Kansas</option>
								<option value="KY">Kentucky</option>
								<option value="LA">Louisiana</option>
								<option value="MA">Massachusetts</option>
								<option value="MD">Maryland</option>
								<option value="ME">Maine</option>
								<option value="MI">Michigan</option>
								<option value="MN">Minnesota</option>
								<option value="MO">Missouri</option>
								<option value="MS">Mississippi</option>
								<option value="MT">Montana</option>
								<option value="NC">North Carolina</option>
								<option value="ND">North Dakota</option>
								<option value="NE">Nebraska</option>
								<option value="NH">New Hampshire</option>
								<option value="NJ">New Jersey</option>
								<option value="NM">New Mexico</option>
								<option value="NV">Nevada</option>
								<option value="NY">New York</option>
								<option value="OH">Ohio</option>
								<option value="OK">Oklahoma</option>
								<option value="OR">Oregon</option>
								<option value="PA">Pennsylvania</option>
								<option value="RI">Rhode Island</option>
								<option value="SC">South Carolina</option>
								<option value="SD">South Dakota</option>
								<option value="TN">Tennessee</option>
								<option value="TX">Texas</option>
								<option value="UT">Utah</option>
								<option value="VA">Virginia</option>
								<option value="VT">Vermont</option>
								<option value="WA">Washington</option>
								<option value="WI">Wisconsin</option>
								<option value="WV">West Virginia</option>
								<option value="WY">Wyoming</option>
								<optgroup label="US Military">
									<option value="AA">Armed Forces Americas</option>
									<option value="AE">Armed Forces Europe</option>
									<option value="AP">Armed Forces Pacific</option>
								</optgroup>
								<optgroup label="US Territories">
									<option value="AS">American Samoa</option>
									<option value="GU">Guam</option>
									<option value="MP">Northern Mariana Islands</option>
									<option value="PR">Puerto Rico</option>
									<option value="VI">US Virgin Islands</option>
								</optgroup>
							</select>
						</div>
					</div>
					<div className="full-group">
						<div className="label-group">
							<label htmlFor="position">Position Applying For</label>
						</div>
						<div className="input-group">
							<select
								required=""
								id="position"
								name="position"
								className="form-control"
							>
								<option disabled="" selected="" value="none">
									Select a Position
								</option>
								<optgroup label="Management">
									<option
										data-team="Management"
										value="Director of Front End Development "
										data-section="lower"
									>
										Director of Front End Development{" "}
									</option>
									<option
										data-team="Management"
										value="Chief Product Officer"
										data-section="lower"
									>
										Chief Product Officer
									</option>
									<option
										data-team="Management"
										value="Director of Domain Registrar"
										data-section="lower"
									>
										Director of Domain Registrar
									</option>
									<option
										data-team="Management"
										value="CISO / XISO - Chief Information Security Officer"
										data-section="lower"
									>
										CISO / XISO - Chief Information Security Officer
									</option>
									<option
										data-team="Management"
										value="VOIP Business Manager"
										data-section="upper"
									>
										VOIP Business Manager
									</option>
									<option
										data-team="Management"
										value="CTO / XTO"
										data-section="lower"
									>
										CTO / XTO
									</option>
									<option
										data-team="Management"
										value="Chief Marketing Officer"
										data-section="upper"
									>
										Chief Marketing Officer
									</option>
									<option
										data-team="Management"
										value="Director of Software Engineering"
										data-section="upper"
									>
										Director of Software Engineering
									</option>
									<option
										data-team="Management"
										value="Director of Marketing Demand Generation"
										data-section="lower"
									>
										Director of Marketing Demand Generation
									</option>
									<option
										data-team="Management"
										value="Information Security Director"
										data-section="upper"
									>
										Information Security Director
									</option>{" "}
								</optgroup>

								<optgroup label="Software">
									<option
										data-team="Back-End"
										value="Project Coordinator"
										data-section="lower"
									>
										Project Coordinator
									</option>
									<option
										data-team="Back-End"
										value="Senior Software Engineer - VoIP"
										data-section="upper"
									>
										Senior Software Engineer - VoIP
									</option>
									<option
										data-team="Back-End"
										value="Product Manager- Merchant Services"
										data-section="lower"
									>
										Product Manager- Merchant Services
									</option>
									<option
										data-team="Back-End"
										value="Product Manager"
										data-section="upper"
									>
										Product Manager
									</option>
									<option
										data-team="Back-End"
										value="Data Scientist"
										data-section="lower"
									>
										Data Scientist
									</option>
									<option
										data-team="Back-End"
										value="Senior PHP Developer"
										data-section="upper"
									>
										Senior PHP Developer
									</option>
									<option
										data-team="Back-End"
										value="Junior Software Engineer"
										data-section="lower"
									>
										Junior Software Engineer
									</option>
									<option
										data-team="Back-End"
										value="VOIP Architect"
										data-section="lower"
									>
										VOIP Architect
									</option>
									<option
										data-team="Back-End"
										value="Database Administrator"
										data-section="lower"
									>
										Database Administrator
									</option>
									<option
										data-team="Back-End"
										value="Sr. iOS App Developer"
										data-section="lower"
									>
										Sr. iOS App Developer
									</option>
									<option
										data-team="Back-End"
										value="Senior Backend Developer"
										data-section="upper"
									>
										Senior Backend Developer
									</option>
									<option
										data-team="Back-End"
										value="Software Engineer - VoIP"
										data-section="lower"
									>
										Software Engineer - VoIP
									</option>
									<option
										data-team="Back-End"
										value="Android App Developer"
										data-section="lower"
									>
										Android App Developer
									</option>
									<option
										data-team="Back-End"
										value="Software Engineer"
										data-section="lower"
									>
										Software Engineer
									</option>
									<option
										data-team="Back-End"
										value="iOS App Developer"
										data-section="lower"
									>
										iOS App Developer
									</option>
									<option
										data-team="Back-End"
										value="Junior Automation Engineer"
										data-section="lower"
									>
										Junior Automation Engineer
									</option>
									<option
										data-team="Back-End"
										value="Senior Database Engineer"
										data-section="lower"
									>
										Senior Database Engineer
									</option>
									<option
										data-team="Back-End"
										value="Senior DevOps Engineer"
										data-section="upper"
									>
										Senior DevOps Engineer
									</option>
									<option
										data-team="Back-End"
										value="Senior Software Engineer (Ruby on Rails)"
										data-section="upper"
									>
										Senior Software Engineer (Ruby on Rails)
									</option>
									<option
										data-team="Back-End"
										value="Product Designer"
										data-section="lower"
									>
										Product Designer
									</option>
									<option
										data-team="Back-End"
										value="Product Owner"
										data-section="lower"
									>
										Product Owner
									</option>
									<option
										data-team="Back-End"
										value="UI/UX Designer"
										data-section="lower"
									>
										UI/UX Designer
									</option>{" "}
								</optgroup>

								<optgroup label="Systems">
									<option
										data-team="IT"
										value="Desktop Support"
										data-section="lower"
									>
										Desktop Support
									</option>
									<option
										data-team="IT"
										value="Mac Desktop Support"
										data-section="lower"
									>
										Mac Desktop Support
									</option>
									<option
										data-team="IT"
										value="Junior Linux Systems Engineer"
										data-section="lower"
									>
										Junior Linux Systems Engineer
									</option>
									<option
										data-team="IT"
										value="Security Engineer"
										data-section="upper"
									>
										Security Engineer
									</option>
									<option
										data-team="IT"
										value="Web Application Security Analyst"
										data-section="lower"
									>
										Web Application Security Analyst
									</option>
									<option
										data-team="IT"
										value="Information Security Analyst"
										data-section="lower"
									>
										Information Security Analyst
									</option>
									<option
										data-team="IT"
										value="Systems and Networking Manager"
										data-section="lower"
									>
										Systems and Networking Manager
									</option>{" "}
								</optgroup>

								<optgroup label="Digital">
									<option
										data-team="Front-End"
										value="Media Coordinator"
										data-section="lower"
									>
										Media Coordinator
									</option>
									<option
										data-team="Front-End"
										value="Senior Marketing Specialist"
										data-section="lower"
									>
										Senior Marketing Specialist
									</option>
									<option
										data-team="Front-End"
										value="Senior Referral Affiliate Manager"
										data-section="lower"
									>
										Senior Referral Affiliate Manager
									</option>
									<option
										data-team="Front-End"
										value="Junior Graphic Designer "
										data-section="lower"
									>
										Junior Graphic Designer{" "}
									</option>
									<option
										data-team="Front-End"
										value="Marketing Data Analyst"
										data-section="lower"
									>
										Marketing Data Analyst
									</option>
									<option
										data-team="Front-End"
										value="Graphic Designer"
										data-section="lower"
									>
										Graphic Designer
									</option>
									<option
										data-team="Front-End"
										value="Animator"
										data-section="lower"
									>
										Animator
									</option>
									<option
										data-team="Front-End"
										value="Landing Page Designer/Developer"
										data-section="lower"
									>
										Landing Page Designer/Developer
									</option>
									<option
										data-team="Front-End"
										value="Technical Recruiter"
										data-section="lower"
									>
										Technical Recruiter
									</option>
									<option
										data-team="Front-End"
										value="SEO Specialist"
										data-section="lower"
									>
										SEO Specialist
									</option>
									<option
										data-team="Front-End"
										value="Videographer"
										data-section="lower"
									>
										Videographer
									</option>
									<option
										data-team="Front-End"
										value="Creative Director"
										data-section="lower"
									>
										Creative Director
									</option>
									<option
										data-team="Front-End"
										value="Front-End SEO Developer"
										data-section="lower"
									>
										Front-End SEO Developer
									</option>
									<option
										data-team="Front-End"
										value="Junior Front-End Web Developer"
										data-section="lower"
									>
										Junior Front-End Web Developer
									</option>
									<option
										data-team="Front-End"
										value="Senior Front-End Web Developer"
										data-section="upper"
									>
										Senior Front-End Web Developer
									</option>
									<option
										data-team="Front-End"
										value="Front-End Web Developer"
										data-section="lower"
									>
										Front-End Web Developer
									</option>
									<option
										data-team="Front-End"
										value="Senior PPC Management Specialist"
										data-section="lower"
									>
										Senior PPC Management Specialist
									</option>
									<option
										data-team="Front-End"
										value="Marketing Content Writer"
										data-section="lower"
									>
										Marketing Content Writer
									</option>
									<option
										data-team="Front-End"
										value="Social Media Specialist"
										data-section="lower"
									>
										Social Media Specialist
									</option>
									<option
										data-team="Front-End"
										value="PMC Manager"
										data-section="lower"
									>
										PMC Manager
									</option>{" "}
								</optgroup>
							</select>
							<small className="form-error">Position is required</small>
						</div>
					</div>

					<div className="full-group">
						<div className="label-group">
							<label htmlFor="letter">Cover Letter (PDF only, 20 MB max)</label>
						</div>
						<div className="input-group lh-0">
							<input
								required=""
								type="file"
								className="file-input-fix form-control"
								name="letter"
								accept=".pdf"
							/>
							<small className="form-error">PDF Cover Letter is required</small>
						</div>
					</div>

					<div className="full-group">
						<div className="label-group">
							<label htmlFor="resume">Resume (PDF only, 20 MB max)</label>
						</div>
						<div className="input-group lh-0">
							<input
								required=""
								type="file"
								className="file-input-fix form-control"
								name="resume"
								accept=".pdf"
							/>
							<small className="form-error">PDF Resume is required</small>
						</div>
					</div>

					<div className="link-group">
						<div className="group-half">
							<div className="label-group first">
								<label htmlFor="github-link">Github Link (Optional)</label>
							</div>
							<div className="input-group first">
								<input
									className="full-width form-control"
									id="github-link"
									name="github-link"
									type="text"
								/>
								<small className="form-error">Github Link is required</small>
							</div>
						</div>

						<div className="group-half">
							<div className="label-group last codepen">
								<label htmlFor="codepen-link">CodePen Link (Optional)</label>
							</div>
							<div className="input-group last codepen">
								<input
									className="full-width form-control"
									id="codepen-link"
									name="codepen-link"
									type="text"
								/>
								<small className="form-error">CodePen Link is required</small>
							</div>
						</div>
					</div>

					<div className="full-group half-group">
						<div className="label-group first linked-in">
							<label htmlFor="linkedin-link">LinkedIn Link (Optional)</label>
						</div>
						<div className="input-group first linked-in">
							<input
								className="full-width form-control"
								id="linkedin-link"
								name="linkedin-link"
								type="text"
							/>
							<small className="form-error">LinkedIn Link is required</small>
						</div>
					</div>

					<div className="full-group">
						<h4>Projects (if applicable)</h4>
					</div>

					<div className="projects-group">
						<div className="group-half">
							<div className="label-group first">
								<div className="label-group">
									<label htmlFor="project-pdf">
										Upload Project (PDF only, 20 MB max)
									</label>
								</div>
								<div className="input-group lh-0">
									<input
										id="project-pdf"
										type="file"
										className="file-input-fix form-control"
										name="project-pdf[]"
										accept=".pdf"
									/>
								</div>
							</div>
						</div>
						<div className="group-half">
							<div className="label-group last">
								<div className="label-group last">
									<label htmlFor="project-url">Or Project URL</label>
								</div>
								<div className="input-group last">
									<input
										className="form-control"
										id="project-url"
										name="project-url[]"
										type="text"
									/>
									<small className="form-error">URL is required</small>
								</div>
							</div>
						</div>
					</div>
					<div className="full-group">
						<div className="label-group last">
							<label htmlFor="project-details">What I Did on the Project</label>
						</div>
						<div className="input-group last">
							<textarea
								className="form-control"
								id="project-details"
								name="project-details[]"
							></textarea>
							<small className="form-error">URL is required</small>
						</div>
						{/* <span className="remove-project">Remove Project</span> */}
					</div>
					<div className="add-project-button">
						<a className="button small-button add-project"> Add Project</a>
					</div>

					<div className="full-group">
						<div className="label-group last">
							<label htmlFor="other-link">
								Anything Else You Want Us to Know About You
							</label>
						</div>
						<div className="input-group last">
							<textarea
								className="form-control"
								id="other-link"
								name="other-info"
							></textarea>
							<small className="form-error">other Link is required</small>
						</div>
					</div>

					<div style={{ display: "none" }} aria-hidden="true">
						<label htmlFor="fake-input"></label>
						<input
							id="fake-input"
							type="text"
							placeholder="Leave blank"
							name="fake-input"
						/>
					</div>

					<div className="full-group">
						<div className="label-group last">
							<label htmlFor="hear-about">How did you hear about us?</label>
						</div>
						<div className="input-group last">
							<select
								required=""
								id="hear-about"
								name="hear-about"
								className="form-control"
							>
								<option disabled="" selected="" value="none"></option>
								<option value="Google">Google</option>
								<option value="LinkedIn">LinkedIn</option>
								<option value="BuiltIn">BuiltIn</option>
								<option value="Indeed">Indeed</option>
								<option value="Glassdoor">Glassdoor</option>
								<option value="Referral">Referral</option>
								<option value="Other">Other</option>
							</select>
							<small className="form-error">This answer is required.</small>
						</div>

						<div
							id="other-hear-about-container"
							className="full-group"
							style={{ display: "none" }}
						>
							<div className="label-group last">
								<label htmlFor="other-hear-about">
									Please specify how you heard about Two Barrels:
								</label>
							</div>
							<div className="input-group last">
								<input
									className="full-width form-control"
									id="other-hear-about"
									name="other-hear-about"
									type="text"
								/>
								<small className="form-error">This answer is required.</small>
							</div>
						</div>
					</div>

					<div className="full-group">
						<div className="input-group">
							<input
								required=""
								className="full-width form-control"
								name="read-how-we-hire"
								type="checkbox"
								data-parsley-multiple="read-how-we-hire"
							/>
							<label className="checkbox-radio">
								I have read the{" "}
								<a
									rel="noopener"
									target="_blank"
									href="https://www.twobarrels.com/jobs/how-to-get-a-job-here/"
								>
									How We Hire
								</a>{" "}
								Page
							</label>
						</div>
					</div>
					<div className="full-group">
						<div className="input-group">
							<input
								required=""
								className="full-width form-control"
								name="read-how-we-work"
								type="checkbox"
								data-parsley-multiple="read-how-we-work"
							/>
							<label className="checkbox-radio">
								I have read the{" "}
								<a
									rel="noopener"
									target="_blank"
									href="https://www.twobarrels.com/jobs/how-we-work/"
								>
									How We Work
								</a>{" "}
								Page
							</label>
						</div>
					</div>
					<div className="full-group text-center">
						<div>
							<div
								className="grecaptcha-badge"
								data-style="bottomright"
								style={{
									width: "256px",
									height: "60px",
									display: "block",
									transition: "right 0.3s ease 0s",
									position: "fixed",
									bottom: "14px",
									right: "-186px",
									boxShadow: "gray 0px 0px 5px",
									borderRadius: "2px",
									overflow: "hidden",
								}}
							>
								<div className="grecaptcha-logo">
									<iframe
										title="reCAPTCHA"
										src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Le4lOUkAAAAAM7OEAJbuVuq4flvi7kvMlFhk-Ya&amp;co=aHR0cHM6Ly93d3cudHdvYmFycmVscy5jb206NDQz&amp;hl=en&amp;v=Xh5Zjh8Od10-SgxpI_tcSnHR&amp;size=invisible&amp;sa=apply&amp;cb=squ4vgml7yyv"
										width="256"
										height="60"
										role="presentation"
										name="a-216llfk9q0ry"
										frameborder="0"
										scrolling="no"
										sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
									></iframe>
								</div>
								<div className="grecaptcha-error"></div>
								<textarea
									id="g-recaptcha-response"
									name="g-recaptcha-response"
									className="g-recaptcha-response"
									style={{
										width: "250px",
										height: "40px",
										border: "1px solid rgb(193, 193, 193)",
										margin: "10px 25px",
										padding: "0px",
										resize: "none",
										display: "none",
									}}
								></textarea>
							</div>
							<iframe style={{ display: "none" }}></iframe>
						</div>
						<button
							className="button primary-button g-recaptcha"
							type="submit"
							data-sitekey="6Le4lOUkAAAAAM7OEAJbuVuq4flvi7kvMlFhk-Ya"
							data-callback="onSubmitRecaptcha"
							data-action="apply"
						>
							Submit
							<FontAwesomeIcon
								className="btn-send-icon"
								icon={"chevron-right"}
							/>
						</button>
						<input type="hidden" name="form_type" value="Apply Form" />
						<input type="hidden" name="priority" />
					</div>
				</form>
			</div>
		</div>
	);
};

export default ApplyNow;
