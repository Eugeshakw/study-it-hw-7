import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    ul: document.querySelector('.gallery')
    

}

const imgItems = galleryItems.map(({preview, original, description }) =>{
    return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}"data-source="${original}" alt="Image description">
    </img>
    </a>
    </li>`
}).join(' ');
    refs.ul.innerHTML = imgItems;


    refs.ul.addEventListener('click', openGallery)

function openGallery(event) {
    event.preventDefault();
    if(event.target.nodeName !== 'IMG'){
        return;
    }
    const imgUrl = event.target.dataset.source;
    console.log(imgUrl);
    const instance = basicLightbox.create(` 
    <img src="${imgUrl}" width="800" height="600"></img>`);
    instance.show();
    const visible = instance.visible();

    document.addEventListener('keydown', closeModal);

    function closeModal(event) {
        if(event.code === `Escape` && visible){
            instance.close();
            document.removeEventListener('keydown', closeModal); 
        }
    }

}