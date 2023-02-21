import React from 'react';

function Education() {
    return (
    <div class='education'>
           <h1>Education</h1>
            <label>
                School:
                <input type='text' className='school'></input>
            </label>
            <label>
                Title of study:
                <input type='text' className='study'></input>
            </label>
            <label>
                Date of study:
                <input type='text' className='study-date'></input>
            </label>
    </div>
    )
}

function Practical() {
    return (
    <div class='practical'>
           <h1>Practical</h1>
            <label>
                Company:
                <input type='text' className='company'></input>
            </label>
            <label>
                Position:
                <input type='text' className='position'></input>
            </label>
            <label>
                Job tasks:
                <input type='text' className='tasks'></input>
            </label>
        </div>
    )
}

function General() {
    return (
        <div class='general'>
           <h1>General</h1>
            <label>
                Name:
                <input type='text' className='name'></input>
            </label>
            <label>
                Email:
                <input type='text' className='email'></input>
            </label>
            <label>
                Phone:
                <input type='text' className='phone'></input>
            </label>
            <Education />
            <Practical />
        </div>
    )
}

export default General;