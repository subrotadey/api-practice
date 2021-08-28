function loadPhotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(json => displayPhotos(json))
}
loadPhotos();
function displayPhotos(photos){
    const photoContainer = document.getElementById('photos');
    for(const photo of photos){
        const li = document.createElement('li');
        li.innerText = photo.url;
        photoContainer.appendChild(li);
    }
}