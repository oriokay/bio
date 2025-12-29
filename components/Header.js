class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <nav class="container nav-container">
                    <a href="/" class="logo">
                        <i class="fas fa-dna"></i>
                        BioÉdu
                    </a>
                    
                    <button class="mobile-menu-btn" id="mobileMenuBtn">
                        <i class="fas fa-bars"></i>
                    </button>
                    
                    <ul class="nav-links" id="navLinks">
                    // In the nav-links section, add:
                        <li><a href="annees-universitaires.html" class="nav-link">
                            <i class="fas fa-graduation-cap"></i> Années Universitaires</a></li>
                        <li><a href="/" class="nav-link active">Accueil</a></li>
                        <li><a href="#themes" class="nav-link">Thèmes</a></li>
                        <li><a href="#quiz" class="nav-link">Quiz</a></li>
                        <li><a href="#examens" class="nav-link">Examens</a></li>
                        <li><a href="#contact" class="nav-link">Contact</a></li>
                        <li><a href="#login" class="nav-link">Connexion</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}

customElements.define('site-header', Header);

// Inject header into the page
document.addEventListener('DOMContentLoaded', () => {
    const headerContainer = document.getElementById('header');
    if (headerContainer) {
        headerContainer.innerHTML = `<site-header></site-header>`;
        
        // Add mobile menu functionality
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');
        
        if (mobileMenuBtn && navLinks) {
            mobileMenuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
                    ? '<i class="fas fa-times"></i>' 
                    : '<i class="fas fa-bars"></i>';
            });
            
            // Close menu when clicking on a link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                });
            });
        }
    }
});
