import PropTypes from "prop-types";
import React from "react";

function MyInput(props, ref) {
    const {label} = props;

    return (
        <div>
            {label}:
            <input ref={ref} />
        </div>
    )
}

MyInput.propTypes = {
    inputRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any})
    ]),
    label: PropTypes.string.isRequired
};

export default React.forwardRef(MyInput);

