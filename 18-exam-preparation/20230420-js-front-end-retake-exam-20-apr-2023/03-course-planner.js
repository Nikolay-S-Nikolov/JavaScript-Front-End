let baseUrl = 'http://localhost:3030/jsonstore/tasks/'
let loadCoursesBtn = document.getElementById('load-course');
let listCourcesDiv = document.querySelector('#progress-course #list');
let courseName = document.getElementById('course-name');
let courseType = document.getElementById('course-type');
let courseDescr = document.getElementById('description');
let courseTeacher = document.getElementById('teacher-name');
let addCourseBtn = document.getElementById('add-course');
let editBtn = document.getElementById('edit-course');

let objId;

//Get
function loadCoursesDataEventListener() {
    fetch(baseUrl)
        .then(res => res.json())
        .then(data => showCourses(data))
        .catch(err => console.error(err))
}

//Post
function addCourse(newCourse) {
    fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCourse)
    })
        .then(res => res.json())
        .then(() => loadCoursesDataEventListener())
        .catch(err => console.error(err))
}

//Put
function editCourse(course) {
    fetch(baseUrl + course._id, {
        method: 'PUT',
        body: JSON.stringify(course)
    })
        .then(res => res.json())
        .then(() => {
            editBtn.disabled = true;
            addCourseBtn.disabled = false;
            [courseName, courseType, courseDescr, courseTeacher].forEach((x) => x.value = '');
            loadCoursesDataEventListener();
        })
        .catch(err => console.error(err))
}

//DELETE
function removeCource(id, parent, child) {
    fetch(baseUrl + id, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(() => parent.removeChild(child))
        .catch(err => console.error(err))
}

function addCourseEventListener(e) {
    e.preventDefault()

    let [title, type, description, teacher] = [courseName.value, courseType.value, courseDescr.value, courseTeacher.value];
    if (!['Long', 'Medium', 'Short'].includes(type)) return;

    [courseName, courseType, courseDescr, courseTeacher].forEach((x) => x.value = '');
    let course = { title, type, description, teacher };

    addCourse(course);
}

function editBtnEventListener(e) {
    e.preventDefault();

    let [title, type, description, teacher] = [courseName.value, courseType.value, courseDescr.value, courseTeacher.value];
    if (!['Long', 'Medium', 'Short'].includes(type)) return;

    let course = { title, type, description, teacher, _id: objId };
    editCourse(course, objId);

}

function showCourses(courses) {
    listCourcesDiv.innerHTML = '';

    Object.keys(courses).forEach((courseId) => {
        let course = courses[courseId];

        let divConatiner = createElement('div', { className: 'container' }, listCourcesDiv);
        createElement('h2', { textContent: course.title }, divConatiner);
        createElement('h3', { textContent: course.teacher }, divConatiner);
        createElement('h3', { textContent: course.type }, divConatiner);
        createElement('h4', { textContent: course.description }, divConatiner);

        let editCourseBtn = createElement('button', {
            className: 'edit-btn',
            textContent: 'Edit Course'
        }, divConatiner);

        let finishCourseBtn = createElement('button', {
            className: 'finish-btn',
            textContent: 'Finish Course'
        }, divConatiner);



        editCourseBtn.addEventListener('click', editCourseEventListener);
        finishCourseBtn.addEventListener('click', finishCourseEventListener);

        function editCourseEventListener() {

            courseName.value = course.title;
            [courseType.value, courseDescr.value, courseTeacher.value] = [course.type, course.description, course.teacher];
            objId = course._id;

            editBtn.disabled = false;
            addCourseBtn.disabled = true;
            listCourcesDiv.removeChild(divConatiner);

        }

        function finishCourseEventListener() {
            removeCource(course._id, listCourcesDiv, divConatiner);
        }
    })


}

function createElement(tag, properties, container = null) {
    let newEl = document.createElement(tag);

    Object.keys(properties).forEach((key) => {
        typeof properties[key] === 'object' ? Object.assign(newEl.dataset, properties[key])
            : newEl[key] = properties[key];
    })

    if (container) container.appendChild(newEl);

    return newEl;
}

loadCoursesBtn.addEventListener('click', loadCoursesDataEventListener);
addCourseBtn.addEventListener('click', addCourseEventListener);
editBtn.addEventListener('click', editBtnEventListener);