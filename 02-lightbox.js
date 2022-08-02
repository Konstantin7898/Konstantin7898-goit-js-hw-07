import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryArray = document.querySelector(".gallery");
const imgEl = galleryItems
  .map(({ preview, original, description }) => {
    return `<li><a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a></li>`;
  })
  .join(" ");

galleryArray.insertAdjacentHTML("beforeend", imgEl);
console.log(galleryItems);

function onClick(e) {
  if (e.target.nodeName !== "IMG") return;
}

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
