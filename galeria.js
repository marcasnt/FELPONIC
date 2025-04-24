// Lightbox para ampliar imágenes
document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', function() {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        lightbox.style.display = 'flex';
        lightboxImg.src = this.src;
        lightboxImg.alt = this.alt;
    });
});
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('lightbox').style.display = 'none';
});
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});
