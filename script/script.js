// stat animation

const counters = document.querySelectorAll("[data-count]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function countUp(el) {
    const target = Number(el.dataset.count);
    const digits = el.textContent.length;
    const duration = 450;
    const start = performance.now();

    function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        el.textContent = String(Math.round(target * progress)).padStart(digits, "0");
        if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
}

if (!reduceMotion) {
    counters.forEach((el) => {
        el.textContent = "0".repeat(el.textContent.length);
        setTimeout(() => countUp(el), 1450);
    });
}