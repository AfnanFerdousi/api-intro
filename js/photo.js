function loadPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhotos(data));
}
loadPhotos();
function displayPhotos(photos) {
    console.log(photos)
    const photoContainer = document.getElementById('photos');
    for (const photo of photos) {
        const p = document.createElement('p');
        p.style.textAlign = 'center';
        p.innerText = photo.thumbnailUrl;
        photoContainer.appendChild(p);
    }
}