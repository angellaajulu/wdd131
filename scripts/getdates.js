// populate current year and last modified date
document.addEventListener('DOMContentLoaded', function(){
const yEl = document.getElementById('currentyear');
if(yEl) yEl.textContent = new Date().getFullYear();


const lmEl = document.getElementById('lastModified');
if(lmEl) lmEl.textContent = 'Last Modification: ' + document.lastModified;
});