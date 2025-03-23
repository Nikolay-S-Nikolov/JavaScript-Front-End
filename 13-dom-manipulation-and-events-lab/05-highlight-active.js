document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const element = Array.from(document.querySelectorAll('input[type="text"]'));
    
    element.forEach((ele)=>{
        ele.addEventListener('focus',highlightEventListener);
        ele.addEventListener('blur',blurEventListener);
    });
    
    function highlightEventListener(event){
        event.target.parentElement.classList.add('focused');
    }

    function blurEventListener(event){
        event.target.parentElement.classList.remove('focused');
    }
    
}