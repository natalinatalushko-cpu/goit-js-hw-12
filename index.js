import{a as M,S as v,i as c}from"./assets/vendor-CucEYOFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const B="36810234-b5e1d7960ec1148affe35137c",E="https://pixabay.com/api/";async function d(t,r){const i={key:B,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15};return(await M.get(E,{params:i})).data}const f=document.querySelector(".gallery"),p=document.querySelector(".loader"),m=document.querySelector(".load-more"),$=new v(".gallery a",{captionsData:"alt",captionDelay:250});function g(t){const r=t.map(({webformatURL:i,largeImageURL:n,tags:e,likes:o,views:a,comments:P,downloads:q})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img
              class="gallery-image"
              src="${i}"
              alt="${e}"
            />
          </a>
          <ul class="info">
            <li class="info-item">
              <p>Likes</p>
              <p>${o}</p>
            </li>
            <li class="info-item">
              <p>Views</p>
              <p>${a}</p>
            </li>
            <li class="info-item">
              <p>Comments</p>
              <p>${P}</p>
            </li>
            <li class="info-item">
              <p>Downloads</p>
              <p>${q}</p>
            </li>
          </ul>
        </li>
      `).join("");f.insertAdjacentHTML("beforeend",r),$.refresh()}function R(){f.innerHTML=""}function h(){p.classList.remove("is-hidden")}function y(){p.classList.add("is-hidden")}function L(){m.classList.remove("is-hidden")}function w(){m.classList.add("is-hidden")}const O=document.querySelector(".form"),x=document.querySelector(".load-more"),S=15;let l="",s=1,u=0;O.addEventListener("submit",A);x.addEventListener("click",_);async function A(t){t.preventDefault();const r=t.target.elements["search-text"].value.trim();if(r!==""){l=r,s=1,R(),w(),h();try{const i=await d(l,s);if(u=i.totalHits,i.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(i.hits),s*S>=u?b():L()}catch{c.error({message:"Something went wrong. Please try again later!",position:"topRight"})}finally{y(),t.target.reset()}}}async function _(){s+=1,w(),h();try{const t=await d(l,s);g(t.hits),D(),s*S>=u?b():L()}catch{c.error({message:"Something went wrong. Please try again later!",position:"topRight"})}finally{y()}}function b(){c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}function D(){const t=document.querySelector(".gallery-item");if(!t)return;const{height:r}=t.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
