/* 
Dec 1, 2024 23:59:59 
*/

function countdown() {
    const launchDate = new Date("Nov 1, 2024 23:59:59").getTime();
    const button = document.getElementById("lockBtn");


    const interval = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = launchDate - now;

        if (timeLeft <= 0) {
            clearInterval(interval);
            document.querySelector(".timer").innerHTML = "<h2>Please Proceed :)</h2>";

            button.disabled = false;
            button.innerText = "+1";
            button.onclick = () => {
                window.location.href = "UNINSTALL/index1.html";
            };
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }, 1000);
}

document.addEventListener('touchstart', function (event) {
    for (let i = 0; i < event.touches.length; i++) {
        const touch = event.touches[i];
        const cursorElement = document.createElement('div');
        cursorElement.classList.add('custom-cursor');
        cursorElement.style.left = `${touch.pageX - 25}px`;
        cursorElement.style.top = `${touch.pageY - 25}px`;
        document.body.appendChild(cursorElement);
        setTimeout(() => {
            cursorElement.remove();
        }, 500);
    }
});

const noBtn = document.getElementById('noBtn');

function moveButton() {
    const maxX = window.innerWidth - noBtn.clientWidth;
    const maxY = window.innerHeight - noBtn.clientHeight;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('click', moveButton);
noBtn.addEventListener('touchstart', moveButton);




countdown();
