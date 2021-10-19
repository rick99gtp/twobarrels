import './Main.css';
import Overview from './Overview';
import WhoWeAre from './WhoWeAre';
import Jobs from './Jobs';
import ContactUs from './ContactUs';
import Blog from './Blog';
import { Switch, Route } from 'react-router-dom';
import Footer from './Footer';

const Main = (props) => {
    return (
        <div className='main'>
            <Switch>
                <Route path='/whoweare'>
                    <WhoWeAre />
                </Route>
                <Route path='/jobs'>
                    <Jobs />
                </Route>
                <Route path='/contactus'>
                    <ContactUs />
                </Route>
                <Route path='/blog'>
                    <Blog />
                </Route>
                <Route path='/'>
                    <Overview changeActivePage={props.changeActivePage} />
                    <Footer />
                </Route>
                {/* {props.activepage === 0 ? <Overview /> : null}
                    {props.activepage === 1 ? <WhoWeAre /> : null}
                    {props.activepage === 2 ? <Jobs /> : null}
                    {props.activepage === 3 ? <ContactUs /> : null}
                    {props.activepage === 4 ? <Blog /> : null} */}
            </Switch>
        </div>
    )
}

export default Main;