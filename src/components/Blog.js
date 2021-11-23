import './Blog.css';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className='blog__container'>
            <h1 className='blog-h1'>Latest Posts</h1>
            <article>
                <h2 className='post-title'><Link to='/'>Finding the Best Fried Chicken Sandwich in Spokane</Link></h2>
                <div className='post-details'>
                    <span>November 20, 2021 10:00 am</span>
                </div>
                <p>
                    While Southern fried chicken finds its origins in Scottish and West
                     African cuisine, the fried chicken sandwich is a wholly American 
                     invention, and while Spokane isn’t yet a foodie destination, when 
                     it comes to fried chicken sandwiches, this town has a bevy of options. 
                     Therefore I made it my goal to try as many local fried chicken sandwiches 
                     as I could, and hopefully not die from a heart attack in the process. 
                     I ordered chicken sandwiches at a total of...
                     <Link to='/blog-finding-best-fried-chicken-sandwich-spokane'>View Article</Link>
                </p>
            </article>
            <article>
                <h2 className='post-title'><Link to='/'>Finding the Best Fried Chicken Sandwich in Spokane</Link></h2>
                <div className='post-details'>
                    <span>February 11, 2021 6:45 pm</span>
                </div>
                <p>
                    While Southern fried chicken finds its origins in Scottish and West
                     African cuisine, the fried chicken sandwich is a wholly American 
                     invention, and while Spokane isn’t yet a foodie destination, when 
                     it comes to fried chicken sandwiches, this town has a bevy of options. 
                     Therefore I made it my goal to try as many local fried chicken sandwiches 
                     as I could, and hopefully not die from a heart attack in the process. 
                     I ordered chicken sandwiches at a total of...
                     <Link to='/blog-finding-best-fried-chicken-sandwich-spokane'>View Article</Link>
                </p>
            </article>
        </div>
    )
}

export default Blog;