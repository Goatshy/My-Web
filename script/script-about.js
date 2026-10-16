const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion) {
    const targets = document.querySelectorAll(".about-section, .timeline, .tools");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("in-view");
                observer.unobserve(entry.target);
            });
        },
        { threshold: 0.2 }
    );

    targets.forEach((el) => observer.observe(el));
}