function lockedProfile() {
    let baseURL = 'http://localhost:3030/jsonstore/advanced/profiles';
    
    fetch(baseURL)
        .then(res => res.json())
        .then(data => showLoadedProfiles(data))
        .catch(err => console.error(err))
}

function showLoadedProfiles(profiles) {
    let profileEl = document.querySelector('.profile');

    Object.values(profiles).forEach((profile) => {
        let newProfileEl = profileEl.cloneNode(true);

        let radioEls = newProfileEl.querySelectorAll('input[type="radio"]');
        let nameEl = newProfileEl.querySelector('input[type="text"][name="user1Username"]');
        let emailEl = newProfileEl.querySelector('[name="user1Email"]');
        let ageEl = newProfileEl.querySelector('[name="user1Age"]');
        let button = newProfileEl.querySelector('button');

        [...radioEls].forEach((el) => el.name = profile._id + 'Locked');
        Object.assign(nameEl, { value: profile.username });
        Object.assign(emailEl, { name: profile._id + profile.email }, { value: profile.email });
        Object.assign(ageEl, { name: profile._id + profile.age }, { value: profile.age });

        newProfileEl.querySelector('.user1Username').style.display = 'none';

        profileEl.parentElement.append(newProfileEl);

        button.addEventListener('click', hideShowInfoEventListener);
    })
    profileEl.remove()
}

function hideShowInfoEventListener(e) {
    radioElLock = e.target.parentElement.querySelector('input[value="lock"]');

    if (radioElLock.checked) return;

    let eleToHide = e.target.parentElement.querySelector('.user1Username');

    if (e.target.textContent == 'Show more') {
        e.target.textContent = 'Hide it';
        eleToHide.style.display = 'block'
    } else {
        e.target.textContent = 'Show more';
        eleToHide.style.display = 'none'
    }
}