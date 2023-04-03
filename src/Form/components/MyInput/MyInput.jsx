import PropTypes from 'prop-types';

const MyInput = props => {

    const {type, label, name, value, className, onChange} = props;
    return (
        <div>
            <label htmlFor={name}>{label}:</label>
            <input type={type} id={name} name={name} value={value} className={className} onChange={onChange} />
        </div>
    )
}

MyInput.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func
    
}

export default MyInput;