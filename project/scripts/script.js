// Display last modified date
document.getElementById("lastModified").textContent = document.lastModified;


// Gardening tips array with object structure
const gardeningTips = [
{ tip: "Water your plants early in the morning." },
{ tip: "Use organic fertilizers for better soil health." },
{ tip: "Rotate crops to prevent pests and diseases." },
{ tip: "Prune dead leaves to encourage growth." }
];


// Function to show a random tip
function showTip() {
const randomIndex = Math.floor(Math.random() * gardeningTips.length);
document.getElementById("tipOutput").textContent = `${gardeningTips[randomIndex].tip}`;
}


// Tip of the day based on current date
function tipOfTheDay() {
const index = new Date().getDate() % gardeningTips.length;
document.getElementById("tipOutput").textContent = `${gardeningTips[index].tip}`;
}


// Initialize tip of the day
tipOfTheDay();


// Event listener for tip button
document.getElementById("showTipBtn").addEventListener("click", showTip);


// Handle contact form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
e.preventDefault();
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;


if(!email.includes('@')) { alert('Please enter a valid email.'); return; }


let messages = JSON.parse(localStorage.getItem("messages")) || [];
messages.push({ name, email, message });
localStorage.setItem("messages", JSON.stringify(messages));


alert(`Thank you, ${name}. Your message has been received!`);
this.reset();
});