// Matrix Rain Animation
const canvas = document.getElementById('matrix-rain');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ'.split('');
const fontSize = 10;
const columns = canvas.width / fontSize;
const drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, .1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#64ffda';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
            drops[i] = 0;
        }
    }
}

setInterval(drawMatrix, 35);

// Project data
const projects = [
    {
        title: "Vulnerability Scanner Pro",
        description: "Enterprise-grade web application vulnerability scanner featuring automated penetration testing, detailed reporting, and compliance checking. Implements OWASP Top 10 security checks and CVE database integration.",
        technologies: ["Python", "Selenium", "SQLite", "OWASP ZAP API", "Docker"],
        features: [
            "Automated vulnerability assessment",
            "Custom security rule creation",
            "PDF report generation",
            "Real-time monitoring dashboard"
        ],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "https://github.com/Anon23261/vulnerability-scanner",
        category: "security"
    },
    {
        title: "SecureShop E-Commerce",
        description: "Full-stack e-commerce platform with advanced security features including fraud detection, secure payment processing, and PCI compliance. Implements OAuth2.0 and JWT for authentication.",
        technologies: ["React", "Node.js", "MongoDB", "Redis", "Stripe API", "Docker"],
        features: [
            "Role-based access control",
            "Real-time inventory tracking",
            "Secure payment processing",
            "Analytics dashboard"
        ],
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "https://github.com/Anon23261/secure-shop",
        category: "fullstack"
    },
    {
        title: "CryptoChat Messenger",
        description: "End-to-end encrypted messaging application with secure file sharing and self-destructing messages. Features military-grade encryption and zero-knowledge architecture.",
        technologies: ["Node.js", "Socket.io", "PostgreSQL", "AES-256", "WebRTC"],
        features: [
            "End-to-end encryption",
            "Secure file sharing",
            "Self-destructing messages",
            "Audit logging"
        ],
        image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "https://github.com/Anon23261/crypto-chat",
        category: "security"
    },
    {
        title: "DevSecOps Pipeline",
        description: "Automated CI/CD pipeline with integrated security scanning, dependency checking, and compliance monitoring. Includes custom security policies and automated remediation.",
        technologies: ["Jenkins", "Docker", "Kubernetes", "Terraform", "SonarQube"],
        features: [
            "Automated security testing",
            "Container security scanning",
            "Infrastructure as Code",
            "Compliance reporting"
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "https://github.com/Anon23261/devsecops-pipeline",
        category: "security"
    },
    {
        title: "Project Management System",
        description: "Enterprise project management platform with real-time collaboration, resource allocation, and advanced analytics. Features role-based access control and audit logging.",
        technologies: ["Vue.js", "Django", "PostgreSQL", "Redis", "Docker", "Celery"],
        features: [
            "Real-time collaboration",
            "Resource management",
            "Advanced analytics",
            "File versioning"
        ],
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "https://github.com/Anon23261/project-management",
        category: "fullstack"
    },
    {
        title: "AI-Powered Analytics Platform",
        description: "Full-stack analytics platform using machine learning for predictive insights and data visualization. Features real-time data processing and custom dashboard creation.",
        technologies: ["React", "Python", "TensorFlow", "PostgreSQL", "Redis", "Docker"],
        features: [
            "Predictive analytics",
            "Custom dashboards",
            "Data visualization",
            "Automated reporting"
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "https://github.com/Anon23261/analytics-platform",
        category: "fullstack"
    }
];

// Project filtering
let currentFilter = 'all';

function filterProjects(category) {
    currentFilter = category;
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = '';
    
    // Update active button state
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        }
    });
    
    const filteredProjects = category === 'all' 
        ? projects 
        : projects.filter(project => project.category === category);
    
    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'terminal-box project-card';
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" onerror="this.src='https://via.placeholder.com/300x200'">
            <h3>> ${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-features">
                <h4>> Key Features:</h4>
                <ul>
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            <div class="technologies">
                <h4>> Tech Stack:</h4>
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <a href="${project.link}" class="btn primary" target="_blank">View Project <i class="fas fa-external-link-alt"></i></a>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Typing animation
const typingText = document.querySelector('.typing-text');
if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();
}

// Populate projects with terminal-style cards
function populateProjects() {
    filterProjects('all');
}

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    alert('Message received. Establishing secure connection...');
    this.reset();
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize
window.addEventListener('load', () => {
    populateProjects();
});

// Resize handler for matrix animation
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
