import { useState } from "react";

export function Tiriye() {

    let [Count, setCount] = useState(0);


    return (
        <div style={{backgroundColor: "yellow" }}>
            <h2>Count: {Count}</h2>
            <button onClick={() => setCount(Count + 1)}>Increase</button>
            <button onClick={() => setCount(Count - 1)}>Decrease</button>
        </div>
    );
}



