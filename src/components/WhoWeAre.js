import './WhoWeAre.css';
import Staff from './Staff';

const WhoWeAre = () => {
    const staffNames = ['Rick B - New Hire?', 'Andrew K', 'Andrew F', 'Andy', 'Ashley', 'Brandon H', 'Brandon M', 'Brian', 'Claire',
        'Conner', 'Daniel', 'Danny', 'Dave', 'Devin', 'Dima', 'Don', 'Drea', 'Emily', 'Erik', 'Eryk', 'Evan D', 'Evan G',
        'Fred', 'Hanna', 'Jason', 'Jeni', 'Jeremy', 'Jes', 'Joey', 'Josh G', 'Josh M', 'Joshua', 'Justin T (The 1st)',
        'Justin T', 'Katelyn', 'Katie', 'Kyle', 'Levi', 'Maggie', 'Marissa', 'Mark', 'Matt', 'Mike', 'Nick', 'Nicole G',
        'Nicole O', 'Pete', 'Rex', 'Rocky', 'Sam', 'Shannon', 'Shawn', 'Shawndale', 'Sierra', 'Stacey', 'Steven', 'Tanner',
        'Tin', 'Tyler', 'Tyler', 'Vince', 'Oh Man, That Guy'];

    const staff = Staff.personData.map((e, idx) =>
        <div className='person-container' key={idx}>
            <div className='inner-div'>
                <img src={e.image} alt='' />
                <div className='inner-div-text'>
                    <h5>{e.name}</h5>
                </div>
            </div>
        </div>
    );

    return (
        <div className='whoweare__container'>
            <div className='whoweare__container--staff'>
                <h1>Who We Are</h1>
                <hr />
                {staff}
            </div>
        </div>
    )
}

export default WhoWeAre;