/* Estrado AI / Muralla AI — analytics & event tracking. Set GA4_ID + CLARITY_ID to activate. */
(function(){var GA4_ID="G-XXXXXXXXXX",CLARITY_ID="XXXXXXXXXX";
var hasGA=GA4_ID.indexOf("X")===-1,hasC=CLARITY_ID.indexOf("X")===-1;
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=window.gtag||gtag;
if(hasGA){var s=document.createElement("script");s.async=1;s.src="https://www.googletagmanager.com/gtag/js?id="+GA4_ID;document.head.appendChild(s);gtag("js",new Date());gtag("config",GA4_ID,{anonymize_ip:true});}
if(hasC){(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script",CLARITY_ID);}
function track(n,p){if(window.gtag&&hasGA)gtag("event",n,p||{});if(window.clarity&&hasC)clarity("event",n)}window.murallaTrack=track;
document.addEventListener("DOMContentLoaded",function(){
 var w=document.querySelector(".nav"),L=document.querySelector(".nav-links");
 document.querySelectorAll("[data-track]").forEach(function(e){e.addEventListener("click",function(){track(e.getAttribute("data-track"),{})})});
 document.querySelectorAll('a[href^="mailto:"]').forEach(function(e){e.addEventListener("click",function(){track("email_click",{})})});
 var m=[25,50,75,100],fired={};window.addEventListener("scroll",function(){var h=document.documentElement,pct=(h.scrollTop)/((h.scrollHeight-h.clientHeight)||1)*100;m.forEach(function(x){if(pct>=x&&!fired[x]){fired[x]=1;track("scroll_depth",{percent:x})}})},{passive:true});
});})();
