import React, {useRef} from "react";

export const Ref = () => {
    const input = useRef();

    const focus = () => {
        console.log(input.current);
        input.current.focus();
    };

    
        return (
            <div>
                <input type="text" ref={input} />
                <input type="button" value="Wciśnij mnie!" onClick={focus} />
            </div>
        )
    
}