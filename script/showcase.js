// click-to-zoom lightbox for the PCB and schematic images.
// Any element with class "zoomable" and a data-zoom-src opens the
// full image in an overlay; click the backdrop, the close button,
// or press Escape to dismiss.
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("lightbox-close");

function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = "";
    document.body.style.overflow = "";
}

document.querySelectorAll(".zoomable").forEach((el) => {
    el.addEventListener("click", () => {
        const src = el.dataset.zoomSrc;
        const img = el.querySelector("img");
        openLightbox(src, img ? img.alt : "");
    });
});

closeBtn.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
});