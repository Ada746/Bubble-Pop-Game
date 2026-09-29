let score = 0;
const scoreDisplay = document.getElementById('score');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function creerBulle() {
    const bulle = document.createElement('div');
    bulle.classList.add('bulle');

    const taille = 50;
    bulle.style.width = taille + 'px';
    bulle.style.height = taille + 'px';

    bulle.style.backgroundColor = getRandomColor();

    const maxLeft = window.innerWidth - taille;
    const maxTop = window.innerHeight - taille;
    bulle.style.left = Math.random() * maxLeft + 'px';
    bulle.style.top = Math.random() * maxTop + 'px';

    //hover
    bulle.addEventListener('mouseenter', () => {
        bulle.classList.add('grandir');
    });

    bulle.addEventListener('mouseleave', () => {
        bulle.classList.remove('grandir');
    });

    bulle.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = 'Score: ' + score;
        bulle.remove()
    });

    document.body.appendChild(bulle);
}

setInterval(creerBulle, 1000);