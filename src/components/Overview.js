import './Overview.css';
import { useEffect } from 'react';
import Hero from './Hero';
import NewSection from './NewSection';
import Icons from './Icons';
import OverviewBottom from './OverviewBottom';
import OverviewAwesome from './OverviewAwesome';

const Overview = (props) => {

    useEffect(() => {
        props.changeActivePage(0);
    }, []);

    return (
        <div className='overview'>
            <Hero />
            <NewSection>
                <Icons />
                <OverviewBottom />
            </NewSection>
            <OverviewAwesome />
        </div>
    )
}

export default Overview;