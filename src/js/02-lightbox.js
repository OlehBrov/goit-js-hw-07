import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(({preview, original, description}) => 
`<a class="gallery__item" href="${original}">
<img class="gallery__image" 
src="${preview}" 
alt="${description}" />
</a>`)  
.join("");


galleryRef.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryRef.addEventListener('click', gallerySlider);

function gallerySlider (event){
    event.preventDefault();
    if(event.target.nodeName !== 'IMG') return;
    let gallery = new SimpleLightbox('.gallery a', 
    {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
    });

}