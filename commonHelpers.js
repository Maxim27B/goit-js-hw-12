import{A as O,i as c,S as E}from"./assets/vendor-cf73e4e9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const P=O.create({baseURL:"https://pixabay.com"}),f=async(o,t)=>(await P.get("/api/",{params:{q:o,per_page:15,page:t,key:"44460867-9f013743ec0c5b2ec6c0f5088",image_type:"photo",orientation:"horizontal",safesearch:!0}})).data;function y(o){return o.hits.map(a=>{const{webformatURL:l,largeImageURL:e,tags:r,likes:s,views:k,comments:C,downloads:q}=a;return`<li class="gallery-item">
           <a class="gallery-link" href="${e}">
    <img
      width=360;
      height=200;
      class="gallery-image"
      src="${l}"
      alt="${r} " />
          <div class="image-info">
               <p>LIKES <span>${s}</span></p>
                    <p>VIEWS <span>${k}</span></p>
                    <p>COMMENTS <span>${C}</span></p>
                    <p>DOWNLOADS <span>${q}</span></p>
                </div>
                </a>
            </li>
        `}).join("")}const g=document.querySelector("form"),d=document.querySelector(".gallery"),L=document.querySelector(".loader"),p=document.querySelector(".load-images-btn");let i=1,u="",h,b,v;g.addEventListener("submit",R);async function R(o){if(o.preventDefault(),m(),S(),d.innerHTML="",i=1,u=o.target.elements.search.value.trim(),u===""){c.warning({title:"Warning",message:"Search query is empty. Please, enter a word",position:"topRight",backgroundColor:"orange",theme:"dark",messageColor:"white"}),n();return}try{const t=await f(u,i);if(t.hits.length===0){m(),n(),c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",theme:"dark",messageColor:"white"}),g.reset();return}b=Math.ceil(t.totalHits/15);const a=y(t);d.insertAdjacentHTML("beforeend",a),h=new E(".gallery a",{captionsData:"alt",captionDelay:250}),h.refresh(),w()}catch(t){m(),console.log(t),c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",theme:"dark",messageColor:"white"})}v=d.firstChild.getBoundingClientRect().height,n(),g.reset()}p.addEventListener("click",async()=>{if(m(),S(),i++,i>b){c.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"blue",theme:"dark",messageColor:"white"}),n();return}const o=await f(u,i),t=y(o);d.insertAdjacentHTML("beforeend",t),scrollBy({top:v*2,behavior:"smooth"}),h.refresh(),n(),w()});function w(){p.classList.remove("visually-hidden")}function m(){p.classList.add("visually-hidden")}function S(){L.classList.remove("visually-hidden")}function n(){L.classList.add("visually-hidden")}
//# sourceMappingURL=commonHelpers.js.map
