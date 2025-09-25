const blowBtn = document.getElementById('blowBtn');
const flames = document.querySelectorAll('.flame');
const balloonsContainer = document.getElementById('balloons');

blowBtn.addEventListener('click', () => {
    const flames = document.querySelectorAll('.flame');

    flames.forEach(flame => {
        flame.style.animation = 'none';
        flame.style.opacity = '0.3';
        flame.style.transition = 'opacity 3s ease, transform 3s ease';
    });

    const colors = ['#ff4d4d', '#ffb84d', '#4dff4d', '#4dd2ff', '#b84dff'];
    for (let i = 0; i < 15; i++) {
        let balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = Math.random() * 80 + 10 + 'vw';
        balloon.style.width = 30 + Math.random() * 20 + 'px';
        balloon.style.height = 40 + Math.random() * 30 + 'px';
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.animationDuration = 3 + Math.random() * 3 + 's';
        balloonsContainer.appendChild(balloon);

        balloon.addEventListener('animationend', () => balloon.remove());
    }

    const sisterImages = ['sister1.png', 'sister2.png', 'sister3.png', 'sister4.png','sister2.png','sister4.png'];
    sisterImages.forEach(img => {
        let imgDiv = document.createElement('div');
        imgDiv.classList.add('sister');
        imgDiv.style.left = Math.random() * 70 + 15 + 'vw';
        imgDiv.style.width = 60 + Math.random() * 40 + 'px';
        imgDiv.style.height = 60 + Math.random() * 40 + 'px';
        imgDiv.style.backgroundImage = `url(${img})`;
        imgDiv.style.animationDuration = 4 + Math.random() * 3 + 's';
        balloonsContainer.appendChild(imgDiv);

        imgDiv.addEventListener('animationend', () => imgDiv.remove());
    });

    // Realistic fireworks
    createFireworks(5, 15); // 5 fireworks, each with 15 particles
});

// Function to create realistic fireworks
function createFireworks(fireworkCount, particlesPerFirework) {
    for (let i = 0; i < fireworkCount; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight * 0.5;

        for (let j = 0; j < particlesPerFirework; j++) {
            let particle = document.createElement('div');
            particle.classList.add('firework-particle');
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.backgroundColor = randomColor();

            // Random direction and distance
            const angle = Math.random() * 2 * Math.PI;
            const distance = 50 + Math.random() * 50; // px
            const dx = Math.cos(angle) * distance + 'px';
            const dy = Math.sin(angle) * distance + 'px';

            particle.style.setProperty('--dx', dx);
            particle.style.setProperty('--dy', dy);

            document.body.appendChild(particle);

            // Remove particle after animation
            particle.addEventListener('animationend', () => particle.remove());
        }
    }
}

// Random colors
function randomColor() {
    const colors = ['#ff4d4d', '#ffb84d', '#4dff4d', '#4dd2ff', '#b84dff', '#ffff4d', '#ff66cc'];
    return colors[Math.floor(Math.random() * colors.length)];
}