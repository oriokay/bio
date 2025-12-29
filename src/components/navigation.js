// components/navigation.js
class Navigation extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar">
                <div class="nav-container">
                    <a href="index.html" class="logo">
                        <div class="logo-icon">🧬</div>
                        <span>BioÉdu</span>
                    </a>
                    
                    <button class="mobile-menu-btn" id="mobileMenuBtn">
                        <span class="menu-icon">☰</span>
                    </button>
                    
                    <ul class="nav-links" id="navLinks">
                        <li><a href="index.html" class="nav-link" id="nav-home">
                            <span>🏠</span> Accueil
                        </a></li>
                        <li><a href="themes.html" class="nav-link" id="nav-themes">
                            <span>📚</span> Thèmes
                        </a></li>
                        <li><a href="quiz.html" class="nav-link" id="nav-quiz">
                            <span>🧩</span> Quiz
                        </a></li>
                        <li><a href="examens.html" class="nav-link" id="nav-examens">
                            <span>📝</span> Examens
                        </a></li>
                        <li><a href="contact.html" class="nav-link" id="nav-contact">
                            <span>📞</span> Contact
                        </a></li>
                        <li><a href="admin.html" class="nav-link" id="nav-admin">
                            <span></span> admin
                        </a></li>
                    </ul>
                </div>
            </nav>
        `;
    }
}

customElements.define('site-navigation', Navigation);

// Initialize navigation
document.addEventListener('DOMContentLoaded', function() {
    // Add navigation to page
    const navContainer = document.getElementById('navigation');
    if (navContainer) {
        navContainer.innerHTML = '<site-navigation></site-navigation>';
        
        // Set active nav link based on current page
        const currentPage = window.location.pathname.split('/').pop();
        const navLinks = {
            'index.html': 'nav-home',
            'themes.html': 'nav-themes',
            'quiz.html': 'nav-quiz',
            'examens.html': 'nav-examens',
            'contact.html': 'nav-contact'
        };
        
        if (navLinks[currentPage]) {
            const activeLink = document.getElementById(navLinks[currentPage]);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
        
        // Mobile menu functionality
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinksContainer = document.getElementById('navLinks');
        
        if (mobileMenuBtn && navLinksContainer) {
            mobileMenuBtn.addEventListener('click', function() {
                navLinksContainer.classList.toggle('active');
                mobileMenuBtn.querySelector('.menu-icon').textContent = 
                    navLinksContainer.classList.contains('active') ? '✕' : '☰';
            });
            
            // Close menu when clicking on a link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    navLinksContainer.classList.remove('active');
                    mobileMenuBtn.querySelector('.menu-icon').textContent = '☰';
                });
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', function(event) {
                if (!navLinksContainer.contains(event.target) && 
                    !mobileMenuBtn.contains(event.target) &&
                    navLinksContainer.classList.contains('active')) {
                    navLinksContainer.classList.remove('active');
                    mobileMenuBtn.querySelector('.menu-icon').textContent = '☰';
                }
            });
        }
    }
});
