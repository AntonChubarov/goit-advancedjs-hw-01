import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

const markupArray = [];

galleryItems.forEach(galleryItem => {
  const markup = `
    <li class="gallery__item">
      <a class="gallery__link" href="${galleryItem.original}">
        <img
          class="gallery__image"
          src="${galleryItem.preview}"
          data-source="${galleryItem.original}"
          alt="${galleryItem.description}"
        />
      </a>
    </li>
  `;

  markupArray.push(markup);
});

const finalMarkup = markupArray.join('');

gallery.innerHTML = finalMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', captionDelay: 250,
});
