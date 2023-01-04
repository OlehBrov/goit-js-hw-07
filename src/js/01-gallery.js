import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(({preview, original, description}) => 
`<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`)  
.join("");


galleryRef.insertAdjacentHTML("afterbegin", galleryMarkup);



galleryRef.addEventListener("click", openOriginalImage);

function openOriginalImage(event){
  if(event.target.nodeName !== 'IMG') return;
  event.preventDefault();
   return basicLightbox.create(`<img src="${event.target.dataset.source}" alt = "${event.target.alt}"/>`, {className: 'basicLightbox'}).show()
  
}
