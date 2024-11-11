import { useState } from "react";


export default function Counter() { // ez a függvény mikor és hányszor hívódik meg? és ki hívja?
    // let x = useState(0);
    // let clicks = x[0];
    // let setClicks = x[1];
    // <=>
    let [clicks, setClicks] = useState(0);

    // miért kell egyáltalán state?
    // mi történik, ha nem a setteren keresztül módosítjuk?
    // mikor állítódik be az új érték?
    // hogyan lehet használni a setState-et? (2 féleképp)
    // hány state-ünk lehet? érdemes-e összevonni őket?

    // miért nem használunk hagyományos DOM manipulációt?

    // KEDD: miért hívódik duplán a komponens?

    // document.querySelector('....').textContent = 'fsdhihfisd' <= TILOS!

    console.log('Counter called');

    return (
        <>
            <p>You clicked {clicks} times.</p>
            <button onClick={() => {
                /* const increment = function (x) {
                    return x + 1;
                }
                setClicks(increment);
                <=>
                */
                setClicks(oldValue => oldValue + 1);
                
                console.log(clicks); // KEDD: mi a megoldás erre?
            }}>Click me</button>

            <button onClick={() => {
                setClicks(0);
                console.log(clicks);
            }}>Reset</button>
        </>
    )
}