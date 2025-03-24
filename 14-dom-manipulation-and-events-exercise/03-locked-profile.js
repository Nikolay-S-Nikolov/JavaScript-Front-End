function solve() {
    let allButtons = document.querySelectorAll('button');

    for (let btn of allButtons) {
        btn.addEventListener('click', (e) => {

            if (Array.from(e.target.parentElement.querySelectorAll('input[id*="Lock"]:checked')).length) return;

            let currentBtn = e.target;
            let hiddenInfo = e.target.parentElement.querySelector('.hidden-fields')

            if (currentBtn.textContent == 'Show more') {
                hiddenInfo.style.display = 'block';
                currentBtn.textContent = 'Show less';

            } else {
                hiddenInfo.style.display = 'none';
                currentBtn.textContent = 'Show more';
            }

        });
    }
}