function solve() {
    const encodeEl = document.getElementById('encode');
    const decodeEL = document.getElementById('decode');

    encodeEl.addEventListener('submit', (e) => {
        e.preventDefault();

        let encodeData = e.target.querySelector('textarea');
        if (encodeData.value.trim() == '') return;

        let receiverData = decodeEL.querySelector('textarea');

        receiverData.value = shiftText(encodeData.value, 1);
        encodeData.value = '';
    })

    decodeEL.addEventListener('submit', (e) => {
        e.preventDefault();

        let decodeData = e.target.querySelector('textarea');

        decodeData.value = shiftText(decodeData.value, -1);
    })

    function shiftText(text, shift) {
        return text.split('').map(x => String.fromCharCode(x.charCodeAt() + shift)).join('')
    }
}