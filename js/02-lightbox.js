import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const refs = {
    ul: document.querySelector('.gallery')
    
}
 
const gallery = galleryItems.map(({preview, original, description}) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
  </img></a></li>`

}).join(' ');
 
refs.ul.innerHTML = gallery;


refs.ul.addEventListener('click', openModal);


function openModal(evt){
  if(evt.target.nodeName !== 'IMG'){
    return;
  }

  const imgUrl = evt.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${imgUrl}" width="800" height="600">
`)

instance.show()

const visible = instance.visible();

document.addEventListener('keydown', closeModal);

function closeModal(evt){
  if(evt.code === `Escape` && visible){
    instance.close();
    document.removeEventListener('keydown', closeModal); 
  }
}
console.log(gallery);

}
