const flowerData = [
    { name: "Rose", description: "A classic flower symbolizing love.", image: "images/rose.jpg", colors: ["red", "white", "pink", "mixed"] },
    { name: "Daisy", description: "A cheerful flower representing purity.", image: "images/daisy.jpg", colors: ["yellow", "white", "pink", "mixed"] },
    { name: "Tulip", description: "A vibrant flower that blooms in spring.", image: "images/tulip.jpg", colors: ["purple", "yellow", "red", "mixed"] },
    { name: "Sunflower", description: "A bright, sunny flower that faces the sun.", image: "images/sunflower.jpg", colors: ["yellow", "orange", "red", "mixed"] },
    { name: "Lily", description: "A fragrant flower symbolizing purity.", image: "images/lily.jpg", colors: ["white", "pink", "orange", "mixed"] },
    { name: "Cherry Blossom", description: "A delicate flower representing the beauty of life.", image: "images/cherryblossom.jpg", colors: ["pink", "white", "mixed"] },
    { name: "Hibiscus", description: "A tropical flower symbolizing delicate beauty.", image: "images/hibiscus.jpg", colors: ["red", "pink", "yellow", "mixed"] },
    { name: "Marigold", description: "A vibrant flower representing warmth and passion.", image: "images/marigold.jpg", colors: ["yellow", "orange", "red", "mixed"] },
    { name: "Peony", description: "A romantic flower symbolizing prosperity and good fortune.", image: "images/peony.jpg", colors: ["pink", "white", "red", "mixed"] },
    { name: "Lavender", description: "A calming flower known for its fragrance and beauty.", image: "images/lavender.jpg", colors: ["purple", "white", "mixed"] },
    { name: "Orchid", description: "A luxurious flower representing strength and beauty.", image: "images/orchid.jpg", colors: ["purple", "white", "pink", "mixed"] },
    { name: "Carnation", description: "A delicate flower symbolizing love and admiration.", image: "images/carnation.jpg", colors: ["pink", "white", "red", "mixed"] },
    { name: "Bluebell", description: "A charming flower symbolizing humility and gratitude.", image: "images/bluebell.jpg", colors: ["blue", "purple", "mixed"] },
    { name: "Gardenia", description: "A fragrant flower symbolizing purity and sweetness.", image: "images/gardenia.jpg", colors: ["white", "mixed"] },
    { name: "Jasmine", description: "A fragrant flower symbolizing elegance and grace.", image: "images/jasmine.jpg", colors: ["white", "yellow", "mixed"] },
    { name: "Magnolia", description: "A large, fragrant flower representing dignity and nobility.", image: "images/magnolia.jpg", colors: ["white", "pink", "mixed"] },
    { name: "Begonia", description: "A colorful flower symbolizing love and compassion.", image: "images/begonia.jpg", colors: ["red", "yellow", "pink", "mixed"] },
    { name: "Camellia", description: "A graceful flower symbolizing love and passion.", image: "images/camellia.jpg", colors: ["red", "pink", "white", "mixed"] },
    { name: "Pansy", description: "A flower representing thoughtfulness and remembrance.", image: "images/pansy.jpg", colors: ["purple", "yellow", "red", "mixed"] },
    { name: "Zinnia", description: "A hardy flower symbolizing lasting friendship.", image: "images/zinia.jpg", colors: ["pink", "yellow", "orange", "mixed"] },
    { name: "Crocus", description: "A spring flower symbolizing joy and renewal.", image: "images/crocus.jpg", colors: ["purple", "yellow", "white", "mixed"] }
];

const flowerProducts = document.getElementById("flower-products");
const cartItems = document.getElementById("cart-items");


flowerData.forEach(flower => {
    const li = document.createElement("li");
    li.innerHTML = `
        <img src="${flower.image}" alt="${flower.name}" class="flower-image" />
        <div>
            <h3>${flower.name}</h3>
            <p>${flower.description}</p>
            <label for="qty-${flower.name}">Quantity:</label>
            <input type="number" min="1" value="1" class="qty-input" id="qty-${flower.name}" />
            <div>
                <p>Choose Colors:</p>
                ${flower.colors.map(color => `
                    <label class="color-option-label">
                        <input type="checkbox" class="color-checkbox" value="${color}" onchange="changeFlowerColor('${flower.name}', '${color}')">
                        <span class="color-option" style="background-color:${getColorHex(color)};"></span>
                        <span class="color-name">${color}</span> <!-- Display the color name here -->
                    </label>
                `).join('')}
            </div>
            <button onclick="addToCart('${flower.name}')">Add to Cart</button>
        </div>
    `;
    flowerProducts.appendChild(li);
});

function addToCart(flowerName) {
    const qtyInput = document.getElementById(`qty-${flowerName}`);
    const quantity = parseInt(qtyInput.value);

    if (quantity <= 0 || isNaN(quantity)) {
        alert("Please enter a valid quantity.");
        return;
    }

    const item = document.createElement("li");
    item.textContent = `${quantity} x ${flowerName}`;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");
    removeBtn.onclick = () => item.remove();

    item.appendChild(removeBtn);
    cartItems.appendChild(item);
}

function changeFlowerColor(flowerName, color) {
    alert(`You have selected the color ${color} for ${flowerName}`);
}

function getColorHex(color) {
    switch (color) {
        case "red": return "#FF0000";
        case "white": return "#FFFFFF";
        case "pink": return "#FFC0CB";
        case "yellow": return "#FFFF00";
        case "orange": return "#FFA500";
        case "purple": return "#800080";
        case "blue": return "#0000FF";
        case "green": return "#008000";
        case "mixed": return "#808080"; 
        default: return "#000000";
    }
}
