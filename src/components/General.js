import React from "react";

export default function General() {
    const [arr, nextItem] = React.useState([]);

    function MoveArr() {
        const getNameVal = document.querySelector('.name').value;
        const getEmailVal = document.querySelector('.email').value;
        const getPhoneVal = document.querySelector('.phone').value;

        if (arr[0] && getNameVal !== undefined) {
            console.log(getNameVal);
            arr.splice(0, 1, getNameVal);
        }
        if (arr[1] && getEmailVal !== undefined) {
            arr.splice(1, 1, getEmailVal);
        }
        if (arr[2] && getPhoneVal !== undefined) {
            arr.splice(2, 1, getPhoneVal);
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