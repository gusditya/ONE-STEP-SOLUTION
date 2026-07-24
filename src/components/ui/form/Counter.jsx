import { useState } from "react";

export default function Counter() {
    let [counter, setCounter] = useState(0);

    function handleClick() {
        setCounter(counter + 1); //counter++
        console.log(counter);
    }

    function Reset() {
        setCounter(counter * 0);
        console.log(counter);
    }

    function MiddleNumber() {
        setCounter(counter - 1);
        console.log(counter);
    }

    return (
        <div>
            <button onClick={handleClick}>Tambah</button>
            <button onClick={Reset}>Reset</button>
            <button onClick={MiddleNumber}>Kurang</button>
            <h1>Counter: {counter}</h1>
        </div>
    )
}
