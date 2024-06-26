import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

function imagesTemplate(data) {
      const markup = data.hits
        .map(image => {
          const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = image;
          return `<li class="gallery-item">
           <a class="gallery-link" href="${largeImageURL}">
    <img
      width=360;
      height=200;
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags} " />
          <div class="image-info">
               <p>LIKES <span>${likes}</span></p>
                    <p>VIEWS <span>${views}</span></p>
                    <p>COMMENTS <span>${comments}</span></p>
                    <p>DOWNLOADS <span>${downloads}</span></p>
                </div>
                </a>
            </li>
        `;
        })
        .join('');
      return markup;
    }
export default imagesTemplate;
