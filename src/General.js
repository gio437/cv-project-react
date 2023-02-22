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
            <label className='schoolLabel'>
                School:
                <input type='text' className='school'></input>
            </label>
            <label className='studyLabel'>
                Study:
                <input type='text' className='study'></input>
                <button className='editEducation'>Edit</button>
            </label>
            <label className='gradLabel'>
                Grad Date:
                <input type='date' className='studyDate'></input>
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
            <label className='companyLabel'>
                Company:
                <input type='text' className='company'></input>
            </label>
            <label className='positionLabel'>
                Position:
                <input type='text' className='position'></input>
                <button className='editPractical'>Edit</button>
            </label>
            <label className='jobLabel'>
                Job Tasks:
                <input type='text' className='tasks'></input>
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

    function ShowPreview() {
        //let change = 0; // change back to edit
        const nameVal = document.querySelector('.name');
        const getEmailVal = document.querySelector('.email');
        const getPhoneVal = document.querySelector('.phone');
        const nameDiv = document.createElement('div');
        const emailDiv = document.createElement('div');
        const phoneDiv = document.createElement('div');
        nameVal.parentNode.replaceChild(nameDiv, nameVal);
        getEmailVal.parentNode.replaceChild(emailDiv, getEmailVal);
        getPhoneVal.parentNode.replaceChild(phoneDiv, getPhoneVal);
        nameDiv.classList.add('name');
        phoneDiv.classList.add('phone');
        emailDiv.classList.add('email');
        console.log(arr[0]); // trying to change textfield to div with input
        nameDiv.textContent = arr[0];
        phoneDiv.textContent = arr[1];
        emailDiv.textContent = arr[2];
    }

    return (
        <div className='general'>
           <button className='preview' onClick={ShowPreview}>Preview</button>
           <h1>General</h1>
            <label className='nameLabel'>
                Name:
                <input type='text' className='name'></input>
            </label>
            <label className='emailLabel'>
                Email:
                <input type='text' className='email'></input>
                <button className='editGeneral'>Edit</button>
            </label>
            <label className='phoneLabel'>
                Phone:
                <input type='text' className='phone'></input>
            </label>
            <input type='submit' className='submitGeneral' onClick={MoveArr}></input>
            <Education />
            <Practical />
        </div>
    )
}

export default General;