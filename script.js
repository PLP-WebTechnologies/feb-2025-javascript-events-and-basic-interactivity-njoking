const flowerData = [
    { name: "Rose", description: "A classic flower symbolizing love.", image: "images/rose.jpg", colors: ["red", "white", "pink", "mixed"], price: 500 },
    { name: "Daisy", description: "A cheerful flower representing purity.", image: "images/daisy.jpg", colors: ["yellow", "white", "pink", "mixed"], price: 350 },
    { name: "Tulip", description: "A vibrant flower that blooms in spring.", image: "images/tulip.jpg", colors: ["purple", "yellow", "red", "mixed"], price: 600 },
    { name: "Sunflower", description: "A bright, sunny flower that faces the sun.", image: "images/sunflower.jpg", colors: ["yellow", "orange", "red", "mixed"], price: 400 },
    { name: "Lily", description: "A fragrant flower symbolizing purity.", image: "images/lily.jpg", colors: ["white", "pink", "orange", "mixed"], price: 550 },
    { name: "Cherry Blossom", description: "A delicate flower representing the beauty of life.", image: "images/cherryblossom.jpg", colors: ["pink", "white", "mixed"], price: 750 },
    { name: "Hibiscus", description: "A tropical flower symbolizing delicate beauty.", image: "images/hibiscus.jpg", colors: ["red", "pink", "yellow", "mixed"], price: 650 },
    { name: "Marigold", description: "A vibrant flower representing warmth and passion.", image: "images/marigold.jpg", colors: ["yellow", "orange", "red", "mixed"], price: 300 },
    { name: "Peony", description: "A romantic flower symbolizing prosperity and good fortune.", image: "images/peony.jpg", colors: ["pink", "white", "red", "mixed"], price: 700 },
    { name: "Lavender", description: "A calming flower known for its fragrance and beauty.", image: "images/lavender.jpg", colors: ["purple", "white", "mixed"], price: 450 },
    { name: "Orchid", description: "A luxurious flower representing strength and beauty.", image: "images/orchid.jpg", colors: ["purple", "white", "pink", "mixed"], price: 900 },
    { name: "Carnation", description: "A delicate flower symbolizing love and admiration.", image: "images/carnation.jpg", colors: ["pink", "white", "red", "mixed"], price: 400 },
    { name: "Bluebell", description: "A charming flower symbolizing humility and gratitude.", image: "images/bluebell.jpg", colors: ["blue", "purple", "mixed"], price: 350 },
    { name: "Gardenia", description: "A fragrant flower symbolizing purity and sweetness.", image: "images/gardenia.jpg", colors: ["white", "mixed"], price: 500 },
    { name: "Jasmine", description: "A fragrant flower symbolizing elegance and grace.", image: "images/jasmine.jpg", colors: ["white", "yellow", "mixed"], price: 600 },
    { name: "Magnolia", description: "A large, fragrant flower representing dignity and nobility.", image: "images/magnolia.jpg", colors: ["white", "pink", "mixed"], price: 650 },
    { name: "Begonia", description: "A colorful flower symbolizing love and compassion.", image: "images/begonia.jpg", colors: ["red", "yellow", "pink", "mixed"], price: 550 },
    { name: "Camellia", description: "A graceful flower symbolizing love and passion.", image: "images/camellia.jpg", colors: ["red", "pink", "white", "mixed"], price: 600 },
    { name: "Pansy", description: "A flower representing thoughtfulness and remembrance.", image: "images/pansy.jpg", colors: ["purple", "yellow", "red", "mixed"], price: 350 },
    { name: "Zinnia", description: "A hardy flower symbolizing lasting friendship.", image: "images/zinia.jpg", colors: ["pink", "yellow", "orange", "mixed"], price: 400 }
];


const flowerProducts = document.getElementById("flower-products");
const cartItems = document.getElementById("cart-items");
const slider = document.getElementById("slider");

// Display flower list
// Display flower list with prices in Kenyan Shillings
flowerData.forEach(flower => {
    const li = document.createElement("li");
    li.innerHTML = `
        <img src="${flower.image}" alt="${flower.name}" class="flower-image" />
        <h3>${flower.name}</h3>
        <p>${flower.description}</p>
        <p><strong>Price:</strong> KSh ${flower.price}</p>  <!-- Display Price -->
        <label for="qty-${flower.name}">Quantity:</label>
        <input type="number" min="1" value="1" class="qty-input" id="qty-${flower.name}" />
        <div>
            <p>Choose Colors:</p>
            ${flower.colors.map(color => `
                <label class="color-option" style="color: #000;">
                    <input type="checkbox" name="color-${flower.name}" value="${color}" />
                    ${color}
                </label>
            `).join('')}
        </div>
        <button onclick="addToCart('${flower.name}')">Add to Cart</button>
    `;
    flowerProducts.appendChild(li);
});


// Cart logic
function addToCart(flowerName) {
    const qtyInput = document.getElementById(`qty-${flowerName}`);
    const quantity = parseInt(qtyInput.value);
    const selectedColors = [...document.querySelectorAll(`input[name="color-${flowerName}"]:checked`)].map(c => c.value);

    if (quantity <= 0 || isNaN(quantity)) {
        alert("Please enter a valid quantity.");
        return;
    }

    if (selectedColors.length === 0) {
        alert("Please select at least one color.");
        return;
    }

    const item = document.createElement("li");
    item.textContent = `${quantity} x ${flowerName} (${selectedColors.join(", ")})`;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");
    removeBtn.onclick = () => item.remove();

    item.appendChild(removeBtn);
    cartItems.appendChild(item);
}

// Slider logic (4 images at a time, auto every 2s)
let slideIndex = 0;
function updateSlider() {
    const totalSlides = Math.ceil(flowerData.length / 4);
    const startIndex = (slideIndex * 4) % flowerData.length;
    const images = [];

    for (let i = 0; i < 4; i++) {
        const flower = flowerData[(startIndex + i) % flowerData.length];
        images.push(`<img src="${flower.image}" alt="${flower.name}" />`);
    }

    slider.innerHTML = images.join('');
    slideIndex = (slideIndex + 1) % totalSlides;
}
setInterval(updateSlider, 2000);
updateSlider();

// Function to toggle between tabs (About Us, Shipping Info)
function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.style.display = 'none'; // Hide all tabs
    });

    const activeTab = document.getElementById(tabName);
    activeTab.style.display = 'block'; // Show the selected tab
}

// Initialize: Show About Us by default when page loads
document.addEventListener('DOMContentLoaded', function() {
    showTab('about');
});
