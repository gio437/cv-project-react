import React from 'react';

export default function Education() {
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