import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const refs = {
    ul: document.querySelector('.gallery')
    
}
const gallery = createGalleryItems(galleryItems);

refs.ul.innerHTML = gallery;


 function createGalleryItems(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
  </img></a></li>`

}).join(' ');
 }




const lightbox = new SimpleLightbox('.gallery a', { 
  captionsData: 'alt',
  captionDelay: 250,
  
 });









