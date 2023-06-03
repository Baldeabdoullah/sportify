<?php
include "header.html"

?>

<!-- CONTACTE -->

<section id="CONTACTE">
    <h1 class="contacte-title">Contacte</h1>
    <div class="contacte-container">

        <div class="contacte">

            <div class="footer-item contacte-item ">

                <ul>
                    <li>
                        <i class="fa-solid fa-location-dot"></i>
                        <p>Plateau, rue 14</p>
                    </li>
                    <li>
                        <i class="fa-solid fa-phone"></i>
                        <p>+221 678 99 00</p>
                    </li>

                    <li>
                        <i class="fa-regular fa-envelope"></i>
                        <p>infos@sportify.com</p>
                    </li>
                </ul>
            </div>

        </div>


        <div class="contacte-formulaire">
            <form action="">
                <div class="form">
                    <input type="text" name="nom" placeholder="Nom & Prenom">
                    <input type="email" placeholder="email">
                    <input type="number" placeholder="numero">
                    <input type="text" placeholder="objet">
                    <textarea name="" id="" rows="10" placeholder="Message"></textarea>
                </div>

            </form>

            <button class="submit" type="submit">Envoyer</button>
        </div>
    </div>

</section>

<!--FOOTER -->

<?php
include "footer.html"
?>

<script src="main.js"></script>
</body>

</html>