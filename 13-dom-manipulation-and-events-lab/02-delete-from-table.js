function deleteByEmail() {
    let emailsData = document.querySelectorAll('tbody tr td:nth-child(2)');
    let search = document.getElementsByName('email')[0];
    let result = document.getElementById('result');

    let searchedEmail = search.value;

    result.textContent = '';
    
    if (searchedEmail == '') return;


    for (let email of emailsData) {
        if (email.textContent == searchedEmail) {

            email.parentElement.remove();
            result.textContent = 'Deleted.';
            break;
        }
    }

    if (result.textContent == '') {
        result.textContent = 'Not found.';
    }

    search.value = '';
}
