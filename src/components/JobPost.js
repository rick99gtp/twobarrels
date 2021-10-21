import './JobPost.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function JobPost(props) {
    return (
        <div className='job-post__container'>
            <FontAwesomeIcon
                icon={props.icon}
                className='fa-icon'
            />
            <h4>{props.jobtitle}</h4>
            <h5>{props.subtext}</h5>
            <Link to='/'
                style={{'position': 'relative',
                        'letterSpacing': '2px',
                        'fontSize': '17px',
                        'margin': '18px 0 0',
                        'textAlign': 'center',
                        'background': 'var(--orange)',
                        'color': '#fff',
                        'fontWeight': '700',
                        'padding': '.75em 1.5em',
                        'textTransform': 'uppercase',
                        'transition': 'all .25s',
                        'width': '100%',
                        'display': 'block'
                    }}>
                        LEARN MORE
            </Link>
        </div>
    )
}

export default JobPost;