import './Jobs.css';
import JobPost from './JobPost';

const Jobs = () => {
    return (
        <div className='jobs__container row'>
            <h1>Jobs</h1>
            <hr />
            <section className='positions-upper'>
                <h4>Our Current Top Priority</h4>
                <JobPost jobtitle='Digital Marketing Director' subtext='Spokane, WA - Full Time - DOE' icon='pencil-alt'/>
                <JobPost jobtitle='Marketing Data Analyst' subtext='Spokane, WA or Remote - Full Time - $70,000/year' icon='pencil-alt'/>
                <JobPost jobtitle='Landing Page Designer/Developer' subtext='Spokane, WA or Remote - Full Time - $60,000/year' icon='pencil-alt'/>
                <JobPost jobtitle='Front End SEO Developer' subtext='Spokane, WA or Remote - Full Time - $70,000/year' icon='pencil-alt'/>
                <JobPost jobtitle='Junior Front-End Web Developer' subtext='Spokane, WA - Full Time - $60,000/year' icon='pencil-alt'/>
                <JobPost jobtitle='Senior Front-End Web Developer' subtext='Spokane, WA or Remote - Full Time - $95,000/year' icon='pencil-alt'/>
                <JobPost jobtitle='Front-End Web Developer' subtext='Spokane, WA or Remote - Full Time - $80,000/year' icon='pencil-alt'/>
                <JobPost jobtitle='Marketing Content Writer' subtext='Spokane, WA or Remote - Full Time - $50,000/year' icon='pencil-alt'/>
                <JobPost jobtitle='Chief Technology Officer' subtext="Spokane, WA - Full Time - $400,000/year DOE. We are family owned and run, so there's no share compensation or bonus structure as part of the compensation package. Just an insane wage for Spokane, great co-workers, and a goal of creating a great quality of life job for yourself and those around you." icon='code'/>
                <JobPost jobtitle='Product Manager' subtext='Spokane, WA or Remote - Full Time - DOE' icon='code'/>
                <JobPost jobtitle='Data Scientist' subtext='Spokane, WA or Remote - Full Time - $100,000/year' icon='code'/>
                <JobPost jobtitle='Junior Software Engineer' subtext='Spokane, WA - Full Time - $70,000/year' icon='code'/>
                <JobPost jobtitle='VOIP Architect' subtext='Spokane, WA or Remote - Full Time - DOE' icon='code'/>
                <JobPost jobtitle='Database Administrator' subtext='Spokane, WA - Full Time - $110,000/year' icon='code'/>
                <JobPost jobtitle='iOS App Developer' subtext='Spokane, WA or Remote - Full Time - $110,000/year' icon='code'/>
                <JobPost jobtitle='VOIP Developer' subtext='Spokane, WA or Remote - Full Time - DOE' icon='code'/>
                <JobPost jobtitle='Android App Developer' subtext='Spokane, WA or Remote - Full Time - $110,000/year' icon='code'/>
                <JobPost jobtitle='Software Engineer' subtext='Spokane, WA - Full Time - $85,000/year' icon='code'/>
                <JobPost jobtitle='Junior Automation Engineer' subtext='Spokane, WA - Full Time - $55,000/year' icon='code'/>
                <JobPost jobtitle='Mid Software Engineer' subtext='Spokane, WA - Full Time - $100,000/year **$10,000 hiring bonus for proven Ruby experience**' icon='code'/>
                <JobPost jobtitle='Senior Software Engineer (Ruby on Rails)' subtext='Spokane, WA or Remote - Full Time - $140,000/year **$25,000 hiring bonus**' icon='code'/>
                <JobPost jobtitle='UI/UX Designer' subtext='Spokane, WA or Remote - Full Time - $85,000/year' icon='code'/>
                <JobPost jobtitle='Linux Systems Engineer' subtext='Spokane, WA - Full Time - $100,000/year' icon='cogs'/>
            </section>
        </div>
    )
}

export default Jobs;