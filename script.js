// Main JavaScript file for BioÉdu website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initSmoothScroll();
    initTopicCards();
    initQuizSystem();
    initExamTabs();
    initAnimations();
});

// Smooth scrolling for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Load and display topic cards
async function initTopicCards() {
    const topics = [
        {
            id: 1,
            icon: 'fas fa-microscope',
            title: 'Biologie Cellulaire',
            description: 'Structure et fonction des cellules, membranes cellulaires, organites.',
            lessons: 24,
            color: '#10b981'
        },
        {
            id: 2,
            icon: 'fas fa-dna',
            title: 'Génétique',
            description: 'ADN, hérédité, mutations, biotechnologies modernes.',
            lessons: 18,
            color: '#059669'
        },
        {
            id: 3,
            icon: 'fas fa-leaf',
            title: 'Écologie',
            description: 'Écosystèmes, chaînes alimentaires, environnement et développement durable.',
            lessons: 15,
            color: '#065f46'
        },
        {
            id: 4,
            icon: 'fas fa-heart',
            title: 'Physiologie Animale',
            description: 'Systèmes digestif, nerveux, circulatoire et respiratoire.',
            lessons: 22,
            color: '#dc2626'
        },
        {
            id: 5,
            icon: 'fas fa-virus',
            title: 'Microbiologie',
            description: 'Bactéries, virus, champignons et immunologie.',
            lessons: 16,
            color: '#7c3aed'
        },
        {
            id: 6,
            icon: 'fas fa-frog',
            title: 'Évolution',
            description: 'Théories de l\'évolution, sélection naturelle et diversité biologique.',
            lessons: 12,
            color: '#ea580c'
        }
    ];

    const container = document.getElementById('topics-container');
    if (!container) return;

    container.innerHTML = topics.map(topic => `
        <div class="topic-card" data-topic-id="${topic.id}">
            <div class="topic-icon" style="background-color: ${topic.color}20; color: ${topic.color};">
                <i class="${topic.icon}"></i>
            </div>
            <h3>${topic.title}</h3>
            <p>${topic.description}</p>
            <div class="topic-meta">
                <span class="lesson-count">
                    <i class="fas fa-book"></i> ${topic.lessons} cours
                </span>
            </div>
            <a href="/topic/${topic.id}" class="topic-btn">
                Explorer <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    `).join('');
}

// Initialize quiz system
function initQuizSystem() {
    const quizCards = document.querySelectorAll('.quiz-card');
    quizCards.forEach(card => {
        card.addEventListener('click', function() {
            const quizTitle = this.querySelector('h3').textContent;
            alert(`Démarrage du quiz: ${quizTitle}\n\n(Cette fonctionnalité sera bientôt disponible!)`);
        });
    });
}

// Initialize exam tabs
function initExamTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const examContent = document.getElementById('exam-content');

    const examData = {
        bac: `
            <h3>Baccalauréat Algérien</h3>
            <ul>
                <li><a href="#">Bac 2023 - Sciences Expérimentales</a></li>
                <li><a href="#">Bac 2022 - Sciences Expérimentales</a></li>
                <li><a href="#">Bac 2021 - Sciences Expérimentales</a></li>
                <li><a href="#">Bac 2020 - Sciences Expérimentales</a></li>
                <li><a href="#">Sujets Type Bac</a></li>
            </ul>
        `,
        universite: `
            <h3>Université Algérienne</h3>
            <ul>
                <li><a href="#">1ère Année Médecine</a></li>
                <li><a href="#">1ère Année Biologie</a></li>
                <li><a href="#">2ème Année Médecine</a></li>
                <li><a href="#">2ème Année Biologie</a></li>
            </ul>
        `,
        concours: `
            <h3>Concours</h3>
            <ul>
                <li><a href="#">Concours Médecine 2023</a></li>
                <li><a href="#">Concours Pharmacie 2023</a></li>
                <li><a href="#">Concours Dentaire 2023</a></li>
            </ul>
        `
    };

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get tab type
            const tabType = this.getAttribute('data-tab');
            
            // Update content
            if (examContent && examData[tabType]) {
                examContent.innerHTML = examData[tabType];
            }
        });
    });

    // Initialize with first tab active
    if (tabButtons.length > 0 && examContent) {
        const firstTab = tabButtons[0].getAttribute('data-tab');
        examContent.innerHTML = examData[firstTab];
    }
}

// Initialize animations
function initAnimations() {
    // Add intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    document.querySelectorAll('section, .topic-card, .quiz-card').forEach(el => {
        observer.observe(el);
    });
}

// Add animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
