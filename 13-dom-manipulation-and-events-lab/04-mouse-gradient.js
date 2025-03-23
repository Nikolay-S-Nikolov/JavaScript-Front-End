function attachGradientEvents() {
    const hoverEl = document.getElementById('gradient');
    const result = document.getElementById('result');

    hoverEl.addEventListener('mousemove',gradientInEventListener);
    hoverEl.addEventListener('mouseout',gradientOutEventListener);

    function gradientInEventListener(event){
        let cursorPosition = event.offsetX;
        const maxMovement = event.currentTarget.clientWidth;
        result.textContent = Math.trunc((cursorPosition/maxMovement)*100) + '%';
    }

    function gradientOutEventListener(event){
        result.textContent ='';
    }
}
