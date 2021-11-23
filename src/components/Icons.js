import './Icons.css';
import Icon from './Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icons = () => {

    const iconStyle = {
        fontSize: '36px',
        overflow: 'hidden',
        transition: 'all .25s',
        marginTop: '30px',
        textDecoration: "none"
    };

    return (
        <div className='icons'>
            <h2></h2>
            <Icon
                icon={<FontAwesomeIcon icon="cog" style={iconStyle} className='icon-hover-style'/>}
                h4="Systems"
                p="Are You Passionate About Turning Things Off And On Again? Are You Naturally Tech-Savvy? Let's Talk!" />
            <Icon
                icon={<FontAwesomeIcon icon="code" style={iconStyle} className='icon-hover-style' />}
                h4="Software"
                p="Got Code? Is It Logical And Clean? Do You Feel Passionate About Tabs Or Spaces? If So, We Want Your Skills!" />
            <Icon
                icon={<FontAwesomeIcon icon="pencil-alt" style={iconStyle} className='icon-hover-style' />}
                h4="Creative"
                p="Are You Smart? A Little Competitve? Do You Care About Sentences And The Way A Page Looks? Talk To Us!" />
        </div>
    )
}

export default Icons;