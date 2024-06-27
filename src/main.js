import fetchImages from './js/pixabay-api';
import imagesTemplate from './js/render-function';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadBtn = document.querySelector('.load-images-btn');

let page = 1;
let value = '';
let lightbox;
let totalPages;
let cardHeight;

form.addEventListener('submit', onSubmit);
async function onSubmit(e) {
    e.preventDefault();
    hideLoadBtn();
    showLoader();
    gallery.innerHTML = '';
    page = 1;
    value = e.target.elements.search.value.trim();
    if (value === ''){
        iziToast.warning({
            title: 'Warning',
            message: 'Search query is empty. Please, enter a word',
            position: 'topRight',
            backgroundColor: 'orange',
            theme: 'dark',
            messageColor: 'white',
        });
        hideLoader();
        return
    }
    
    try {
        const data = await fetchImages(value, page);
        if (data.hits.length === 0) {
            hideLoadBtn();
            hideLoader();
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
                backgroundColor: 'red',
                theme: 'dark',
                messageColor: 'white',
            });
            form.reset();
            return
        }
        totalPages = Math.ceil(data.totalHits / 15);
        const markup = imagesTemplate(data);
        gallery.insertAdjacentHTML('beforeend', markup);
        lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
        showLoadBtn();
    } catch (error) {
        hideLoadBtn();
        console.log(error);
        iziToast.error({
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
            backgroundColor: 'red',
            theme: 'dark',
            messageColor: 'white',
        })
    }
    cardHeight = gallery.firstChild.getBoundingClientRect().height;
    hideLoader();
    form.reset();
}


loadBtn.addEventListener('click', async () => {
    hideLoadBtn();
    showLoader();
    page++;
    if (page > totalPages) {
        iziToast.info({
            title: '',
            message: "We're sorry, but you've reached the end of search results.",
            position: 'topRight',
            backgroundColor: 'blue',
            theme: 'dark',
            messageColor: 'white',
        });
        hideLoader();
        return
    };
    const data = await fetchImages(value, page)
    const markup = imagesTemplate(data);
    gallery.insertAdjacentHTML('beforeend', markup);
    scrollBy({
        top: cardHeight * 2,
        behavior: "smooth",
    });
    lightbox.refresh();
    hideLoader();
    showLoadBtn();
})


function showLoadBtn() {
    loadBtn.classList.remove('visually-hidden');
}
function hideLoadBtn() {
    loadBtn.classList.add('visually-hidden');
}

function showLoader() {
    loader.classList.remove('visually-hidden');
}
function hideLoader() {
    loader.classList.add('visually-hidden');
}