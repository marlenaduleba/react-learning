import PropTypes from 'prop-types';

const MyInput = props => {

    const {type, label, name, value, className, onChange, error} = props;
    return (
        <div>
            <label htmlFor={name}>{label}:</label>
            <input type={type} id={name} name={name} value={value} className={className} onChange={onChange} />
            {error && (
                <small className="alert alert-danger form-text test-muted">{error}</small>
            )}
        </div>
    )
}

MyInput.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    className: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
}

export default MyInput;