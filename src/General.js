import React from 'react';

function Education() {
    const [educArr, nextItem] = React.useState([]);

    function MoveArr() {
        const school = document.querySelector('.school').value;
        const study = document.querySelector('.study').value;
        const studyDate = document.querySelector('.studyDate').value;

        if (educArr[0] && school !== undefined) {
            console.log(school);
            educArr.splice(0, 1, school);
        }
        if (educArr[1] && study !== undefined) {
            educArr.splice(1, 1, study);
        }
        if (educArr[2] && studyDate !== undefined) {
            educArr.splice(2, 1, studyDate);
        }
        if (!educArr[0] && !educArr[1] && !educArr[2]) {
            nextItem(prev => prev.concat(school))
            nextItem(prev => prev.concat(study))
            nextItem(prev => prev.concat(studyDate))
        }
        if (!educArr[0]) {
            educArr.splice(0, 1, school);
        }
        if (!educArr[1]) {
            console.log(study)
            educArr.splice(1, 1, study);
        }
        if (!educArr[2]) {
            educArr.splice(2, 1, studyDate);
        }
        console.log(educArr);

         // will display values in html
         const schoolTextVal = document.querySelector('.school');
         const studyTextVal = document.querySelector('.study');
         const studyDateVal = document.querySelector('.studyDate');
         const schoolDiv = document.createElement('div');
         const studyTextDiv = document.createElement('div');
         const studyDateDiv = document.createElement('div');
         schoolTextVal.parentNode.replaceChild(schoolDiv, schoolTextVal);
         studyTextVal.parentNode.replaceChild(studyTextDiv, studyTextVal);
         studyDateVal.parentNode.replaceChild(studyDateDiv, studyDateVal);
         schoolDiv.classList.add('school');
         studyTextDiv.classList.add('study');
         studyDateDiv.classList.add('studyDate');
         schoolDiv.textContent = educArr[0];
         studyTextDiv.textContent = educArr[1];
         studyDateDiv.textContent = educArr[2];
    }

    function OpenTextBox() {
        const schoolVal = document.querySelector('.school');
        const studyVal = document.querySelector('.study');
        const studyDateVal = document.querySelector('.studyDate');
        const schoolDiv = document.createElement('input');
        const studyDiv = document.createElement('input');
        const studyDateDiv = document.createElement('input');
        schoolVal.parentNode.replaceChild(schoolDiv, schoolVal);
        studyVal.parentNode.replaceChild(studyDiv, studyVal);
        studyDateVal.parentNode.replaceChild(studyDateDiv, studyDateVal);
        schoolDiv.classList.add('school');
        studyDiv.classList.add('study');
        studyDateDiv.classList.add('studyDate');
        if (educArr[0] === undefined) {
            educArr[0] = '';
        }
        if (educArr[1] === undefined) {
            educArr[1] = '';
        }
        if (educArr[2] === undefined || educArr[2] === '') {
            educArr[2] = '';
            studyDateDiv.type = 'date';
        }
        if (studyDateVal.value === undefined) {
            studyDateDiv.type = 'date';
        }
        schoolDiv.value = educArr[0];
        studyDiv.value = educArr[1];
        studyDateDiv.value = educArr[2];
    }

    return (
    <div className='education'>
           <h2>Education</h2>
            <label className='schoolLabel'>
                School:
                <input type='text' className='school'></input>
            </label>
            <label className='studyLabel'>
                Study:
                <input type='text' className='study'></input>
                <button className='editEducation' onClick={OpenTextBox}>Edit</button>
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
    const [practArr, nextItem] = React.useState([]);

    function MovePracticalArr() {
        const companyVal = document.querySelector('.company').value;
        const positionVal = document.querySelector('.position').value;
        const tasksVal = document.querySelector('.tasks').value;

        if (practArr[0] && companyVal !== undefined) {
            console.log(companyVal);
            practArr.splice(0, 1, companyVal);
        }
        if (practArr[1] && positionVal !== undefined) {
            practArr.splice(1, 1, positionVal);
        }
        if (practArr[2] && tasksVal !== undefined) {
            practArr.splice(2, 1, tasksVal);
        }
        if (!practArr[0] && !practArr[1] && !practArr[2]) {
            nextItem(prev => prev.concat(companyVal));
            nextItem(prev => prev.concat(positionVal));
            nextItem(prev => prev.concat(tasksVal));
        }
        if (!practArr[0]) {
            practArr.splice(0, 1, companyVal);
        }
        if (!practArr[1]) {
            console.log(positionVal)
            practArr.splice(1, 1, positionVal);
        }
        if (!practArr[2]) {
            practArr.splice(2, 1, tasksVal);
        }
        console.log(practArr);

         // will display values in html
         const nameVal = document.querySelector('.company');
         const emailTextVal = document.querySelector('.position');
         const phoneTextVal = document.querySelector('.tasks');
         const nameDiv = document.createElement('div');
         const emailDiv = document.createElement('div');
         const phoneDiv = document.createElement('div');
         nameVal.parentNode.replaceChild(nameDiv, nameVal);
         emailTextVal.parentNode.replaceChild(emailDiv, emailTextVal);
         phoneTextVal.parentNode.replaceChild(phoneDiv, phoneTextVal);
         nameDiv.classList.add('company');
         emailDiv.classList.add('position');
         phoneDiv.classList.add('tasks');
         nameDiv.textContent = practArr[0];
         emailDiv.textContent = practArr[1];
         phoneDiv.textContent = practArr[2];
    }

    function OpenCompanyTextBox() {
        const companyBox = document.querySelector('.company');
        const getEmailVal = document.querySelector('.position');
        const getPhoneVal = document.querySelector('.tasks');
        const companyInput = document.createElement('input');
        const emailInput = document.createElement('input');
        const phoneInput = document.createElement('input');
        companyBox.parentNode.replaceChild(companyInput, companyBox);
        getEmailVal.parentNode.replaceChild(emailInput, getEmailVal);
        getPhoneVal.parentNode.replaceChild(phoneInput, getPhoneVal);
        companyInput.classList.add('company');
        emailInput.classList.add('position');
        phoneInput.classList.add('tasks');
        if (practArr[0] === undefined) {
            practArr[0] = '';
        }
        if (practArr[1] === undefined) {
            practArr[1] = '';
        }
        if (practArr[2] === undefined) {
            practArr[2] = '';
        }
        companyInput.value = practArr[0];
        emailInput.value = practArr[1];
        phoneInput.value = practArr[2];
    }

    return (
    <div className='practical'>
           <h2>Practical</h2>
            <label className='companyLabel'>
                Company:
                <input type='text' className='company'></input>
            </label>
            <label className='positionLabel'>
                Position:
                <input type='text' className='position'></input>
                <button className='editPractical' onClick={OpenCompanyTextBox}>Edit</button>
            </label>
            <label className='jobLabel'>
                Job Tasks:
                <input type='text' className='tasks'></input>
            </label>
            <input type='submit' className='submitPractical' onClick={MovePracticalArr}></input>
        </div>
    )
}

function General() {
    const [arr, nextItem] = React.useState([]);

    function MoveArr() {
        const getNameVal = document.querySelector('.name').value;
        const getEmailVal = document.querySelector('.email').value;
        const getPhoneVal = document.querySelector('.phone').value;

        if (arr[0] && getNameVal !== undefined) {
            console.log(getNameVal);
            arr.splice(0, 1, getNameVal);
            //nextItem(prev => prev.concat(getNameVal));
        }
        if (arr[1] && getEmailVal !== undefined) {
            arr.splice(1, 1, getEmailVal);
            //nextItem(prev => prev.concat(getEmailVal));
        }
        if (arr[2] && getPhoneVal !== undefined) {
            arr.splice(2, 1, getPhoneVal);
            //nextItem(prev => prev.concat(getPhoneVal));
        }
        if (!arr[0] && !arr[1] && !arr[2]) {
            nextItem(prev => prev.concat(getNameVal));
            nextItem(prev => prev.concat(getEmailVal));
            nextItem(prev => prev.concat(getPhoneVal));
        }
        if (!arr[0]) {
            arr.splice(0, 1, getNameVal);
        }
        if (!arr[1]) {
            console.log(getEmailVal)
            arr.splice(1, 1, getEmailVal);
        }
        if (!arr[2]) {
            arr.splice(2, 1, getPhoneVal);
        }
        console.log(arr);

        // will display values in html
        const nameVal = document.querySelector('.name');
        const emailTextVal = document.querySelector('.email');
        const phoneTextVal = document.querySelector('.phone');
        const nameDiv = document.createElement('div');
        const emailDiv = document.createElement('div');
        const phoneDiv = document.createElement('div');
        nameVal.parentNode.replaceChild(nameDiv, nameVal);
        emailTextVal.parentNode.replaceChild(emailDiv, emailTextVal);
        phoneTextVal.parentNode.replaceChild(phoneDiv, phoneTextVal);
        nameDiv.classList.add('name');
        phoneDiv.classList.add('phone');
        emailDiv.classList.add('email');
        // trying to change textfield to div with input
        nameDiv.textContent = arr[0];
        emailDiv.textContent = arr[1];
        phoneDiv.textContent = arr[2];

        // const studyVal = document.querySelector('.study');
        // const studyDiv = document.createElement('div');
        // studyVal.parentNode.replaceChild(studyDiv, studyVal);
    }

    function OpenTextBox() {
        const nameVal = document.querySelector('.name');
        const getEmailVal = document.querySelector('.email');
        const getPhoneVal = document.querySelector('.phone');
        const nameDiv = document.createElement('input');
        const emailDiv = document.createElement('input');
        const phoneDiv = document.createElement('input');
        nameVal.parentNode.replaceChild(nameDiv, nameVal);
        getEmailVal.parentNode.replaceChild(emailDiv, getEmailVal);
        getPhoneVal.parentNode.replaceChild(phoneDiv, getPhoneVal);
        nameDiv.classList.add('name');
        phoneDiv.classList.add('phone');
        emailDiv.classList.add('email');
        if (arr[0] === undefined) {
            arr[0] = '';
        }
        if (arr[1] === undefined) {
            arr[1] = '';
        }
        if (arr[2] === undefined) {
            arr[2] = '';
        }
        nameDiv.value = arr[0];
        emailDiv.value = arr[1];
        phoneDiv.value = arr[2];
    }

    return (
        <div className='general'>
           {/* <button className='preview' onClick={ShowPreview}>Preview</button> */}
           <h1>CV Generator</h1>
           <h2>General</h2>
            <label className='nameLabel'>
                Name:
                <input type='text' className='name'></input>
            </label>
            <label className='emailLabel'>
                Email:
                <input type='text' className='email'></input>
                <button className='editGeneral' onClick={OpenTextBox}>Edit</button>
            </label>
            <label className='phoneLabel'>
                Phone:
                <input type='text' className='phone'></input>
            </label>
            <input type='submit' className='submitGeneral' onClick={MoveArr}></input>
        </div>
    )
}

export {General, Education, Practical};