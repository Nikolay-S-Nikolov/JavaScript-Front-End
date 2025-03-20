function toggle() {
    let currentStatus = document.querySelector('.button').textContent;

    if (currentStatus == 'More') {
        document.querySelector('.button').textContent = 'Less';
        document.getElementById('extra').style.display = 'block';
    } else {
        document.querySelector('.button').textContent = 'More';
        document.getElementById('extra').style.display = 'none';
    }
}