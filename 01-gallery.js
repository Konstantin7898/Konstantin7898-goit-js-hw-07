import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryArray = document.querySelector(".gallery");
const imgEl = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a></div>`;
  })
  .join(" ");

galleryArray.insertAdjacentHTML("beforeend", imgEl);
console.log(galleryItems);

galleryArray.addEventListener("click", onGalleryArrayClick);

function onGalleryArrayClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  console.log(e.target);

  const image = e.target.dataset.source;

  const instance = basicLightbox.create(`
      <img src="${image}" width="800" height="600">
  `);

  instance.show();
}
