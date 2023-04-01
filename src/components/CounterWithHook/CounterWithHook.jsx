import { useRef } from "react";

export function CounterWithHook() {
    const counterRef = useRef(0);
    const handleButton = () => {
        counterRef.current++;
        console.log(`Liczba kliknięć ${counterRef.current}`);
    };

    return (
        <div>
            <button onClick={handleButton}>Zwiększ o jeden</button>Liczba kliknięć:{" "}{counterRef.current}
        </div>
    )
}