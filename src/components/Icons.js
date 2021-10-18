import './Icons.css';
import Icon from './Icon';
import { HiCog } from 'react-icons/hi';
import { RiCodeSSlashFill } from 'react-icons/ri';
import { FaPencilAlt } from 'react-icons/fa';

const Icons = () => {

    const iconStyle = {
        fontSize: '46px',
        color: 'var(--turquoise)',
        overflow: 'hidden',
        transition: 'all .25s',
        marginTop: '30px'
    };

    return (
        <div className='icons'>
            <h2></h2>
            <Icon
                icon={<HiCog style={iconStyle}/>}
                h4="Systems"
                p="Are You Passionate About Turning Things Off And On Again? Are You Naturally Tech-Savvy? Let's Talk!"/>
            <Icon
                icon={<RiCodeSSlashFill  style={iconStyle}/>}
                h4="Software"
                p="Got Code? Is It Logical And Clean? Do You Feel Passionate About Tabs Or Spaces? If So, We Want Your Skills!"/>
            <Icon
                icon={<FaPencilAlt  style={iconStyle}/>}
                h4="Creative"
                p="Are You Smart? A Little Competitve? Do You Care About Sentences And The Way A Page Looks? Talk To Us!"/>
        </div>
    )
}

export default Icons;