import './Jobs.css';
import JobPost from './JobPost';
import PositionsLower from './PositionsLower';

const Jobs = () => {
    return (
        <div className='jobs__container row'>
            <h1>Jobs</h1>
            <hr />
            <section className='positions-upper'>
                <h4>Our Current Top Priority</h4>
                <JobPost jobtitle='Digital Marketing Director' subtext='Spokane, WA - Full Time - DOE' icon='pencil-alt' />
                <JobPost jobtitle='Marketing Data Analyst' subtext='Spokane, WA or Remote - Full Time - $70,000/year' icon='pencil-alt' />
                <JobPost jobtitle='Landing Page Designer/Developer' subtext='Spokane, WA or Remote - Full Time - $60,000/year' icon='pencil-alt' />
                <JobPost jobtitle='Front End SEO Developer' subtext='Spokane, WA or Remote - Full Time - $70,000/year' icon='pencil-alt' />
                <JobPost jobtitle='Junior Front-End Web Developer' subtext='Spokane, WA - Full Time - $60,000/year' icon='pencil-alt' />
                <JobPost jobtitle='Senior Front-End Web Developer' subtext='Spokane, WA or Remote - Full Time - $95,000/year' icon='pencil-alt' />
                <JobPost jobtitle='Front-End Web Developer' subtext='Spokane, WA or Remote - Full Time - $80,000/year' icon='pencil-alt' />
                <JobPost jobtitle='Marketing Content Writer' subtext='Spokane, WA or Remote - Full Time - $50,000/year' icon='pencil-alt' />
                <JobPost jobtitle='Chief Technology Officer' subtext="Spokane, WA - Full Time - $400,000/year DOE. We are family owned and run, so there's no share compensation or bonus structure as part of the compensation package. Just an insane wage for Spokane, great co-workers, and a goal of creating a great quality of life job for yourself and those around you." icon='code' />
                <JobPost jobtitle='Product Manager' subtext='Spokane, WA or Remote - Full Time - DOE' icon='code' />
                <JobPost jobtitle='Data Scientist' subtext='Spokane, WA or Remote - Full Time - $100,000/year' icon='code' />
                <JobPost jobtitle='Junior Software Engineer' subtext='Spokane, WA - Full Time - $70,000/year' icon='code' />
                <JobPost jobtitle='VOIP Architect' subtext='Spokane, WA or Remote - Full Time - DOE' icon='code' />
                <JobPost jobtitle='Database Administrator' subtext='Spokane, WA - Full Time - $110,000/year' icon='code' />
                <JobPost jobtitle='iOS App Developer' subtext='Spokane, WA or Remote - Full Time - $110,000/year' icon='code' />
                <JobPost jobtitle='VOIP Developer' subtext='Spokane, WA or Remote - Full Time - DOE' icon='code' />
                <JobPost jobtitle='Android App Developer' subtext='Spokane, WA or Remote - Full Time - $110,000/year' icon='code' />
                <JobPost jobtitle='Software Engineer' subtext='Spokane, WA - Full Time - $85,000/year' icon='code' />
                <JobPost jobtitle='Junior Automation Engineer' subtext='Spokane, WA - Full Time - $55,000/year' icon='code' />
                <JobPost jobtitle='Mid Software Engineer' subtext='Spokane, WA - Full Time - $100,000/year **$10,000 hiring bonus for proven Ruby experience**' icon='code' />
                <JobPost jobtitle='Senior Software Engineer (Ruby on Rails)' subtext='Spokane, WA or Remote - Full Time - $140,000/year **$25,000 hiring bonus**' icon='code' />
                <JobPost jobtitle='UI/UX Designer' subtext='Spokane, WA or Remote - Full Time - $85,000/year' icon='code' />
                <JobPost jobtitle='Linux Systems Engineer' subtext='Spokane, WA - Full Time - $100,000/year' icon='cogs' />
            </section>

            <h4>Always Looking for Great Talent</h4>
            <section className='positions-lower'>
                <PositionsLower title='Software'>
                    <li>Project Coordinator<span>Spokane, WA</span></li>
                    <li>Digital Training and Quality Producer<span>Spokane, WA</span></li>
                    <li>Product Owner<span>Spokane, WA</span></li>
                    <li>Senior UI/UX Front-End Developer<span>Spokane, WA</span></li>
                    <li>Ruby on Rails Software Development Manager<span>Spokane, WA</span></li>
                </PositionsLower>

                <PositionsLower title='Systems'>
                    <li>Mac Desktop Support<span>Spokane, WA</span></li>
                    <li>Junior Linux Systems Engineer<span>Spokane, WA</span></li>
                    <li>Senior Linux Systems Engineer<span>Spokane, WA</span></li>
                    <li>Senior Infrastructure Architect<span>Spokane, WA</span></li>
                    <li>Systems and Networking Manager<span>Spokane, WA</span></li>
                </PositionsLower>

                <PositionsLower title='Digital Marketing Annihilation Team'>
                    <li>Senior Marketing Specialist<span>Spokane, WA</span></li>
                    <li>Senior Referral Affiliate Manager<span>Spokane, WA</span></li>
                    <li>WordPress Designer<span>Spokane, WA</span></li>
                    <li>Graphic Designer<span>Spokane, WA</span></li>
                    <li>Animator<span>Spokane, WA</span></li>
                    <li>Marketing SEO Specialist<span>Spokane, WA</span></li>
                    <li>Project Coordinator<span>Spokane, WA</span></li>
                    <li>Videographer<span>Spokane, WA</span></li>
                    <li>Creative Director<span>Spokane, WA</span></li>
                    <li>Senior PPC Management Specialist<span>Spokane, WA</span></li>
                    <li>SEO Ranking Scientist<span>Spokane, WA</span></li>
                    <li>Social Media Specialist<span>Spokane, WA</span></li>
                </PositionsLower>
            </section>
        </div>
    )
}

export default Jobs;