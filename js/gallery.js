// Copyright (c) 2025 takotime808
document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const selectedImage = document.getElementById('selected-image');
    let currentIndex = 0;

    function showImage(index) {
        thumbnails[currentIndex].classList.remove('active');
        currentIndex = index;
        selectedImage.src = thumbnails[index].src;
        selectedImage.alt = thumbnails[index].alt;
        thumbnails[index].classList.add('active');
    }

    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => showImage(index));
    });

    document.querySelector('.prev')?.addEventListener('click', () => {
        showImage((currentIndex - 1 + thumbnails.length) % thumbnails.length);
    });

    document.querySelector('.next')?.addEventListener('click', () => {
        showImage((currentIndex + 1) % thumbnails.length);
    });
});