import PropTypes from 'prop-types'

const MyTextArea = props => {
    const {label, type, name, value, className, onChange} = props;

    return (
        <div>
            <label htmlFor={name}>{label}:</label>
            <textarea name={name} id={name} type={type} value={value} className={className} onChange={onChange}/>
        </div>
    )
}

MyTextArea.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func
}

export default MyTextArea;