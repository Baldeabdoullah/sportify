<?php
include "header.html"
?>

<!-- LES PRODUITS -->
<section id="PRODUITS">
    <h1 class="produits-title">Nos Produits</h1>

    <div class="recherche">
        <input type="search" id="search-input" placeholder="Chercher un produit">
        <button id="search"> <i class="fa-solid fa-magnifying-glass "></i> </button>
    </div>

    <div class="produits-buttons">
        <button class="button" type="button" data-id="tout">Tout</button>
        <button class="button" type="button" data-id="chaussure">Chaussures</button>
        <button class="button" type="button" data-id="shirt">Shirts</button>
        <button class="button" type="button" data-id="sac">Sacs</button>
        <button class="button" type="button" data-id="parfum">Parfums</button>
        <button class="button" type="button" data-id="cosmetique">Cosmetique</button>
        <button class="button" type="button" data-id="montrebijou">Montres & Bijoux</button>

    </div>


    <!-- les produits et les details -->

    <div class="produit-container  ">



    </div>

</section>

<!-- image preview modal -->
<div id="preview-modal-overlay">
    <div id="preview-box">
        <span id="modal-close-btn">
            <i class="fas fa-times"></i>
        </span>
        <img src="" alt="" class="image-modal">
        <h4 class="titre-modal"></h4>
        <h5 class="prix-modal"></h5>
        <p class="description-modal"></p>

        <div class="produits-buttons">
            <button class=" button-modal" type="button">Ajouter au Panier</button>

        </div>
    </div>
</div>

<!-- AJOUTER AU PANIER -->

<section id="PANIER">

    <h2 class="panier-titre">Mon Panier</h2>

    <div class="panier-container total">


        <!-- <div class="panier-produit">
            <img src="./vetements/shirt5.webp" alt="" class="panier-image">
            <h3 class="panier-titre">Lacoste Sport Air</h3>
            <p class="panier-prix">46000 FCFA</p>
            <input type="number" value="1" class="panier-nombre">
            <i class="fa-solid fa-trash fa-2x btn-remove"></i>
        </div>

        <div class="panier-produit">
            <img src="./images/nike2.jpg" alt="" class="panier-image">
            <h3 class="panier-titre">Nike Sport</h3>
            <p class="panier-prix">60000 FCFA</p>
            <input type="number" value="1" class="panier-nombre">
            <i class="fa-solid fa-trash fa-2x btn-remove"></i>
        </div> -->

    </div>


    <div class="validation-commande">

        <div class="total-carte">
            <strong class="total-carte-titre">Total</strong>
            <span class="total-carte-prix">0</span>
        </div>

        <button class="boutton-commande" type="button">Valider la commande</button>

    </div>

</section>





<!--FOOTER -->

<?php
include "footer.html"
?>

<script src="main.js"></script>
</body>

</html>