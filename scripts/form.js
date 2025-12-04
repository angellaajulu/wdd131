// ===========================
// PRODUCT ARRAY
// ===========================
const products = [
  { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
  { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
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

  // MARK FORM SUBMISSION TO TRIGGER REVIEW COUNTER
  document.querySelector("#reviewForm").addEventListener("submit", () => {
    localStorage.setItem("submitted", "yes");
  });
}

// ===========================
// REVIEW COUNTER (review.html)
// ONLY increases AFTER actual submit
// ===========================
const reviewCounter = document.querySelector("#reviewCounter");

if (reviewCounter) {
  const submitted = localStorage.getItem("submitted");

  if (submitted === "yes") {
    let count = Number(localStorage.getItem("reviews")) || 0;
    count++;
    localStorage.setItem("reviews", count);
    localStorage.removeItem("submitted"); // reset flag
    reviewCounter.textContent = count;
  } else {
    reviewCounter.textContent = localStorage.getItem("reviews") || 0;
  }
}

// ===========================
// LAST MODIFIED FOOTER
// ===========================
const modified = document.querySelector("#lastModified");
if (modified) {
  modified.textContent = document.lastModified;
}
