let t1, t2;
let start = false;
let Goo = document.querySelector('.start')
let Kettik = document.querySelector('.pedals .treadleK')
let Tormoz = document.querySelector('.pedals .treadleT')
const engine = new Audio('./audio/engine.mp3');
const audio = new Audio('./audio/car.mp3');
const tormozp = new Audio('./audio/qGGGG.mp3');
engine.loop = true;
engine.volume = 0.3;

Goo.addEventListener('click', function () {

    this.innerHTML = 'stop';
    engine.play();
    Kettik.addEventListener('mouseover', pushTreadle
    ); // событие на педаль;
    document.querySelector('.progress-line').style.width = '100px';

    Goo.addEventListener('click', function () {

        this.innerHTML = 'start';
        engine.pause();
        document.querySelector('.progress-line').style.width = '0';

    })
    // // глушим
    Kettik.removeEventListener('mouseout', stopTreadle); // событие на педаль;
    Tormoz.addEventListener('mouseover', pushTreadleT
    );
    Tormoz.removeEventListener('mouseout', stopTreadleT); // событие на педаль;
});


function pushTreadle() {
    t1 = clearTimeout(t1);
    t2 = clearTimeout(t2);
    this.classList.add('treadle-push');
    document.querySelector('.progress-line').style.width = '300px';
    audio.play();
    stopTreadle();
}

function stopTreadle() {
    t1 = setTimeout(() => {
        Kettik.classList.remove('treadle-push');
        document.querySelector('.progress-line').style.width = '100px';
    }, 1000);
    t2 = setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
    }, 1500);
}
function pushTreadleT() {
    t1 = clearTimeout(t1);
    t2 = clearTimeout(t2);
    this.classList.add('treadle-push');
    document.querySelector('.progress-line').style.width = '50px';
    tormozp.play();
    stopTreadleT();
}
function stopTreadleT() {
    t1 = setTimeout(() => {
        Tormoz.classList.remove('treadle-push');
        document.querySelector('.progress-line').style.width = '50px';
    }, 1000);
    t2 = setTimeout(() => {
        tormozp.pause();
        tormozp.currentTime = 0;
    }, 1500);
}