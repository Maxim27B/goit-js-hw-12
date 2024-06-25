import fetchImages from './js/pixabay-api';
import imagesTemplate from './js/render-function';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader')

async function onSubmit(e) {
    e.preventDefault();
    gallery.innerHTML = '';
    showLoader();
    const value = e.target.elements.search.value.trim();
    if (value === ''){
        iziToast.warning({
            title: 'Warning',
            message: 'Search query is empty. Please, enter a word',
            position: 'topCenter',
            backgroundColor: 'orange',
            theme: 'dark',
            messageColor: 'white',
        });
        hideLoader();
        return
    }
    
    try{
    const data = await fetchImages(value)
    const markup = imagesTemplate(data);
    gallery.insertAdjacentHTML('beforeend', markup);
    const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
    lightbox.refresh();
    } catch (error){
        console.log(error);
        iziToast.error({
      title: 'Error',
      message: 'Sorry, there are no images matching your search query. Please try again!',
      position: 'topCenter',
      backgroundColor: 'red',
      theme: 'dark',
      messageColor: 'white',
     })
    }
    hideLoader()
    form.reset();
}
form.addEventListener('submit', onSubmit);

function showLoader() {
    loader.classList.remove('visually-hidden');
}

function hideLoader() {
    loader.classList.add('visually-hidden');
}