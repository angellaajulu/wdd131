// PRODUCT ARRAY
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// ===========================
// POPULATE SELECT OPTIONS
// ===========================
const productSelect = document.querySelector("#productName");

if (productSelect) {
  products.forEach(item => {
    const opt = document.createElement("option");
    opt.value = item.id;
    opt.textContent = item.name;
    productSelect.appendChild(opt);
  });
}

// ===========================
// REVIEW COUNTER (review.html)
// ===========================
const reviewCounter = document.querySelector("#reviewCounter");

if (reviewCounter) {
  let count = Number(localStorage.getItem("reviews")) || 0;
  count++;
  localStorage.setItem("reviews", count);
  reviewCounter.textContent = count;
}

// ===========================
// LAST MODIFIED FOOTER
// ===========================
const modified = document.querySelector("#lastModified");
if (modified) {
  modified.textContent = document.lastModified;
}