
function typeWriter(elementId, text, speed, isLastLine, callback) {
    let i = 0;
    let element = document.getElementById(elementId);
    element.style.visibility = 'visible';
    element.innerHTML = '';
    let cursor;

    if (isLastLine) {
        cursor = document.createElement('span');
        cursor.classList.add('cursor');
        element.appendChild(cursor);
    }

    function type() {
        if (i < text.length) {
            element.innerHTML = text.substring(0, i + 1); 
            if (isLastLine) {
                element.appendChild(cursor); 
            }
            i++;
        } else {
            clearInterval(interval);
            if (isLastLine) {
                cursor.style.visibility = 'visible';
            }
            if (callback) setTimeout(callback, 500);
        }
    }

    let interval = setInterval(type, speed);
}

function animateText() {
    let line1Text = "Créer des solutions logicielles,";
    let line2Text = "c'est bien plus que coder,";
    let line3Text = "c'est transformer des idées en réalité.";

    typeWriter('line1', line1Text, 50, false, () => {
        typeWriter('line2', line2Text, 50, false, () => {
            typeWriter('line3', line3Text, 50, true);
        });
    });
}

window.onload = animateText;

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".progress-bar span").forEach(bar => {
        bar.style.transition = "width 1.5s ease-in-out";
    });
});

function fadeInOnScroll() {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight * 0.8) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', fadeInOnScroll);

document.addEventListener('DOMContentLoaded', () => {
    fadeInOnScroll();
    document.querySelectorAll('.competence-card, .project-card').forEach(card => {
        card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    });
});

function typeWriter(elementId, text, speed, isLastLine, callback) {
    let i = 0;
    let element = document.getElementById(elementId);
    element.style.visibility = 'visible'; 
    element.innerHTML = ''; 
    let cursor;

    if (isLastLine) {
        cursor = document.createElement('span');
        cursor.classList.add('cursor');
        element.appendChild(cursor);
    }

    function type() {
        if (i < text.length) {
            element.innerHTML = text.substring(0, i + 1);
            if (isLastLine) {
                element.appendChild(cursor);
            }
            i++;
        } else {
            clearInterval(interval);
            if (isLastLine) {
                cursor.style.visibility = 'visible';
            }
            if (callback) setTimeout(callback, 500);
        }
    }

    let interval = setInterval(type, speed);
}

function animateText() {
    let line1Text = "Créer des solutions logicielles,";
    let line2Text = "c'est bien plus que coder,";
    let line3Text = "c'est transformer des idées en réalité.";

    typeWriter('line1', line1Text, 50, false, () => {
        typeWriter('line2', line2Text, 50, false, () => {
            typeWriter('line3', line3Text, 50, true);
        });
    });
}

window.onload = animateText;

const hero = document.querySelector('.hero');

function getRandomPosition() {

    return `${Math.random() * 100}% ${Math.random() * 100}%`;
}

function moveBackground() {
    setInterval(() => {
        const randomPosition1 = getRandomPosition();
        const randomPosition2 = getRandomPosition();
        
        hero.style.backgroundPosition = `${randomPosition1}, ${randomPosition2}`;
    }, 2000);
}

moveBackground();

const linguisticSection = document.querySelector('.linguistique');

const observerOptions = {
    root: null, 
    threshold: 0.1 
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); 
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

observer.observe(linguisticSection);

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".project-card");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;

        cards.forEach((card) => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < windowHeight - 100) {
                card.classList.add("visible");
            }
        });
    };

    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);
});

const projectCards = document.querySelectorAll('.project-card');
const previewImage = document.querySelector('.image-preview img');

projectCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        const imageSrc = card.getAttribute('data-image');
        previewImage.src = imageSrc;
        previewImage.style.opacity = '1';
    });

    card.addEventListener('mouseleave', () => {
        previewImage.style.opacity = '0';
    });
});

const scrollDownArrow = document.querySelector('.scroll-down');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        scrollDownArrow.classList.add('hidden');
    } else {
        scrollDownArrow.classList.remove('hidden');
    }
});
