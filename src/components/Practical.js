import React from "react";

export default function Practical() {
    const [practArr, nextItem] = React.useState([]);

    function MoveArr() {
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
            <input type='submit' className='submitPractical' onClick={MoveArr}></input>
        </div>
    )
}