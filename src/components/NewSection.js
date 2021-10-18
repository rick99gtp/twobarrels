import './NewSection.css';

function NewSection(props) {
    return (
        <div className='new-section'>
            {props.children}
        </div>
    )
}

export default NewSection;