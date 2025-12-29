// components/footer.js
class FooterComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">
                <div class="container">
                    <div class="footer-content">
                        <div class="footer-section">
                            <h3>BioÉdu</h3>
                            <p>Plateforme éducative gratuite de biologie pour les étudiants algériens.</p>
                            <div class="social-icons">
                                <a href="#" title="Facebook">
                                    <span>📘</span>
                                </a>
                                <a href="#" title="YouTube">
                                    <span>📺</span>
                                </a>
                                <a href="#" title="Instagram">
                                    <span>📸</span>
                                </a>
                                <a href="#" title="Email">
                                    <span>✉️</span>
                                </a>
                            </div>
                        </div>
                        
                        <div class="footer-section">
                            <h3>Liens Rapides</h3>
                            <ul class="footer-links">
                                <li><a href="index.html">Accueil</a></li>
                                <li><a href="themes.html">Thèmes</a></li>
                                <li><a href="quiz.html">Quiz</a></li>
                                <li><a href="examens.html">Examens</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-section">
                            <h3>Niveaux</h3>
                            <ul class="footer-links">
                                <li><a href="themes.html#year1">1ère Année</a></li>
                                <li><a href="themes.html#year2">2ème Année</a></li>
                                <li><a href="themes.html#year3">3ème Année</a></li>
                                <li><a href="examens.html">Baccalauréat</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-section">
                            <h3>Contact</h3>
                            <p>Pour les étudiants algériens, par des passionnés de biologie.</p>
                            <p>© ${new Date().getFullYear()} BioÉdu. Tous droits réservés.</p>
                        </div>
                    </div>
                    
                    <div class="footer-bottom">
                        <p>Conçu avec ❤️ pour l'éducation en Algérie</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('site-footer', FooterComponent);

// Initialize footer
document.addEventListener('DOMContentLoaded', function() {
    const footerContainer = document.getElementById('footer');
    if (footerContainer) {
        footerContainer.innerHTML = '<site-footer></site-footer>';
    }
});
