const numbers = document.querySelectorAll('.numbers span');
const counter = document.querySelector('.counter');
const final = document.querySelector('.final');
const replay = document.getElementById('replay');

runAnimation();

function resetDOM(){
    counter.classList.remove('hide');
    final.classList.remove('show');

    numbers.forEach((num) => {
        num.classList.value = '';
    });

    numbers[0].classList.add('start');
}

function runAnimation(){
    numbers.forEach((num, index) => {
        const nextToLast = numbers.length - 1;

        num.addEventListener('animationend', (e) => {
            if(e.animationName === 'goIn' && index !== nextToLast){
                num.classList.remove('start');
                num.classList.add('end');
            }
            else if(e.animationName === 'goOut' && num.nextElementSibling){
                num.nextElementSibling.classList.add('start');
            }
            else{
                counter.classList.add('hide');
                final.classList.add('show');
            }
        });
    });
}

replay.addEventListener('click', () => {
    resetDOM();
    runAnimation();
});