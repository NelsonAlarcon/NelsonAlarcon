import React from 'react'

import './resume.css';

const Resume = () => {
    return (
        <>
            <div className="rincpl relative mx-auto">
                <h2 id="resume" className="text-5xl">Resume</h2>
                <span className="num absolute left-0">01</span>
            </div>
            <div className="university grid grid-cols-2 gap-3 p-12 items-center">
                <h3 className="text-3xl text-indigo-800">Last Study</h3>
                <div className="contenido text-justify space-y-16">
                    <p className="border-l-4 border-indigo-800 pl-8 text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam temporibus quam nihil voluptatibus fugit explicabo, ab nemo nobis itaque natus vero dolorum autem eum cum consequuntur vitae ad veniam beatae.</p>
                    <p className="border-r-4 border-indigo-800 pr-8 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsa dolores maiores nobis suscipit ab sapiente itaque deleniti nostrum ipsam autem, officiis eius asperiores modi tempore vel harum praesentium neque?</p>
                </div>
            </div>
        </>
    )
}

export default Resume
