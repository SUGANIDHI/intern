document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
    const closeBtn = document.getElementById('close');

    // Sample image data
    const images = [
        { src: 'https://picsum.photos/300/200?random=1', caption: 'Image 1' },
        { src: 'https://picsum.photos/300/200?random=2', caption: 'Image 2' },
        { src: 'https://picsum.photos/300/200?random=3', caption: 'Image 3' },
        { src: 'https://picsum.photos/300/200?random=4', caption: 'Image 4' },
        { src: 'https://picsum.photos/300/200?random=5', caption: 'Image 5' },
        { src: 'https://picsum.photos/300/200?random=6', caption: 'Image 6' },
        { src: 'https://picsum.photos/300/200?random=7', caption: 'Image 7' },
        { src: 'https://picsum.photos/300/200?random=8', caption: 'Image 8' },
        { src: 'https://picsum.photos/300/200?random=9', caption: 'Image 9' },
        { src: 'https://picsum.photos/300/200?random=10', caption: 'Image 10' },
        { src: 'https://picsum.photos/300/200?random=11', caption: 'Image 11' },
        { src: 'https://picsum.photos/300/200?random=12', caption: 'Image 12' }
    ];

    // Populate gallery with images
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.caption;
        imgElement.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = image.src;
            captionText.textContent = image.caption;
        });
        gallery.appendChild(imgElement);
    });

    // Close modal
    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };

    // Close modal on click outside of image
    modal.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});

