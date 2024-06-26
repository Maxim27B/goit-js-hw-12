import{A as E,i as c,S as f}from"./assets/vendor-cf73e4e9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const P=E.create({baseURL:"https://pixabay.com"}),y=async(a,t)=>(await P.get("/api/",{params:{q:a,per_page:15,page:t,key:"44460867-9f013743ec0c5b2ec6c0f5088",image_type:"photo",orientation:"horizontal",safesearch:!0}})).data;function L(a){return a.hits.map(o=>{const{webformatURL:l,largeImageURL:e,tags:r,likes:s,views:C,comments:q,downloads:O}=o;return`<li class="gallery-item">
           <a class="gallery-link" href="${e}">
    <img
      width=360;
      height=200;
      class="gallery-image"
      src="${l}"
      alt="${r} " />
          <div class="image-info">
               <p>LIKES <span>${s}</span></p>
                    <p>VIEWS <span>${C}</span></p>
                    <p>COMMENTS <span>${q}</span></p>
                    <p>DOWNLOADS <span>${O}</span></p>
                </div>
                </a>
            </li>
        `}).join("")}const p=document.querySelector("form"),d=document.querySelector(".gallery"),b=document.querySelector(".loader"),h=document.querySelector(".load-images-btn");let i=1,u="",m,v,w;p.addEventListener("submit",R);async function R(a){if(a.preventDefault(),g(),k(),d.innerHTML="",i=1,u=a.target.elements.search.value.trim(),u===""){c.warning({title:"Warning",message:"Search query is empty. Please, enter a word",position:"topRight",backgroundColor:"orange",theme:"dark",messageColor:"white"}),n();return}try{const t=await y(u,i);if(t.hits.length===0){g(),n(),c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",theme:"dark",messageColor:"white"}),p.reset();return}v=Math.ceil(t.totalHits/15);const o=L(t);d.insertAdjacentHTML("beforeend",o),m=new f(".gallery a",{captionsData:"alt",captionDelay:250}),m.refresh(),S()}catch(t){g(),console.log(t),c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",theme:"dark",messageColor:"white"})}w=d.firstChild.getBoundingClientRect().height,n(),p.reset()}h.addEventListener("click",async()=>{if(g(),k(),i++,i>v){c.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"blue",theme:"dark",messageColor:"white"}),n();return}const a=await y(u,i),t=L(a);d.insertAdjacentHTML("beforeend",t),scrollBy({top:w*2,behavior:"smooth"}),m=new f(".gallery a",{captionsData:"alt",captionDelay:250}),m.refresh(),n(),S()});function S(){h.classList.remove("visually-hidden")}function g(){h.classList.add("visually-hidden")}function k(){b.classList.remove("visually-hidden")}function n(){b.classList.add("visually-hidden")}
//# sourceMappingURL=commonHelpers.js.map
