import{A as h,i,S as y}from"./assets/vendor-cf73e4e9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const L=h.create({baseURL:"https://pixabay.com"}),b=async r=>(await L.get("/api/",{params:{q:r,per_page:15,page:1,key:"44460867-9f013743ec0c5b2ec6c0f5088",image_type:"photo",orientation:"horizontal",safesearch:!0}})).data;function v(r){return r.hits.length===0&&i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",backgroundColor:"red",theme:"dark",messageColor:"white"}),r.hits.map(a=>{const{webformatURL:s,largeImageURL:e,tags:t,likes:n,views:p,comments:g,downloads:f}=a;return`<li class="gallery-item">
           <a class="gallery-link" href="${e}">
    <img
      width=360;
      height=200;
      class="gallery-image"
      src="${s}"
      alt="${t} " />
          <div class="image-info">
               <p>LIKES <span>${n}</span></p>
                    <p>VIEWS <span>${p}</span></p>
                    <p>COMMENTS <span>${g}</span></p>
                    <p>DOWNLOADS <span>${f}</span></p>
                </div>
                </a>
            </li>
        `}).join("")}const d=document.querySelector("form"),c=document.querySelector(".gallery"),u=document.querySelector(".loader"),m=document.querySelector(".load-images-btn");async function w(r){r.preventDefault(),c.innerHTML="",q();const o=r.target.elements.search.value.trim();if(o===""){i.warning({title:"Warning",message:"Search query is empty. Please, enter a word",position:"topCenter",backgroundColor:"orange",theme:"dark",messageColor:"white"}),l(),C();return}try{const a=await b(o),s=v(a);c.insertAdjacentHTML("beforeend",s),new y(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),S()}catch(a){console.log(a),i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",backgroundColor:"red",theme:"dark",messageColor:"white"})}l(),d.reset()}d.addEventListener("submit",w);function S(){m.classList.remove("visually-hidden")}function C(){m.classList.add("visually-hidden")}function q(){u.classList.remove("visually-hidden")}function l(){u.classList.add("visually-hidden")}
//# sourceMappingURL=commonHelpers.js.map
