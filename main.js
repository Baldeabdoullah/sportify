// les slides carousel
const slides = document.querySelectorAll(".slide");
const prevbtn = document.querySelector("#prev");
const nextbtn = document.querySelector("#next");
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextEvent = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");

  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }
};

const prevEvent = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");

  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    slides[slides.length - 1].classList.add("current");
  }
};

prevbtn.addEventListener("click", (e) => {
  prevEvent();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextEvent, intervalTime);
  }
});

nextbtn.addEventListener("click", (e) => {
  nextEvent();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextEvent, intervalTime);
  }
});

if (auto) {
  slideInterval = setInterval(nextEvent, intervalTime);
}

// le menu

const menubtn = document.querySelector(".toogle-menu");

const Detail = document.querySelector(".detail");

menubtn.addEventListener("click", () => {
  Detail.classList.toggle("open");
});

// console.log(preveiwContainer);
// console.log(previewBox);

// pour selectionner la cathegorie des produits

const menu = [
  {
    id: "1",
    titre: "Lacoste Sport Air",
    prix: 46000,
    cathegorie: "shirt",
    image: "./vetements/shirt5.webp",
    description:
      "T-shirt Lacoste Blanc disponinle en plusieurs tailles( L, XL, XX); Nos produits sont disponibles et livrables partout en afrique avec un paiement en ligne ou à la livraison selon votre choix",
  },

  {
    id: "2",
    titre: "Nike Sport",
    prix: 60000,
    cathegorie: "chaussure",
    image: "./images/nike2.jpg",

    description:
      "Nike Sport couleure noir; pour les sportifs amateurs et professionelles disponinle en toutes les tailles; Nos produits sont disponibles et livrables partout en afrique avec un paiement en ligne ou à la livraison selon votre choix",
  },

  {
    id: "3",
    titre: "Puma Pro",
    prix: 28000,
    cathegorie: "chaussure",
    image: "./images/puma2.jpg",

    description:
      "Puma Pro couleure blanche; pour les sportifs amateurs et professionelles disponinle en toutes les tailles; Nos produits sont disponibles et livrables partout en afrique avec un paiement en ligne ou à la livraison selon votre choix",
  },

  {
    id: "4",
    titre: "Adidas",
    prix: 42000,
    cathegorie: "chaussure",
    image: "./images/adidas.jpg",
    description:
      "Chaussure adidas rouge; pour les sportifs amateurs et professionelles disponinle en toutes les tailles; Nos produits sont disponibles et livrables partout en afrique avec un paiement en ligne ou à la livraison selon votre choix",
  },

  {
    id: "5",
    titre: "Adidas Next Gen",
    prix: 70000,
    cathegorie: "chaussure",
    image: "./images/adidas2.jpg",
    description:
      "Adidas Next Gen; pour les sportifs amateurs et professionelles disponinle en toutes les tailles; Nos produits sont disponibles et livrables partout en afrique avec un paiement en ligne ou à la livraison selon votre choix",
  },

  {
    id: "6",
    titre: "Nike Sport plus",
    prix: 49000,
    cathegorie: "chaussure",
    image: "./images/puma3.jpg",
    description:
      "Nike Sport Plus couleure blanche. Chaussur légère et souple pour les sportifs amateurs et professionelles disponinle en toutes les tailles; Nos produits sont disponibles et livrables partout en afrique avec un paiement en ligne ou à la livraison selon votre choix",
  },

  {
    id: "7",
    titre: "Nike Aero",
    prix: 39000,
    cathegorie: "chaussure",
    image: "./images/nike3.jpg",
    description:
      "Nike Aero pour les sportifs amateurs et professionelles disponinle en toutes les tailles; Nos produits sont disponibles et livrables partout en afrique avec un paiement en ligne ou à la livraison selon votre choix",
  },

  {
    id: "8",
    titre: "Nike Next Gen",
    prix: 59000,
    cathegorie: "chaussure",
    image: "./images/nike.jpg",
    description:
      "Nike Next Gen pour les sportifs amateurs et professionelles disponinle en toutes les tailles; Nos produits sont disponibles et livrables partout en afrique avec un paiement en ligne ou à la livraison selon votre choix",
  },

  {
    id: "9",
    titre: "Puma Next Gen",
    prix: 69000,
    cathegorie: "chaussure",
    image: "./images/puma.jpg",
    description:
      "Puma Next Gen pour les sportifs amateurs et professionelles disponinle en toutes les tailles; Nos produits sont disponibles et livrables partout en afrique avec un paiement en ligne ou à la livraison selon votre choix",
  },

  {
    id: "10",
    titre: "T-shirt moulant Noir",
    prix: 30000,
    cathegorie: "shirt",
    image: "./vetements/shirt.png",
    description:
      "T-shirt Moulant Noir disponinle en plusieurs tailles( L, XL, XX); Nos produits sont disponibles et livrables partout en afrique avec un paiement en ligne ou à la livraison selon votre choix",
  },

  {
    id: "11",
    titre: "T-shirt Rouge",
    prix: 29000,
    cathegorie: "shirt",
    image: "./vetements/shirt2.png",
    description:
      "T-shirt Rouge disponinle en plusieurs tailles( L, XL, XX); Nos produits sont disponibles et livrables partout en afrique avec un paiement en ligne ou à la livraison selon votre choix",
  },

  {
    id: "12",
    titre: "T-shirt moulant Blanc",
    prix: 40000,
    cathegorie: "shirt",
    image: "./vetements/shirt3.png",
    description:
      "T-shirt Rouge disponinle en plusieurs tailles( L, XL, XX); Nos produits sont disponibles et livrables partout en afrique avec un paiement en ligne ou à la livraison selon votre choix",
  },

  {
    id: "13",
    titre: "T-shirt sport",
    prix: 27000,
    cathegorie: "shirt",
    image: "./vetements/shirt6.jpg",
    description:
      "T-shirt Sport disponinle en plusieurs tailles( L, XL, XX); Nos produits sont disponibles et livrables partout en afrique avec un paiement en ligne ou à la livraison selon votre choix",
  },

  {
    id: "14",
    titre: "Adidas Lox",
    prix: 35000,
    cathegorie: "chaussure",
    image: "./images/adidas3.jpg",
    description:
      "Adidas Lox pour les sportifs amateurs et professionelles disponinle en toutes les tailles; Nos produits sont disponibles et livrables partout en afrique avec un paiement en ligne ou à la livraison selon votre choix",
  },

  {
    id: "15",
    titre: "Adidas Dred",
    prix: 45000,
    cathegorie: "chaussure",
    image: "./images/adidas4.jpg",
    description:
      "Adidas Dred pour les sportifs amateurs et professionelles disponinle en toutes les tailles; Nos produits sont disponibles et livrables partout en afrique avec un paiement en ligne ou à la livraison selon votre choix",
  },

  {
    id: "16",
    titre: "Adidas Max",
    prix: 55000,
    cathegorie: "chaussure",
    image: "./images/adidas5.jpg",
    description:
      "Adidas Max pour les sportifs amateurs et professionelles disponinle en toutes les tailles; Nos produits sont disponibles et livrables partout en afrique avec un paiement en ligne ou à la livraison selon votre choix",
  },

  {
    id: "17",
    titre: "Puma Next Gen",
    prix: 35000,
    cathegorie: "chaussure",
    image: "./images/puma4.jpg",
    description:
      "Puma Next Gen pour les sportifs amateurs et professionelles disponinle en toutes les tailles; Nos produits sont disponibles et livrables partout en afrique avec un paiement en ligne ou à la livraison selon votre choix",
  },

  {
    id: "18",
    titre: "Puma Lox",
    prix: 45000,
    cathegorie: "chaussure",
    image: "./images/puma5.jpg",
    description:
      "Puma Lox pour les sportifs amateurs et professionelles disponinle en toutes les tailles; Nos produits sont disponibles et livrables partout en afrique avec un paiement en ligne ou à la livraison selon votre choix",
  },

  {
    id: "19",
    titre: "Nike Star",
    prix: 35000,
    cathegorie: "chaussure",
    image: "./images/nike4.jpg",
    description:
      "Nike Star pour les sportifs amateurs et professionelles disponinle en toutes les tailles; Nos produits sont disponibles et livrables partout en afrique avec un paiement en ligne ou à la livraison selon votre choix",
  },

  {
    id: "20",
    titre: "Nike Svelte",
    prix: 45000,
    cathegorie: "chaussure",
    image: "./images/nike5.jpg",
    description:
      "Nike Svelte pour les sportifs amateurs et professionelles disponinle en toutes les tailles; Nos produits sont disponibles et livrables partout en afrique avec un paiement en ligne ou à la livraison selon votre choix",
  },

  {
    id: "21",
    titre: "Nike Hedge",
    prix: 55000,
    cathegorie: "chaussure",
    image: "./images/nike6.jpg",
    description:
      "Nike Hedge pour les sportifs amateurs et professionelles disponinle en toutes les tailles; Nos produits sont disponibles et livrables partout en afrique avec un paiement en ligne ou à la livraison selon votre choix",
  },

  {
    id: "22",
    titre: "Nike Prime",
    prix: 45000,
    cathegorie: "chaussure",
    image: "./images/nike7.jpg",
    description:
      "Nike Prime pour les sportifs amateurs et professionelles disponinle en toutes les tailles; Nos produits sont disponibles et livrables partout en afrique avec un paiement en ligne ou à la livraison selon votre choix",
  },
  {
    id: "23",
    titre: "Boss",
    prix: 15000,
    cathegorie: "parfum",
    image: "./parfum/parfum1.jpg",
    description:
      "Parfum Pour Homme Hugo Boss H24 extraordinairement concentrée avec une fraicheure inégalée; au saveures de menthe et de citron. ",
  },

  {
    id: "24",
    titre: "Essential",
    prix: 17000,
    cathegorie: "parfum",
    image: "./parfum/parfum2.jpg",
    description:
      "Parfum Essentials H24 extraordinairement concentrée avec une fraicheure inégalée; au saveures de menthe et de citron. ",
  },

  {
    id: "25",
    titre: "Skin",
    prix: 10000,
    cathegorie: "parfum",
    image: "./parfum/parfum3.jpg",
    description:
      "Parfum Skin H24 extraordinairement concentrée avec une fraicheure inégalée; au saveures de menthe et de citron. ",
  },

  {
    id: "26",
    titre: "Bleu de Channel",
    prix: 10000,
    cathegorie: "parfum",
    image: "./parfum/parfum4.jpg",
    description:
      "Parfum Bleu de Channel H24 extraordinairement concentrée avec une fraicheure inégalée; au saveures de menthe et de citron. ",
  },

  {
    id: "27",
    titre: " Channel",
    prix: 10000,
    cathegorie: "parfum",
    image: "./parfum/parfum5.jpg",
    description:
      "Parfum Channel extraordinairement concentrée avec une fraicheure inégalée; au saveures de menthe et de citron. ",
  },

  {
    id: "28",
    titre: " Amber",
    prix: 12000,
    cathegorie: "parfum",
    image: "./parfum/parfum6.jpg",
    description:
      "Parfum Amber extraordinairement concentrée avec une fraicheure inégalée; au saveures de menthe et de citron. ",
  },

  {
    id: "29",
    titre: " Orchid",
    prix: 14000,
    cathegorie: "parfum",
    image: "./parfum/parfum7.jpg",
    description:
      "Parfum Orchid H24 extraordinairement concentrée avec une fraicheure inégalée; au saveures de menthe et de citron. ",
  },

  {
    id: "30",
    titre: " Sac à main maron",
    prix: 13000,
    cathegorie: "sac",
    image: "./cuir/sacuir1.jpg",
    name: "p-30",
    description:
      "Sac à main maron en cuir. Sac Cuir maron vernis - Notre coup de coeur, cette nouvelle collection de sacs à main en cuir griffée Jacques ESTEREL des sacs de vie, avec de beaux volume. ",
  },

  {
    id: "31",
    titre: " Sac à main gris",
    prix: 9000,
    cathegorie: "sac",
    image: "./cuir/sacuir2.jpg",
    description:
      "Sac à main gris en cuir. Sac Cuir gris vernis - Notre coup de coeur, cette nouvelle collection de sacs à main en cuir griffée Jacques ESTEREL des sacs de vie, avec de beaux volume. ",
  },

  {
    id: "32",
    titre: " Sac en cuir noir",
    prix: 22000,
    cathegorie: "sac",
    image: "./cuir/sacuir3.jpg",
    description:
      "Sac à main noir en cuir. Sac Cuir noir vernis - Notre coup de coeur, cette nouvelle collection de sacs à main en cuir griffée Jacques ESTEREL des sacs de vie, avec de beaux volume. ",
  },
  {
    id: "33",
    titre: " Soulier Maron",
    prix: 12000,
    cathegorie: "chaussure",
    image: "./cuir/soulier1.jpg",
    description: "Chaussure en cuir pour homme. ",
  },

  {
    id: "34",
    titre: " Soulier en Cuir",
    prix: 29000,
    cathegorie: "chaussure",
    image: "./cuir/soulier2.jpg",
    description: "Chaussure en cuir pour homme. ",
  },

  {
    id: "35",
    titre: " Maucassin Noir",
    prix: 20000,
    cathegorie: "chaussure",
    image: "./cuir/soulier3.jpg",
    description: "Chaussure en cuir pour homme. ",
  },

  {
    id: "36",
    titre: " Soulier Noir",
    prix: 14000,
    cathegorie: "chaussure",
    image: "./cuir/soulier4.jpg",
    description: "Chaussure en cuir pour homme. ",
  },

  {
    id: "37",
    titre: " Soulier Vert",
    prix: 19000,
    cathegorie: "chaussure",
    image: "./cuir/soulier5.jpg",
    description: "Chaussure en cuir pour homme. ",
  },

  {
    id: "38",
    titre: " Soulier cuir Noir",
    prix: 30000,
    cathegorie: "chaussure",
    image: "./cuir/soulier6.jpg",
    description: "Chaussure en cuir pour homme. ",
  },
  {
    id: "39",
    titre: " Soin anti-taches",
    prix: 3000,
    cathegorie: "cosmetique",
    image: "./cosmetique/antitache.jpg",
    description:
      "Paummade de soin anti-tache contre la depigmentation de la peau ",
  },

  {
    id: "40",
    titre: " Crème",
    prix: 4000,
    cathegorie: "cosmetique",
    image: "./cosmetique/creme.jpg",
    description:
      "Creme anti-age contre les rides et les cernes. Evite la fatigue de la peau. ",
  },

  {
    id: "41",
    titre: " Soin du visage",
    prix: 3500,
    cathegorie: "cosmetique",
    image: "./cosmetique/cremvisage.jpg",
    description: "Soin du visage contre les impuretés de la peau",
  },

  {
    id: "42",
    titre: " Anti-dartre",
    prix: 2500,
    cathegorie: "cosmetique",
    image: "./cosmetique/dartre.jpg",
    description:
      "Anti-dartre. contre les dartres et les champignons de la peau",
  },

  {
    id: "43",
    titre: " Demelant",
    prix: 1500,
    cathegorie: "cosmetique",
    image: "./cosmetique/demelant.jpg",
    description: "Demelant anti-sèche cheveux",
  },

  {
    id: "44",
    titre: " Shampoing",
    prix: 1500,
    cathegorie: "cosmetique",
    image: "./cosmetique/shampoing.jpg",
    description: "Shampoing au citron naturelle",
  },

  {
    id: "45",
    titre: " Shampoing Hévéa",
    prix: 2500,
    cathegorie: "cosmetique",
    image: "./cosmetique/shampoingnaturel.jpg",
    description: "Shampoing naturel à l'Hévéa",
  },

  {
    id: "46",
    titre: " Soin de peau",
    prix: 3500,
    cathegorie: "cosmetique",
    image: "./cosmetique/soinpeau.jpg",
    description: "créme soin de peau anti-age",
  },

  {
    id: "47",
    titre: " Soin du visage",
    prix: 3500,
    cathegorie: "cosmetique",
    image: "./cosmetique/soinvisage.jpg",
    description: "pommade pour le traitement ds bouttons du visages",
  },

  {
    id: 48,
    titre: "Audemart",
    prix: 50000,
    cathegorie: "montrebijou",
    image: "./montrebijou/audemart.jpg",
    description: "Montre Audemart Piguet",
  },

  {
    id: 49,
    titre: "Cartier",
    prix: 70000,
    cathegorie: "montrebijou",
    image: "./montrebijou/cartier.jpg",
    description: "Montre Cartier",
  },

  {
    id: 50,
    titre: "Gucci",
    prix: 200000,
    cathegorie: "montrebijou",
    image: "./montrebijou/gucci.jpg",
    description: "Montre gucci",
  },

  {
    id: 51,
    titre: "Guren",
    prix: 100000,
    cathegorie: "montrebijou",
    image: "./montrebijou/guren.jpg",
    description: "Montre de luxe guren",
  },

  {
    id: 52,
    titre: "Guren",
    prix: 100000,
    cathegorie: "montrebijou",
    image: "./montrebijou/guren2.jpg",
    description: "Montre de luxe guren",
  },

  {
    id: 53,
    titre: "Mont Blanc",
    prix: 80000,
    cathegorie: "montrebijou",
    image: "./montrebijou/montblanc.jpg",
    description: "Montre Mont Blanc",
  },

  {
    id: 54,
    titre: "Mont Blanc",
    prix: 85000,
    cathegorie: "montrebijou",
    image: "./montrebijou/montblanc2.jpg",
    description: "Montre Mont Blanc",
  },

  {
    id: 55,
    titre: "Mont Blanc",
    prix: 95000,
    cathegorie: "montrebijou",
    image: "./montrebijou/montblanc3.jpg",
    description: "Montre Mont Blanc",
  },

  {
    id: 56,
    titre: "Mont Blanc",
    prix: 95000,
    cathegorie: "montrebijou",
    image: "./montrebijou/montblanc4.jpg",
    description: "Montre Mont Blanc",
  },

  {
    id: 57,
    titre: "Mont Blanc",
    prix: 95000,
    cathegorie: "montrebijou",
    image: "./montrebijou/montblanc5.jpg",
    description: "Montre Mont Blanc",
  },

  {
    id: 58,
    titre: "Police",
    prix: 95000,
    cathegorie: "montrebijou",
    image: "./montrebijou/police.jpg",
    description: "Montre Police contour en cuire",
  },

  {
    id: 59,
    titre: "Rochel",
    prix: 90000,
    cathegorie: "montrebijou",
    image: "./montrebijou/rochel.jpg",
    description: "Montre de luxe Rochel contour en cuir",
  },
];

// on selectionne le contenu des produits et les bouttons

var Contenu = document.querySelector(".produit-container");
const BUTTONS = document.querySelectorAll(".button");

// affichage des produits au chargement de la page
window.addEventListener("DOMContentLoaded", function () {
  DisplayElement(menu);
});

// les cathegories

BUTTONS.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const data = e.currentTarget.dataset.id;
    const Cathegorie = menu.filter(function (MenuCathegorie) {
      if (MenuCathegorie.cathegorie === data) {
        return MenuCathegorie;
      }
    });

    if (data === "tout") {
      DisplayElement(menu);
    } else {
      DisplayElement(Cathegorie);
    }
  });
});

//  On afficher les elements

function DisplayElement(menu) {
  let DisplayMenu = menu.map(function (item) {
    return ` 
 
    <div class="vente-item " data-name="${item.name}">
                <div class="vente-img">
                    <img src="${item.image}" alt="" class="shop-item-image" >
                    <div class="accueil-icone">
                       <i class="fa-solid fa-bag-shopping"></i> 
                      <a ><i class="fa-regular fa-eye popup-btn"></i></a>
                    </div>
                </div>
            
                <div class="vente-body">
                    <div class="ventes-text">
                        <h3 class="product-name">${item.titre}</h3>
                        <p class="product-price">${item.prix} FCFA</p>
                    </div>

                   
                    <h4 class="description" > ${item.description}
                    
                      </h4>
                     
                </div>
            </div> `;
  });
  DisplayMenu = DisplayMenu.join("");

  Contenu.innerHTML = DisplayMenu;
}

//Pour rechercher un produit
document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  const cards = document.querySelectorAll(".vente-item");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.toLowerCase().includes(searchInput.toLowerCase())) {
      cards[index].style.display = "block";
    } else {
      cards[index].style.display = "none";
    }
  });
});

// affichons les produits en details

const allMeals = document.querySelector(".produit-container");
// console.log(allMeals);
const previewModalOverlay = document.getElementById("preview-modal-overlay");
const modalCloseBtn = document.getElementById("modal-close-btn");

allMeals.addEventListener("click", showMealImg);

modalCloseBtn.addEventListener("click", () => {
  previewModalOverlay.style.display = "none";
});

function showMealImg(e) {
  let mealDiv;
  if (e.target.classList.contains("fa-eye")) {
    mealDiv = e.target.parentElement.parentElement.parentElement;
    // mealDiv est vente-img
  } else {
    mealDiv = e.target;
  }

  previewModalOverlay.querySelector("img").src =
    mealDiv.querySelector("img").src;

  // pour la description dans le modal
  previewModalOverlay.querySelector("p").textContent =
    mealDiv.parentElement.querySelector("h4").textContent;
  // le parent de mealDiv est vente-item

  // pour le titre du produit dans le modal
  previewModalOverlay.querySelector("h4").textContent =
    mealDiv.parentElement.querySelector("h3").textContent;

  // pour le prix du produits dans le modal
  previewModalOverlay.querySelector("h5").textContent =
    mealDiv.parentElement.querySelector("p").textContent;

  previewModalOverlay.style.display = "block";
}

// AJOUTER AU PANIER

// on selectionne le sac

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  var removeCartItemButtons = document.getElementsByClassName("btn-remove");
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];

    button.addEventListener("click", removeCartItem);
  }

  var quantityInputs = document.getElementsByClassName("panier-nombre");

  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];

    input.addEventListener("change", quantityChanged);
  }

  const addToCartButtons = document.getElementsByClassName("button-modal");
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];

    button.addEventListener("click", addToCartClicked);
  }
}

function purchaseClicked() {
  alert("Merci d'avoir fait confiance à Sportify");
  var cartItems = document.getElementsByClassName("panier-container")[0];

  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCartTotal();
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function addToCartClicked(e) {
  var button = e.target;
  var shopItem = button.parentElement.parentElement.parentElement;
  var title = shopItem.getElementsByClassName("titre-modal")[0].innerText;
  var price = shopItem.getElementsByClassName("prix-modal")[0].innerText;
  var imageSrc = shopItem.getElementsByClassName("image-modal")[0].src;
  addItemToCart(title, price, imageSrc);
  updateCartTotal();

  // seulement si il y'a des produits dans le panier
  document
    .getElementsByClassName("boutton-commande")[0]
    .addEventListener("click", purchaseClicked);
}

function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("panier-produit");
  var cartItems = document.getElementsByClassName("panier-container")[0];

  var cartItemNames = cartItems.getElementsByClassName("panier-titre");
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert("Element déja ajouté");
      return;
    }
  }
  var cartRowContents = `
        <img src="${imageSrc}" alt="" class="panier-image">
        <h3 class="panier-titre">${title}</h3>
        <p class="panier-prix">${price}</p>
        <input type="number" value="1" class="panier-nombre">
        <i class="fa-solid fa-trash fa-2x btn-remove">
        </i>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.appendChild(cartRow);
  cartRow
    .getElementsByClassName("btn-remove")[0]
    .addEventListener("click", removeCartItem);
  cartRow
    .getElementsByClassName("panier-nombre")[0]
    .addEventListener("change", quantityChanged);
}

function updateCartTotal() {
  var cartItemContainer =
    document.getElementsByClassName("panier-container")[0];
  var cartRows = cartItemContainer.getElementsByClassName("panier-produit");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("panier-prix")[0];
    var quantityElement = cartRow.getElementsByClassName("panier-nombre")[0];
    var price = parseFloat(priceElement.innerText.replace("FCFA", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("total-carte-prix")[0].innerText =
    total + "FCFA";
}

// deuxieme click

// const ProduitContain = document.querySelector(".produit-container");
// const children = ProduitContain.children;
// console.log(children);

const produitcontainer = document.querySelector(".produit-container");
// console.log(produitcontainer);

const monpanier = document.querySelector(".panier-container");
//console.log(monpanier);

produitcontainer.addEventListener("click", ajouterpanier);

function ajouterpanier(e) {
  let produitdiv;
  if (e.target.classList.contains("fa-bag-shopping")) {
    produitdiv = e.target.parentElement.parentElement.parentElement;
    // mealDiv est vente-img
  } else {
    produitdiv = e.target;
  }

  console.log(produitdiv);

  var title = produitdiv.querySelector("h3").innerText;
  console.log(title);
  var price = produitdiv.querySelector("p").innerText;
  console.log(price);
  var imageSrc = produitdiv.querySelector("img").src;
  console.log(imageSrc);

  var produit = document.createElement("div");
  produit.classList.add("panier-produit");
  var produitcontent = `
   <img src="${imageSrc}" alt="" class="panier-image">
        <h3 class="panier-titre">${title}</h3>
        <p class="panier-prix">${price}</p>
        <input type="number" value="1" class="panier-nombre">
        <i class="fa-solid fa-trash fa-2x btn-remove">
        </i>`;

  produit.innerHTML = produitcontent;
  monpanier.appendChild(produit);
  // POUR QUE LE MONTANT DU PANIER SE METTE A JOUR AUTOMATIQUEMENT
  updateCartTotal();

  // deuxieme fonction de  suppression d'element

  var removeCartItemButtons = document.getElementsByClassName("btn-remove");
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    console.log(button);

    button.addEventListener("click", removeCartItem);
  }

  function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateCartTotal();
  }

  // Deuxieme fonction de modification des quantite
  var quantityInputs = document.getElementsByClassName("panier-nombre");

  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];

    input.addEventListener("change", quantityChanged);
  }

  function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updateCartTotal();
  }

  // DEUXIEME FONCTION POUR METTRE LE TOTAL A JOUR
  function updateCartTotal() {
    var cartRows = monpanier.getElementsByClassName("panier-produit");
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i];
      var priceElement = cartRow.getElementsByClassName("panier-prix")[0];
      var quantityElement = cartRow.getElementsByClassName("panier-nombre")[0];
      var price = parseFloat(priceElement.innerText.replace("FCFA", ""));
      var quantity = quantityElement.value;
      total = total + price * quantity;
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("total-carte-prix")[0].innerText =
      total + "FCFA";
  }
}
