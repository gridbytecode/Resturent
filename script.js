/**
 * THE ROYAL SAFFRON - RESTAURANT WEBSITE DEMO TEMPLATE
 * Reusable & customizable template for restaurant clients.
 * Written with pure Vanilla JavaScript (No frameworks required).
 */

// ===================================================================
// 1. CENTRAL RESTAURANT CONFIGURATION
// (Clients can rebrand details in under 2 minutes right here)
// ===================================================================
const RESTAURANT_CONFIG = {
  restaurantName: "The Royal Saffron",
  tagline: "Fine Dine & Artisanal Kitchen",
  phoneDisplay: "+91 9031762157",
  phoneTel: "+919031762157",
  whatsappNumber: "919031762157", // International format without +
  address: "Sector 62, Noida, Uttar Pradesh 201309",
  timings: "11:00 AM – 11:30 PM (Mon – Sun)",
  currencySymbol: "₹",
  googleMapsUrl: "https://maps.google.com/?q=Sector+62+Noida+Uttar+Pradesh"
};

// ===================================================================
// 2. PRODUCT / MENU DATASET
// High quality food imagery, ratings, prep info & veg/non-veg status
// ===================================================================
const MENU_ITEMS = [
  {
    id: "chicken-biryani",
    name: "Chicken Biryani",
    category: "Main Course",
    price: 180,
    rating: 4.8,
    reviewsCount: 340,
    isVeg: false,
    serving: "Serves 1–2",
    prepTime: "25–30 mins",
    spiceLevel: "Medium Spiced",
    shortDescription: "Aromatic basmati rice slow-cooked with tender spiced chicken, saffron, and authentic herbs.",
    fullDescription: "Aromatic basmati rice cooked with tender chicken, selected spices and herbs. Prepared in royal dum style to seal in heavenly aromatics. A perfect blend of taste and tradition, served with burani raita and spicy salan.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "paneer-tikka",
    name: "Paneer Tikka",
    category: "Starters",
    price: 150,
    rating: 4.7,
    reviewsCount: 220,
    isVeg: true,
    serving: "Serves 2",
    prepTime: "15–20 mins",
    spiceLevel: "Mild to Medium",
    shortDescription: "Char-grilled fresh cottage cheese cubes marinated in rich hung curd and tandoori spices.",
    fullDescription: "Fresh malai paneer cubes marinated in hand-ground spices, thick hung curd, and mustard oil, charred to perfection in a clay oven. Served piping hot with crunchy bell peppers, onions, and mint coriander chutney.",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "veg-manchurian",
    name: "Veg Manchurian",
    category: "Starters",
    price: 120,
    rating: 4.6,
    reviewsCount: 185,
    isVeg: true,
    serving: "Serves 1–2",
    prepTime: "15–20 mins",
    spiceLevel: "Spicy & Tangy",
    shortDescription: "Crispy minced vegetable balls tossed in a flavorful Indo-Chinese garlic soya glaze.",
    fullDescription: "Crisp fried vegetable dumplings made with finely shredded cabbage, carrots, and spring onions, wok-tossed in an aromatic Indo-Chinese sauce infused with chopped ginger, garlic, green chilies, and light soya sauce.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "butter-chicken",
    name: "Butter Chicken",
    category: "Main Course",
    price: 200,
    rating: 4.9,
    reviewsCount: 410,
    isVeg: false,
    serving: "Serves 2",
    prepTime: "20–25 mins",
    spiceLevel: "Mild & Creamy",
    shortDescription: "Succulent tandoori roasted chicken immersed in a rich, buttery, velvety tomato gravy.",
    fullDescription: "Our signature culinary pride: tender boneless roasted chicken pieces simmered in an indulgent tomato and cashew gravy, finished with dollops of churned white butter, fresh dairy cream, and hand-rubbed kasoori methi.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "masala-dosa",
    name: "Masala Dosa",
    category: "Main Course",
    price: 90,
    rating: 4.7,
    reviewsCount: 290,
    isVeg: true,
    serving: "Serves 1",
    prepTime: "12–15 mins",
    spiceLevel: "Mild Spiced",
    shortDescription: "Golden crispy fermented crepe stuffed with aromatic tempered spiced potato mash.",
    fullDescription: "Authentic South-Indian classic crispy golden-brown crepe prepared with stone-ground fermented rice and lentil batter. Filled with tempered spiced potato bhaji and served with authentic drumstick sambar and fresh coconut chutney.",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "veg-hakka-noodles",
    name: "Veg Hakka Noodles",
    category: "Main Course",
    price: 130,
    rating: 4.6,
    reviewsCount: 160,
    isVeg: true,
    serving: "Serves 1–2",
    prepTime: "15–18 mins",
    spiceLevel: "Mild to Medium",
    shortDescription: "Wok-tossed noodles with colorful julienned veggies and light soy-garlic seasoning.",
    fullDescription: "High-flame wok tossed noodles tossed with freshly sliced bell peppers, shredded cabbage, carrots, spring onions, and a splash of dark soya sauce, toasted sesame oil, and crushed white peppercorns.",
    image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "tandoori-chicken",
    name: "Tandoori Chicken",
    category: "Starters",
    price: 220,
    rating: 4.9,
    reviewsCount: 315,
    isVeg: false,
    serving: "Serves 2",
    prepTime: "25–30 mins",
    spiceLevel: "Spicy & Smoky",
    shortDescription: "Traditional charcoal-grilled chicken marinated in Kashmiri red chili and royal spices.",
    fullDescription: "Juicy chicken roasted in a clay tandoor after 12-hour marination in Greek yogurt, smoked mustard oil, crushed coriander seeds, and Kashmiri degi mirch. Served with pickled onion rings and lemon wedges.",
    image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "dal-makhani",
    name: "Dal Makhani",
    category: "Main Course",
    price: 160,
    rating: 4.8,
    reviewsCount: 275,
    isVeg: true,
    serving: "Serves 2",
    prepTime: "15–20 mins",
    spiceLevel: "Rich & Mild",
    shortDescription: "Black lentils slow-cooked overnight with creamy tomatoes, white butter and secret spices.",
    fullDescription: "A legendary North-Indian delicacy of whole black lentils (urad dal) and kidney beans simmered overnight on low charcoal embers, tempered with pure cow ghee, ginger, and rich organic dairy cream.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cold-coffee",
    name: "Cold Coffee",
    category: "Beverages",
    price: 80,
    rating: 4.8,
    reviewsCount: 195,
    isVeg: true,
    serving: "Serves 1",
    prepTime: "5–8 mins",
    spiceLevel: "Sweet & Chilled",
    shortDescription: "Chilled blended artisan coffee served with chocolate drizzle and vanilla cream froth.",
    fullDescription: "Freshly brewed espresso blend vigorously whipped with chilled full-cream milk, crushed ice, and Belgian cocoa powder, crowned with luscious vanilla cream and artisanal chocolate fudge swirls.",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mango-lassi",
    name: "Mango Lassi",
    category: "Beverages",
    price: 90,
    rating: 4.9,
    reviewsCount: 230,
    isVeg: true,
    serving: "Serves 1",
    prepTime: "5–8 mins",
    spiceLevel: "Rich & Fruity",
    shortDescription: "Traditional sweet churned yogurt smoothie blended with ripe Alphonso mango pulp.",
    fullDescription: "Thick, creamy traditional yogurt whipped with sweet golden Alphonso mangoes, infused with cardamom seeds and topped with crushed pistachios and saffron strands. Served refreshingly chilled.",
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gulab-jamun",
    name: "Gulab Jamun",
    category: "Desserts",
    price: 70,
    rating: 4.9,
    reviewsCount: 380,
    isVeg: true,
    serving: "2 Pieces",
    prepTime: "Ready to Serve",
    spiceLevel: "Warm & Sweet",
    shortDescription: "Soft melt-in-mouth milk dumplings soaked in aromatic rose and green cardamom syrup.",
    fullDescription: "Handcrafted golden khoya dumplings fried in pure desi ghee until perfectly caramelized, soaked warm in rosewater and green cardamom scented sugar syrup. Garnished with toasted almond slivers.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "rasmalai",
    name: "Royal Rasmalai",
    category: "Desserts",
    price: 85,
    rating: 4.9,
    reviewsCount: 260,
    isVeg: true,
    serving: "2 Pieces",
    prepTime: "Ready to Serve",
    spiceLevel: "Chilled Delight",
    shortDescription: "Delicate cottage cheese patties immersed in saffron-infused thickened rabdi milk.",
    fullDescription: "Silky soft chenna patties poached gently and steeped in sweet, fragrant saffron-infused thickened milk, finished with hand-crushed Iranian pistachios and edible silver vark.",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80"
  }
];

// ===================================================================
// 3. STATE MANAGEMENT
// ===================================================================
const AppState = {
  currentCategory: "all",
  currentDiet: "all", // "all", "veg", "non-veg"
  selectedProduct: null
};

// ===================================================================
// 4. DOM ELEMENTS
// ===================================================================
const DOM = {
  productsGrid: document.getElementById("productsGrid"),
  emptyMenuState: document.getElementById("emptyMenuState"),
  filterPills: document.querySelectorAll(".filter-pill"),
  dietBtns: document.querySelectorAll(".diet-btn"),
  resetFilterBtn: document.getElementById("resetFilterBtn"),
  categoryCards: document.querySelectorAll(".category-card"),

  // Header & Mobile Nav
  siteHeader: document.getElementById("header"),
  mobileToggle: document.getElementById("mobileMenuToggle"),
  mobileDrawer: document.getElementById("mobileDrawer"),
  drawerOverlay: document.getElementById("drawerOverlay"),
  drawerCloseBtn: document.getElementById("drawerCloseBtn"),
  mobileNavLinks: document.querySelectorAll(".mobile-nav-link"),

  // Product Modal
  productModal: document.getElementById("productModal"),
  modalCloseBtn: document.getElementById("modalCloseBtn"),
  modalProductImage: document.getElementById("modalProductImage"),
  modalVegBadge: document.getElementById("modalVegBadge"),
  modalSymbol: document.getElementById("modalSymbol"),
  modalDietText: document.getElementById("modalDietText"),
  modalCategoryTag: document.getElementById("modalCategoryTag"),
  modalRating: document.getElementById("modalRating"),
  modalPrice: document.getElementById("modalPrice"),
  modalTitle: document.getElementById("modalTitle"),
  modalServing: document.getElementById("modalServing"),
  modalPrepTime: document.getElementById("modalPrepTime"),
  modalSpiceLevel: document.getElementById("modalSpiceLevel"),
  modalDescription: document.getElementById("modalDescription"),
  modalCallBtn: document.getElementById("modalCallBtn"),
  modalWhatsAppShareBtn: document.getElementById("modalWhatsAppShareBtn"),

  // Booking Form & Year
  bookingForm: document.getElementById("bookingForm"),
  currentYear: document.getElementById("currentYear"),
  footerDishLinks: document.querySelectorAll(".footer-dish-link")
};

// ===================================================================
// 5. HELPER FUNCTIONS
// ===================================================================

/**
 * Generate formatted WhatsApp click-to-chat URL with pre-filled message
 * @param {string} messageText 
 * @returns {string}
 */
function createWhatsAppUrl(messageText) {
  const encoded = encodeURIComponent(messageText);
  return `https://wa.me/${RESTAURANT_CONFIG.whatsappNumber}?text=${encoded}`;
}

/**
 * Share specific dish details via WhatsApp
 * Pre-fills dish name, price, description, and preview image link
 * @param {Object} item 
 */
function shareProductOnWhatsApp(item) {
  const shareText =
    `Hi, I'm interested in ${item.name}.
Price: ${RESTAURANT_CONFIG.currencySymbol}${item.price}
${item.shortDescription}
Category: ${item.category}
Product: ${item.image}`;

  const url = createWhatsAppUrl(shareText);
  window.open(url, "_blank", "noopener,noreferrer");
}

/**
 * Render single product card HTML
 * @param {Object} item 
 * @returns {string}
 */
function generateProductCardHtml(item) {
  const vegClass = item.isVeg ? "veg" : "non-veg";
  const dietLabel = item.isVeg ? "Pure Veg" : "Non-Veg";

  return `
    <article class="product-card" data-id="${item.id}" data-category="${item.category}" data-diet="${item.isVeg ? 'veg' : 'non-veg'}">
      <div class="product-img-wrapper">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <div class="product-badges">
          <div class="product-diet-badge" title="${dietLabel}">
            <span class="food-symbol ${vegClass}"></span>
          </div>
          <span class="product-category-tag">${item.category}</span>
        </div>
        <button class="product-quick-share" title="Share ${item.name} on WhatsApp" data-action="quick-whatsapp" aria-label="Share on WhatsApp">
          <i class="fa-brands fa-whatsapp"></i>
        </button>
      </div>
      
      <div class="product-body">
        <div class="product-meta-row">
          <div class="product-rating">
            <i class="fa-solid fa-star"></i>
            <span>${item.rating}</span>
          </div>
          <span class="product-serving-badge"><i class="fa-solid fa-clock"></i> ${item.prepTime}</span>
        </div>

        <h3 class="product-title">${item.name}</h3>
        <p class="product-desc">${item.shortDescription}</p>

        <div class="product-footer">
          <div class="product-price">${RESTAURANT_CONFIG.currencySymbol}${item.price}</div>
          <button class="btn-details" data-action="view-details">
            <span>View Details</span>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </article>
  `;
}

// ===================================================================
// 6. PRODUCT RENDERING & FILTERING
// ===================================================================

function renderMenuProducts() {
  if (!DOM.productsGrid) return;

  const filteredItems = MENU_ITEMS.filter(item => {
    // Category match
    const matchesCategory =
      AppState.currentCategory.toLowerCase() === "all" ||
      item.category.toLowerCase() === AppState.currentCategory.toLowerCase();

    // Diet match
    let matchesDiet = true;
    if (AppState.currentDiet === "veg") {
      matchesDiet = item.isVeg === true;
    } else if (AppState.currentDiet === "non-veg") {
      matchesDiet = item.isVeg === false;
    }

    return matchesCategory && matchesDiet;
  });

  if (filteredItems.length === 0) {
    DOM.productsGrid.innerHTML = "";
    if (DOM.emptyMenuState) DOM.emptyMenuState.style.display = "block";
    return;
  }

  if (DOM.emptyMenuState) DOM.emptyMenuState.style.display = "none";
  DOM.productsGrid.innerHTML = filteredItems.map(item => generateProductCardHtml(item)).join("");
}

/**
 * Filter by Category Pill
 * @param {string} category 
 */
function setCategoryFilter(category) {
  AppState.currentCategory = category;

  // Update pill active classes
  DOM.filterPills.forEach(pill => {
    const pillCat = pill.getAttribute("data-filter");
    if (pillCat.toLowerCase() === category.toLowerCase()) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }
  });

  renderMenuProducts();
}

/**
 * Filter by Dietary Option
 * @param {string} diet 
 */
function setDietFilter(diet) {
  AppState.currentDiet = diet;

  DOM.dietBtns.forEach(btn => {
    if (btn.getAttribute("data-diet") === diet) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  renderMenuProducts();
}

// ===================================================================
// 7. PRODUCT DETAIL MODAL MANAGEMENT
// ===================================================================

function openProductModal(product) {
  if (!product || !DOM.productModal) return;
  AppState.selectedProduct = product;

  // Populate data
  DOM.modalProductImage.src = product.image;
  DOM.modalProductImage.alt = product.name;
  DOM.modalTitle.textContent = product.name;
  DOM.modalPrice.textContent = `${RESTAURANT_CONFIG.currencySymbol}${product.price}`;
  DOM.modalRating.textContent = product.rating;
  DOM.modalCategoryTag.textContent = product.category;
  DOM.modalServing.textContent = product.serving;
  DOM.modalPrepTime.textContent = product.prepTime;
  DOM.modalSpiceLevel.textContent = product.spiceLevel;
  DOM.modalDescription.textContent = product.fullDescription;

  // Veg / Non-Veg badge configuration
  if (product.isVeg) {
    DOM.modalSymbol.className = "food-symbol veg";
    DOM.modalDietText.textContent = "100% Vegetarian";
    DOM.modalVegBadge.style.color = "var(--veg-color)";
  } else {
    DOM.modalSymbol.className = "food-symbol non-veg";
    DOM.modalDietText.textContent = "Non-Vegetarian";
    DOM.modalVegBadge.style.color = "var(--nonveg-color)";
  }

  // Update modal Call link
  DOM.modalCallBtn.href = `tel:${RESTAURANT_CONFIG.phoneTel}`;

  // Open modal
  DOM.productModal.classList.add("open");
  document.body.style.overflow = "hidden"; // Prevent background scroll
}

function closeProductModal() {
  if (!DOM.productModal) return;
  DOM.productModal.classList.remove("open");
  document.body.style.overflow = "";
  AppState.selectedProduct = null;
}

// ===================================================================
// 8. MOBILE DRAWER NAVIGATION
// ===================================================================

function toggleMobileDrawer(open) {
  const isOpen = typeof open === "boolean" ? open : !DOM.mobileDrawer.classList.contains("open");

  if (isOpen) {
    DOM.mobileDrawer.classList.add("open");
    DOM.drawerOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  } else {
    DOM.mobileDrawer.classList.remove("open");
    DOM.drawerOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// ===================================================================
// 9. EVENT LISTENERS SETUP
// ===================================================================

function setupEventListeners() {
  // Sticky Header Scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      DOM.siteHeader.classList.add("scrolled");
    } else {
      DOM.siteHeader.classList.remove("scrolled");
    }
  });

  // Category filter pills
  DOM.filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      const category = pill.getAttribute("data-filter");
      setCategoryFilter(category);
    });
  });

  // Dietary filter buttons
  DOM.dietBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const diet = btn.getAttribute("data-diet");
      setDietFilter(diet);
    });
  });

  // Reset filter button in empty state
  if (DOM.resetFilterBtn) {
    DOM.resetFilterBtn.addEventListener("click", () => {
      setCategoryFilter("all");
      setDietFilter("all");
    });
  }

  // Popular category cards click: scroll to menu and filter category
  DOM.categoryCards.forEach(card => {
    const handleCategoryClick = () => {
      const category = card.getAttribute("data-category");
      setCategoryFilter(category);
      setDietFilter("all");

      const menuSection = document.getElementById("menu");
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    card.addEventListener("click", handleCategoryClick);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleCategoryClick();
      }
    });
  });

  // Delegated clicks on Product Grid (View Details & WhatsApp Quick Share)
  DOM.productsGrid.addEventListener("click", (e) => {
    const card = e.target.closest(".product-card");
    if (!card) return;

    const productId = card.getAttribute("data-id");
    const item = MENU_ITEMS.find(p => p.id === productId);
    if (!item) return;

    // Check if quick share button was clicked
    const quickShareBtn = e.target.closest("[data-action='quick-whatsapp']");
    if (quickShareBtn) {
      e.stopPropagation();
      shareProductOnWhatsApp(item);
      return;
    }

    // Default or View Details button opens modal
    openProductModal(item);
  });

  // Modal Share on WhatsApp button
  DOM.modalWhatsAppShareBtn.addEventListener("click", () => {
    if (AppState.selectedProduct) {
      shareProductOnWhatsApp(AppState.selectedProduct);
    }
  });

  // Modal Close buttons
  DOM.modalCloseBtn.addEventListener("click", closeProductModal);
  DOM.productModal.addEventListener("click", (e) => {
    if (e.target === DOM.productModal) {
      closeProductModal();
    }
  });

  // Close modal on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && DOM.productModal.classList.contains("open")) {
      closeProductModal();
    }
  });

  // Mobile drawer toggle
  DOM.mobileToggle.addEventListener("click", () => toggleMobileDrawer(true));
  DOM.drawerCloseBtn.addEventListener("click", () => toggleMobileDrawer(false));
  DOM.drawerOverlay.addEventListener("click", () => toggleMobileDrawer(false));

  // Close drawer when clicking mobile nav links
  DOM.mobileNavLinks.forEach(link => {
    link.addEventListener("click", () => {
      toggleMobileDrawer(false);
    });
  });

  // Booking Form Submission -> WhatsApp Pre-filled message
  if (DOM.bookingForm) {
    DOM.bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("bookName").value.trim();
      const phone = document.getElementById("bookPhone").value.trim();
      const guests = document.getElementById("bookGuests").value;
      const time = document.getElementById("bookTime").value.trim();
      const note = document.getElementById("bookNote").value.trim();

      const bookingMessage =
        `🍽️ *NEW TABLE RESERVATION / INQUIRY*
---------------------------------------
• Guest Name: ${name}
• Contact: ${phone}
• Party Size: ${guests}
• Date & Time: ${time}
${note ? `• Special Notes: ${note}` : ""}
---------------------------------------
Please confirm table availability. Thank you!`;

      const url = createWhatsAppUrl(bookingMessage);
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }

  // Footer dish links: opens matching dish directly in modal
  DOM.footerDishLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const dishName = link.getAttribute("data-dish");
      const matched = MENU_ITEMS.find(item => item.name.toLowerCase() === dishName.toLowerCase());
      if (matched) {
        setCategoryFilter("all");
        openProductModal(matched);
      }
    });
  });

  // Dynamic Year
  if (DOM.currentYear) {
    DOM.currentYear.textContent = new Date().getFullYear();
  }
}

// ===================================================================
// 10. INITIALIZATION
// ===================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderMenuProducts();
  setupEventListeners();
  console.log("The Royal Saffron Restaurant Template Initialized Successfully.");
});
