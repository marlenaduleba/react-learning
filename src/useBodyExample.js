import React from "react";
import useBodyClass from "./hooks/useBodyClass";

const useBodyExample = () => {
    useBodyClass("active");
    return <div>test</div>
};

export default useBodyExample;