class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="container">
                    <div class="footer-content">
                        <div class="footer-section">
                            <h3>BioÉdu</h3>
                            <p>Plateforme éducative gratuite de biologie pour les étudiants algériens.</p>
                            <div class="social-icons">
                                <a href="#"><i class="fab fa-facebook"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-youtube"></i></a>
                            </div>
                        </div>
                        
                        <div class="footer-section">
                            <h3>Liens Rapides</h3>
                            <ul class="footer-links">
                                <li><a href="/">Accueil</a></li>
                                <li><a href="#themes">Thèmes</a></li>
                                <li><a href="#quiz">Quiz</a></li>
                                <li><a href="#examens">Examens</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-section">
                            <h3>Niveaux</h3>
                            <ul class="footer-links">
                                <li><a href="#bac">Terminale Sciences</a></li>
                                <li><a href="#universite">1ère Année Université</a></li>
                                <li><a href="#universite">2ème Année Université</a></li>
                                <li><a href="#concours">Préparation Concours</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-section">
                            <h3>Contact</h3>
                            <p><i class="fas fa-envelope"></i> contact@bioedu.dz</p>
                            <p><i class="fas fa-phone"></i> +213 XXX XX XX XX</p>
                            <p>Pour les étudiants algériens, par des passionnés de biologie.</p>
                        </div>
                    </div>
                    
                    <div class="footer-bottom">
                        <p>&copy; ${new Date().getFullYear()} BioÉdu. Tous droits réservés. | Conçu avec ❤️ pour l'éducation en Algérie</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('site-footer', Footer);

// Inject footer into the page
document.addEventListener('DOMContentLoaded', () => {
    const footerContainer = document.getElementById('footer');
    if (footerContainer) {
        footerContainer.innerHTML = `<site-footer></site-footer>`;
    }
});
