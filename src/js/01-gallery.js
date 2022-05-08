import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items.js';

const refs = document.querySelector(".gallery");
console.log(refs);

const listEl = createListEl(galleryItems);

function createListEl(galleryItems) {
  return galleryItems.map(galleryItem =>
    `<div class="gallery__item">
    <a class="gallery__link" href="${galleryItem.original}">
    <img class="gallery__image" src = "${galleryItem.preview}" data-source="${galleryItem.original}" alt = "${galleryItem.description}"/>
    </a>
    </div>`)
    .join("");
}
refs.insertAdjacentHTML("beforeend", listEl);

refs.addEventListener(`click`, (event)=> {

event.preventDefault(); 

const imgElement = event.target.classList.contains(`gallery__image`)
if(!imgElement){
  return
}

    let gallery = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250,
    });
});


