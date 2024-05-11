import React from 'react';

function Animate() {
    const circles = [];

    for (let i = 0; i <= 10; i++) {
        circles.push(
            <div key={i} className="m-5 w-1 h-1 rounded-full shadow-sm bg-blue-400 animate-ping duration-1000"></div>
        );
    }

    return (
        <section className="fixed bg-transparent w-screen h-screen z-50">
            {circles}
        </section>
    );
}

export default Animate;
