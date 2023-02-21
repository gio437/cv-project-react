import React from 'react';

function Education() {
    const [arr, nextItem] = React.useState([]);

    function MoveArr() {
        const schoolVal = document.querySelector('.school').value;
        const studyVal = document.querySelector('.study').value;
        const studyDateVal = document.querySelector('.studyDate').value;
        nextItem(prev => prev.concat(schoolVal));
        nextItem(prev => prev.concat(studyVal));
        nextItem(prev => prev.concat(studyDateVal));
        console.log(arr);
    }

    return (
    <div className='education'>
           <h1>Education</h1>
            <label>
                School:
                <input type='text' className='school'></input>
                <button>Edit</button>
            </label>
            <label>
                Title of study:
                <input type='text' className='study'></input>
                <button>Edit</button>
            </label>
            <label>
                Date of study:
                <input type='text' className='studyDate'></input>
                <button>Edit</button>
            </label>
            <input type='submit' className='submitEducation' onClick={MoveArr}></input>
    </div>
    )
}

function Practical() {
    const [arr, nextItem] = React.useState([]);

    function MoveArr() {
        const companyVal = document.querySelector('.company').value;
        const positionVal = document.querySelector('.position').value;
        const tasksVal = document.querySelector('.tasks').value;
        nextItem(prev => prev.concat(companyVal));
        nextItem(prev => prev.concat(positionVal));
        nextItem(prev => prev.concat(tasksVal));
        console.log(arr);
    }

    return (
    <div className='practical'>
           <h1>Practical</h1>
            <label>
                Company:
                <input type='text' className='company'></input>
                <button>Edit</button>
            </label>
            <label>
                Position:
                <input type='text' className='position'></input>
                <button>Edit</button>
            </label>
            <label>
                Job tasks:
                <input type='text' className='tasks'></input>
                <button>Edit</button>
            </label>
            <input type='submit' className='submitPractical' onClick={MoveArr}></input>
        </div>
    )
}

function General() {
    const [arr, nextItem] = React.useState([]);

    function MoveArr() {
        const getNameVal = document.querySelector('.name').value;
        const getEmailVal = document.querySelector('.email').value;
        const getPhoneVal = document.querySelector('.phone').value;
        nextItem(prev => prev.concat(getNameVal));
        nextItem(prev => prev.concat(getEmailVal));
        nextItem(prev => prev.concat(getPhoneVal));
        console.log(arr);
    }

    return (
        <div className='general'>
           <h1>General</h1>
            <label>
                Name:
                <input type='text' className='name'></input>
                <button>Edit</button>
            </label>
            <label>
                Email:
                <input type='text' className='email'></input>
                <button>Edit</button>
            </label>
            <label>
                Phone:
                <input type='text' className='phone'></input>
                <button>Edit</button>
            </label>
            <input type='submit' className='submitGeneral' onClick={MoveArr}></input>
            <Education />
            <Practical />
        </div>
    )
}

export default General;