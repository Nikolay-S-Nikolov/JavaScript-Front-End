let baseUrl = 'http://localhost:3030/jsonstore/tasks/';
let loadMealsBtn = document.getElementById('load-meals');

let foodEl = document.getElementById('food');
let timeEl = document.getElementById('time');
let caloriesEl = document.getElementById('calories');

let addMealBtnEl = document.getElementById('add-meal');
let editMealBtnEl = document.getElementById('edit-meal');

let mealListEl = document.getElementById('list');

function loadMealsData() {
    fetch(baseUrl)
        .then(res => res.json())
        .then(showAllMeals)
        .catch(err => console.error(err));
}

function addMealData(obj) {
    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(obj)
    })
        .then(res => res.json())
        .then(loadMealsData)
        .catch(err => console.error(err));
}

function changeMealData(changhedObj, objId) {
    fetch(baseUrl + objId, {
        method: 'PUT',
        body: JSON.stringify(changhedObj)
    })
        .then(res => res.json())
        .then(() => {
            [foodEl, timeEl, caloriesEl].forEach((x) => x.value = '');
            editMealBtnEl.setAttribute('disabled', '');
            addMealBtnEl.removeAttribute('disabled');
            loadMealsData();
        })
        .catch(err => console.error(err));
}

function delMealData(objId) {
    fetch(baseUrl + objId, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(loadMealsData)
        .catch(err => console.error(err));
}


function showAllMeals(meals) {
    mealListEl.innerHTML = '';
    Object.values(meals).forEach((meal) => {
        let mealDivEl = createElement('div', { className: 'meal' }, mealListEl);

        createElement('h2', { textContent: meal.food }, mealDivEl);
        createElement('h3', { textContent: meal.time }, mealDivEl);
        createElement('h3', { textContent: meal.calories }, mealDivEl);

        let buttonDivEl = createElement('div', { id: 'meal-buttons' }, mealDivEl);
        let changeMealBtnEl = createElement('button', { className: 'change-meal', textContent: 'Change' }, buttonDivEl);
        let deleteMealBtnEl = createElement('button', { className: 'delete-meal', textContent: 'Delete' }, buttonDivEl);

        changeMealBtnEl.addEventListener('click', () => {
            addMealBtnEl.setAttribute('disabled', '');
            editMealBtnEl.removeAttribute('disabled');

            [foodEl.value, timeEl.value, caloriesEl.value] = [meal.food, meal.time, meal.calories];
            mealDivEl.remove();

            editMealBtnEl.addEventListener('click', editMealEventListener);

            function editMealEventListener() {
                if (!foodEl.value || !timeEl.value || !caloriesEl.value) return;

                let editedMeal = {
                    food: foodEl.value,
                    time: timeEl.value,
                    calories: caloriesEl.value,
                    _id: meal._id
                };
                changeMealData(editedMeal, meal._id);
                editMealBtnEl.removeEventListener('click', editMealEventListener);
            }
        });

        deleteMealBtnEl.addEventListener('click', (e) => {
            mealDivEl.remove();
            delMealData(meal._id);
        });
    })
}

function takeMealDataEventListener() {
    let [food, time, calories] = [foodEl.value, timeEl.value, caloriesEl.value];
    if (!food || !time || !calories) return;
    let newMeal = { food, time, calories };
    [foodEl, timeEl, caloriesEl].forEach((x) => x.value = '');
    addMealData(newMeal);
}

function createElement(tag, properties, container = null) {
    let newEl = document.createElement(tag);
    Object.assign(newEl, properties);
    if (container) container.appendChild(newEl);
    return newEl;
}

addMealBtnEl.addEventListener('click', takeMealDataEventListener);
loadMealsBtn.addEventListener('click', loadMealsData);