import "./HowWeWork.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HowWeWork = () => {
	useEffect(() => {
		document.title = "How We Work | Two Barrels LLC";
	}, []);
	return (
		<div className="outer-container">
			<div className="page-container">
				<h1 className="job-details-title">How We Work</h1>
				<div>
					<p>&nbsp;</p>
					<p>
						Our goal here is to provide a job that is fulfilling, challenging,
						not stressful, not hostile, and pushes you to reach new skill levels
						you didn’t know you have in you, all while hopefully not pissing you
						off. How do we accomplish this?
					</p>
					<ul>
						<li>
							<strong>Organization.</strong> We try to organize folks into full
							stack groups around products. We run about 60ish products. We’re
							understaffed in all of them, but we hire about 20 people a month
							and hope to catch up someday.
						</li>
						<li>
							<strong>Compensation.</strong> We compensate people based on their
							contributions and outcomes, not output. We kind of copy Google
							Levels but with like 1/1000th of the structure. So, if you’re a
							writer producing amazing outcomes, you might be an L9 or L13
							making $150,000 a year. Or you might be an L1 or L2 writer making
							$60,000 a year if that’s where you’re happy. The same thing goes
							for all roles, from engineers to designers. We want to provide a
							career path that compensates you in a way that you feel supported
							and rewarded for your contributions. Our hope is that your pay is
							NOT fair relative to others, but it is such that you’re happy and
							feel we’re doing our part to show you our gratitude for your time
							here doing good work for us.
						</li>
						<li>
							<strong>Quarterly Alignments.</strong> We don’t use levels day to
							day, but once a quarter we try to re-align and create the freedom
							to reward and compensate people according to where they want to go
							here. Titles can get in the way of this, so we aren’t too big into
							titles like Director, VP or Sr VP. We want to make sure people
							aren’t feeling pressure to climb the ladder or take on some weird
							title they will ultimately Peter Principle out on just because
							they want more money.
						</li>
						<li>
							<strong>Employee Pride.</strong> We call people employees. There’s
							no goofy names. To us, employing people is a sense of pride. To be
							able to provide a job that elevates people’s financial situations
							and supports their personal lives is something to be proud of, and
							we don’t have to come up with weird names for people that work
							here. If calling someone an employee or saying they work for us
							makes someone cringe, we’re doing a bad job and need to get our
							act together. That’s our overall stance.
						</li>
						<li>
							<strong>No Analysis Paralysis.</strong> We move fast and embrace
							making wrong decisions. If you’re not making wrong decisions and
							screwing stuff up, you’re not moving fast enough. Analysis
							Paralysis and fear of getting yelled at is a real thing at all
							companies of size. When you take too long to do something or make
							something happen, it further develops a culture of fear. We try
							like heck to fight this by just doing stuff. Making forward
							progress and being okay if we make mistakes along the way.
						</li>
						<li>
							<strong>Product Ownership.</strong> Our goal with products is that
							each person on that product really gets a chance to own the
							product. If you’re always beholden to “stakeholders,” you’re
							always only checking to-do boxes off a list. We want to give you
							the space, freedom, and support to try stuff and push your product
							beyond what any stakeholder could lay out for you. The most
							important thing is having an open dialogue and trying to do what
							is best for the users in the products we make and maintain.
						</li>
					</ul>
					<hr />
					<h2 className="test">
						How We Manage Hot Fixes, Bugs, and Quality of Life Improvements
					</h2>
					<p>
						We have 3 “operations” groups: Marketing, IT, and Engineering. This
						is where all people, regardless of their experience, start. These
						three groups meet up daily and fight fires live and hot. This is our
						way of getting people as wide a range of experience as possible.
					</p>
					<p>
						People can stay in the operations groups indefinitely if they prefer
						quick and rapid resolutions. Or, when someone is ready and finds
						something here they can be passionate about, they choose a product
						group to be a part of. It might be VoIP phone service, domain names,
						automation, security, networking 55 offices together, accounting and
						billing, APIs, dev ops—whatever really.
					</p>
					<p>
						For operations, we use Kanban. For products, we use Scrum. Both are
						frameworks based on Agile principles.
					</p>
					<h3>Agile</h3>
					<p>
						Like many modern tech companies, we use Agile. Not familiar with
						Agile? It’s the fancy name for a collection of project management
						principles that have had a lot of success in the tech world.
					</p>
					<p>
						One important idea within Agile is that teams should be
						self-organizing and cross-functional. There’s also an understanding
						that our products, projects, goals, and priorities will go through
						lots of changes during development, and our job is to adapt along
						the way. If you’re familiar with Agile, you’ll know that it’s a
						concept and it has to be melded to the people you have and your
						culture. There is no perfect form of Agile. We’re always working at
						making it flex with the people on a project or product to work best
						for them.
					</p>
					<p>
						So how do we actually incorporate Agile into our work here at 2B? We
						mainly use two Agile frameworks: Kanban and Scrum.
					</p>
					<h3>Kanban</h3>
					<p>
						In operations, tickets from our customer service and internal
						employees come in and are turned into a project (or routed to a
						product team if they’ll be better served there). Because every
						project has many small parts that require different people, it can
						be difficult to see exactly where we are on a project at any given
						time. Kanban helps solve this problem by representing our workflow
						in a visual way.
					</p>
					<p>
						We use online Kanban boards (mostly Jira) where we list our
						individual tasks in categories like In Progress, In Review or Done.
						We move our tasks from one category to the next as we complete work
						so that the current state of projects can be seen at a glance.
					</p>
					<p>
						Our goal with our operations groups is to have a fun, engaging, and
						welcoming place to learn about our business and how we do stuff.
						It’s also a place to work with other people getting used to our
						company and meet some new great co-workers.
					</p>
					<h3>Scrum</h3>
					<p>
						Scrum? Doesn’t that sound like something we should scrape off our
						shoes? Some hipsters came up with Scrum to translate Agile
						principles into actions, but it’s really kind of just common sense
						branded for tech people to feel cool.
					</p>
					<p>
						Scrum is a bit more structured than Kanban and more easily supports
						running full teams for products. Scrum breaks down projects into one
						or two-week chunks called “sprint cycles.” Each sprint begins with a
						planning session. And we follow up with regular retrospectives
						(reflections on what worked and what didn’t).
					</p>
					<p>
						And in order to help our teams adapt to constant changes, Scrum is
						big into communication. Really big. For example, we have “stand
						ups,” which are quick (usually daily) meetings. In a stand up, we
						briefly share what we’re working on and any obstacles keeping us
						from moving forward.
					</p>
					<hr />
				</div>
				<h2 style={{ textAlign: "left" }}>How We Do Products</h2>
				<p>
					All products begin by defining a vision and purpose, as well as goals
					and standards. These products then grow through a never-ending life
					cycle:
				</p>
				<ul>
					<li>Define</li>
					<li>Design</li>
					<li>Align</li>
					<li>Develop</li>
					<li>Deploy</li>
					<li>Evaluate</li>
					<li>Start Over</li>
				</ul>
				<p>
					A vibrant product group has between 5-15 people, which could include a
					director, product manager, product designer, product
					owner/coordinator, UI/UX, developer, engineer, writer, marketer, etc…
					Maybe 2-4 of each. At full stack, this group can change course at will
					on the fly and drive where they want to go. They stay aligned with
					stakeholders, try to solve their problems, and deliver results.
				</p>
				<p>
					It takes engaged groups of people to make amazing products. We try to
					communicate in a way that is meaningful and not noise. We try to get
					tech people to connect regularly with our operations and customer
					service employees to make sure the tech we’re providing helps us all
					meet the standards for each of our products.
				</p>
				<hr />
				<h2>Remote or In Person?</h2>
				<p>
					2020 ushered in a life-changing era for us. It’s been the best thing
					to ever happen to us. We are now spread out over 35 states. That’s
					amazing, as prior to 2020, we were spread among 3. Our diversity has
					skyrocketed. The good humans we are now able to hire and support is
					just one of the most amazing transitions we’ve ever had in 20 years.
				</p>
				<p>
					We plan on supporting working wherever indefinitely. We also love to
					see people if they’re okay with coming to the office every now and
					then. We’ve realized that flexibility and supporting people is our key
					to success.
				</p>
				<p>
					A few positions do require office proximity (hardware has to
					physically exist in a tangible location, right?), but even for those,
					you can usually work from home most days. Our tech hubs are in
					Spokane, Salt Lake, and Austin. Our customer support operations has
					offices in every state, and as we figure out how to make “hubs” a good
					thing, we’ll be expanding our tech hubs into more of our office
					locations. We own most our office buildings and can adjust and remodel
					as needed.
				</p>
				<hr />
				<h2 style={{ textAlign: "left" }}>Principles We Live By</h2>
				<p>
					Don’t be a complete freaking idiot and jerk to the people you work
					with. Treat others how you’d like to be treated. Allow people to mess
					things up and support them as they learn how to pivot and get better.
					Outcome over output. Trust our people to be good humans.
				</p>
				<p>Or, to put it less succinctly, we like to:</p>
				<h3>Check in with each other</h3>
				<p>
					Checking in has become all the more important with remote work—we keep
					logged into chat during the workday and are happy to hop into a video
					call for some quick face time. We prefer bite-sized interactions that
					move the ball forward instead of hurting our heads with 3-hour
					meetings or epic emails. We talk to the people we work with and get
					stuff figured out in real time.
				</p>
				<h3>Test new ideas</h3>
				<p>
					There’s a reason we call our employees “creatives.” Every project
					introduces new obstacles and calls for new solutions. Systems,
					software, design, development, writing, marketing—at their core, all
					of our jobs require us to do the same things. We try out strategies
					and solutions. We compare new results to old results. We tinker and
					test. We experiment in order to make the strongest security solution,
					the most user-friendly interface, the most striking design, the most
					compelling content, or the highest-ranking page.
				</p>
				<h3>Take responsibility</h3>
				<p>
					So that new idea didn’t pan out so well? Maybe the new landing page
					design was a bust? It’s important to let go of bad ideas and fix our
					mistakes. It’s also essential to make sure the right people know what
					happened. Every part of a project affects many other parts. We
					wouldn’t want the marketing team to launch a campaign using a page
					design that tested poorly. How we handle our misses and mistakes
					contributes to our entire team’s success.
				</p>
				<h3>Make beautiful things</h3>
				<p>
					We care about what we create. Our work matters, and we take pride in
					it. We excitedly show our team members the cool things we just made.
					At 2B, it’s not just about getting the job done. We want to craft the
					best solution or product every time.
				</p>
				<h3>Teach and learn</h3>
				<p>
					No one here at 2B has exactly the same knowledge base. New writers
					might not know much about SEO. New coders may not have a lot of
					experience with PHP. Sometimes no one knows how to do something.
					Sometimes we’re not even sure if something is technically possible. So
					we research. We study. We talk. And we develop skills we never even
					dreamed of.
				</p>
				<hr />
				<p style={{ textAlign: "center" }}>
					If 2B sounds like a place where you would thrive, grow and enjoy work,
					then we’d love to see what skills you bring to the table.
				</p>
				<div>
					<div>
						<h6>
							<Link to="#/jobs/apply-now">
								Apply Now
								<FontAwesomeIcon
									className="btn-send-icon"
									icon={"chevron-right"}
								/>
							</Link>
						</h6>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HowWeWork;
