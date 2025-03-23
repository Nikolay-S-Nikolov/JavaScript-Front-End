function solve() {
    const emailElement = document.getElementById('email');

    emailElement.addEventListener('change', (event) => {

        let pattern = /[a-z]+@[a-z]+\.[a-z]+/g;

        if (!event.target.value.match(pattern)) {
            return event.target.classList.add('error');
        }

        event.target.classList.remove('error');

    })
}