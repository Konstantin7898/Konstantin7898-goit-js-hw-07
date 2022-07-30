import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryArray = document.querySelector(".gallery");
console.log(galleryArray);
const imgEl = galleryItems
  .map(({ preview, original, description }) => {
    return `<li><a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a></li>`;
  })
  .join("");
galleryArray.insertAdjacentHTML("beforeend", imgEl);
console.log(galleryItems);

galleryArray.addEventListener("click", onGalleryArrayClick);

function onGalleryArrayClick(e) {
  if (!e.target.classlist.contains("gallery__image")) {
    return;
  }

  const image = e.target.dataset.value;
  console.log(image);
  const instance = basicLightbox.create(`
    <img src="${image}" width="800" height="600">
`);
  console.log(instance);
  instance.show();
  instance.show(() => console.log("lightbox now visible"));
}
