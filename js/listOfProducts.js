// PRODUCT ARRAY
// Dynamically fills products onto the page, storing data for later use instead of hardcoding it within HTML
const products = [
  {
    href: "individualProduct.html",
    imgSrc: "/images/products/magic/mox_diamond.webp",
    alt: "Mox Diamond",
    title: "Mox Diamond",
    subtitle: "[From the Vault: Relics]",
    price: "$1,685.20",
    description: "A fast mana rock used in high-powered decks to accelerate your plays.",
  },
  {
    href: "home.html",
    imgSrc: "/images/products/magic/impact_tremors.webp",
    alt: "Impact Tremors",
    title: "Impact Tremors",
    subtitle: "[Wilds of Eldraine: Enchanting Tales]",
    price: "$2.90",
    description: "Deals damage to each creature that enters the battlefield under an opponent’s control.",
  },
  {
    href: "home.html",
    imgSrc: "/images/products/magic/arcane.webp",
    alt: "Arcane Signet",
    title: "Arcane Signet",
    subtitle: "[March of the Machine Commander]",
    price: "$3.00",
    description: "A versatile mana source that fits almost any deck.",
  },
  // Pokémon Cards
  {
    href: "home.html",
    imgSrc: "/images/products/pokemon/stufful.jpg",
    alt: "Stufful Ash vs TM.Rocket Deck Kit",
    title: "Stufful Ash vs TM.Rocket Deck Kit",
    subtitle: "#017 PSA 10",
    price: "$125.00",
    description: "A solid deck kit featuring Stufful in perfect condition.",
  },
  {
    href: "home.html",
    imgSrc: "/images/products/pokemon/raging_bolt.jpg",
    alt: "Raging Bolt EX Terastal Festival",
    title: "Raging Bolt EX Terastal Festival",
    subtitle: "#208 PSA 10",
    price: "$480.00",
    description: "Rare Raging Bolt card from the Terastal Festival series.",
  },
  {
    href: "home.html",
    imgSrc: "/images/products/pokemon/mew_triumph.jpg",
    alt: "Mew Triumph",
    title: "Mew Triumph",
    subtitle: "#97 PSA 7",
    price: "$1,685.20",
    description: "A prized Mew card, condition graded PSA 7.",
  },
  // One Piece Card Game
  {
    href: "home.html",
    imgSrc: "/images/products/op-cg/luffy.webp",
    alt: "Monkey.D.Luffy",
    title: "Monkey.D.Luffy",
    subtitle: "Pirates Party Vol. 5",
    price: "$1.40",
    description: "Iconic Luffy card from Pirates Party Volume 5.",
  },
  {
    href: "home.html",
    imgSrc: "/images/products/op-cg/whitebeard.webp",
    alt: "Edward Newgate",
    title: "Edward Newgate",
    subtitle: "Paramount War",
    price: "$1.00",
    description: "The legendary Whitebeard from the Paramount War series.",
  },
  {
    href: "home.html",
    imgSrc: "/images/products/op-cg/kuzan.jpg",
    alt: "Kuzan",
    title: "Kuzan",
    subtitle: "Royal Blood",
    price: "$6.00",
    description: "Kuzan card from the Royal Blood collection.",
  },
  // Lorcana Cards
  {
    href: "home.html",
    imgSrc: "/images/products/lorcana/merlin.webp",
    alt: "Merlin - Crab",
    title: "Merlin - Crab",
    subtitle: "Rise of the Floodborn",
    price: "$0.50",
    description: "Magical Merlin card, perfect for collectors.",
  },
  {
    href: "home.html",
    imgSrc: "/images/products/lorcana/maui.webp",
    alt: "You're Welcome (Enchanted)",
    title: "You're Welcome (Enchanted)",
    subtitle: "Shimmering Skies",
    price: "$132.30",
    description: "Enchanting Maui card from the Shimmering Skies set.",
  },
  {
    href: "home.html",
    imgSrc: "/images/products/lorcana/naveen.webp",
    alt: "Prince Naveen (Enchanted)",
    title: "Prince Naveen (Enchanted)",
    subtitle: "Shimmering Skies",
    price: "$153.40",
    description: "Rare enchanted Prince Naveen card.",
  },
];

function createProductCard(product) {
  return `
  <a href="${product.href}" class="product-link">
    <div class="product-card">
      <div class="product-card__image">
        <img src="${product.imgSrc}" alt="${product.alt}" class="product-img">
      </div>
      <div class="product-card__content">
        <h3 class="product-title">${product.title}</h3>
        <p class="product-subtitle">${product.subtitle}</p>
        <p class="product-price">${product.price}</p>
        <p class="product-description">${product.description}</p>
        <button class="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  </a>
  `;
}

const productGrid = document.getElementById("product-grid");
productGrid.innerHTML = products.map(createProductCard).join("");
