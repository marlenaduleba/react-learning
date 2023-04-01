import { useMemo, useState } from "react";

export const Memo = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    const getSum = (a, b) => {
        for (let i = 0; i < 999999999999999999; i++) {
            return parseInt(a) + parseInt(b);
            
        }
    }

    const calculateSum = useMemo(() => {
        return getSum(a,b);
    }, [a, b]);

    return (
        <div>
            <div>Policz sumę</div>
            <input type="text" onChange={e => setA(e.target.value)}/>
            <input type="text" onChange={e => setB(e.target.value)}/>
            <div>Suma wynosi {calculateSum}</div>
        </div>
    )
}