import React from 'react';
import Typed from 'typed.js';

export function Welcome() {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [' ⚠️ Rules<br>🥺 AI asks you questions <br>`🙋🏻 You answer the questions correctly` <br>`👏 Go to next round`<br>😎 Win gift 🎉🎉🎉`'],
            typeSpeed: 70,
            backSpeed: 0,
            backDelay: 500,
            startDelay: 1000,
            showCursor:true,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <div className="type-wrap">
            <span className='font-medium' ref={el} id="typed6" style={{ whiteSpace: "pre" }}></span>
            <span className="typed-cursor typed-cursor--blink" ></span>
        </div>
    );
}