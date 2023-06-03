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

// pour selectionner la cathegorie des produits

const menu = [
  {
    id: "1",
    titre: "Lacoste Sport Air",
    prix: 46000,
    cathegorie: "shirt",
    image: "./vetements/shirt5.webp",
  },

  {
    id: "2",
    titre: "Nike Sport",
    prix: 60000,
    cathegorie: "chaussure",
    image: "./images/nike2.jpg",
  },

  {
    id: "3",
    titre: "Puma Pro",
    prix: 28000,
    cathegorie: "chaussure",
    image: "./images/puma2.jpg",
  },

  {
    id: "4",
    titre: "Adidas",
    prix: 42000,
    cathegorie: "chaussure",
    image: "./images/adidas.jpg",
  },

  {
    id: "5",
    titre: "Adidas Next Gen",
    prix: 70000,
    cathegorie: "chaussure",
    image: "./images/adidas2.jpg",
  },

  {
    id: "6",
    titre: "Nike Sport plus",
    prix: 49000,
    cathegorie: "chaussure",
    image: "./images/puma3.jpg",
  },

  {
    id: "7",
    titre: "Nike Aero",
    prix: 39000,
    cathegorie: "chaussure",
    image: "./images/nike3.jpg",
  },

  {
    id: "8",
    titre: "Nike Next Gen",
    prix: 59000,
    cathegorie: "chaussure",
    image: "./images/nike.jpg",
  },

  {
    id: "9",
    titre: "Puma Next Gen",
    prix: 69000,
    cathegorie: "chaussure",
    image: "./images/puma.jpg",
  },

  {
    id: "10",
    titre: "T-shirt moulant Noir",
    prix: 30000,
    cathegorie: "shirt",
    image: "./vetements/shirt.png",
  },

  {
    id: "11",
    titre: "T-shirt Rouge",
    prix: 29000,
    cathegorie: "shirt",
    image: "./vetements/shirt2.png",
  },

  {
    id: "12",
    titre: "T-shirt moulant Blanc",
    prix: 40000,
    cathegorie: "shirt",
    image: "./vetements/shirt3.png",
  },

  {
    id: "13",
    titre: "T-shirt sport",
    prix: 27000,
    cathegorie: "shirt",
    image: "./vetements/shirt6.jpg",
  },

  {
    id: "14",
    titre: "Adidas Lox",
    prix: 35000,
    cathegorie: "chaussure",
    image: "./images/adidas3.jpg",
  },

  {
    id: "15",
    titre: "Adidas Dred",
    prix: 45000,
    cathegorie: "chaussure",
    image: "./images/adidas4.jpg",
  },

  {
    id: "16",
    titre: "Adidas Max",
    prix: 55000,
    cathegorie: "chaussure",
    image: "./images/adidas5.jpg",
  },

  {
    id: "17",
    titre: "Puma Next Gen",
    prix: 35000,
    cathegorie: "chaussure",
    image: "./images/puma4.jpg",
  },

  {
    id: "18",
    titre: "Puma Lox",
    prix: 45000,
    cathegorie: "chaussure",
    image: "./images/puma5.jpg",
  },

  {
    id: "19",
    titre: "Nike Star",
    prix: 35000,
    cathegorie: "chaussure",
    image: "./images/nike4.jpg",
  },

  {
    id: "20",
    titre: "Nike Svelte",
    prix: 45000,
    cathegorie: "chaussure",
    image: "./images/nike5.jpg",
  },

  {
    id: "21",
    titre: "Nike Hedge",
    prix: 55000,
    cathegorie: "chaussure",
    image: "./images/nike6.jpg",
  },

  {
    id: "22",
    titre: "Nike Prime",
    prix: 45000,
    cathegorie: "chaussure",
    image: "./images/nike7.jpg",
  },
  {
    id: "23",
    titre: "Boss",
    prix: 15000,
    cathegorie: "parfum",
    image: "./parfum/parfum1.jpg",
  },

  {
    id: "24",
    titre: "Essential",
    prix: 17000,
    cathegorie: "parfum",
    image: "./parfum/parfum2.jpg",
  },

  {
    id: "25",
    titre: "Skin",
    prix: 10000,
    cathegorie: "parfum",
    image: "./parfum/parfum3.jpg",
  },

  {
    id: "26",
    titre: "Bleu de Channel",
    prix: 10000,
    cathegorie: "parfum",
    image: "./parfum/parfum4.jpg",
  },

  {
    id: "27",
    titre: " Channel",
    prix: 10000,
    cathegorie: "parfum",
    image: "./parfum/parfum5.jpg",
  },

  {
    id: "28",
    titre: " Amber",
    prix: 12000,
    cathegorie: "parfum",
    image: "./parfum/parfum6.jpg",
  },

  {
    id: "29",
    titre: " Orchid",
    prix: 14000,
    cathegorie: "parfum",
    image: "./parfum/parfum7.jpg",
  },

  {
    id: "30",
    titre: " Sac à main maron",
    prix: 13000,
    cathegorie: "sac",
    image: "./cuir/sacuir1.jpg",
  },

  {
    id: "31",
    titre: " Sac à main gris",
    prix: 9000,
    cathegorie: "sac",
    image: "./cuir/sacuir2.jpg",
  },

  {
    id: "32",
    titre: " Sac en cuir noir",
    prix: 22000,
    cathegorie: "sac",
    image: "./cuir/sacuir3.jpg",
  },
  {
    id: "33",
    titre: " Soulier Maron",
    prix: 12000,
    cathegorie: "chaussure",
    image: "./cuir/soulier1.jpg",
  },

  {
    id: "34",
    titre: " Soulier en Cuir",
    prix: 29000,
    cathegorie: "chaussure",
    image: "./cuir/soulier2.jpg",
  },

  {
    id: "35",
    titre: " Maucassin Noir",
    prix: 20000,
    cathegorie: "chaussure",
    image: "./cuir/soulier3.jpg",
  },

  {
    id: "36",
    titre: " Soulier Noir",
    prix: 14000,
    cathegorie: "chaussure",
    image: "./cuir/soulier4.jpg",
  },

  {
    id: "36",
    titre: " Soulier Vert",
    prix: 19000,
    cathegorie: "chaussure",
    image: "./cuir/soulier5.jpg",
  },

  {
    id: "37",
    titre: " Soulier cuir Noir",
    prix: 30000,
    cathegorie: "chaussure",
    image: "./cuir/soulier6.jpg",
  },
];

// on selectionne le contenu des produits et les bouttons

const Contenu = document.querySelector(".produit-container");
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
    return `   <div class="vente-item">
                <div class="vente-img">
                    <img src="${item.image}" alt="">
                    <div class="accueil-icone">
                        <i class="fa-solid fa-cart-shopping "></i>
                        <a href="#"><i class="fa-regular fa-eye"></i></a>
                    </div>
                </div>
            
                <div class="vente-body">
                    <div class="ventes-text">
                        <p class="product-name">${item.titre}</p>
                        <p>${item.prix} FCFA</p>
                    </div>
                </div>
            </div>`;
  });
  DisplayMenu = DisplayMenu.join("");

  Contenu.innerHTML = DisplayMenu;
}

//Pour rechercher un produit
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".vente-item");

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
