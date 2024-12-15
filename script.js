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
        title: "GhostC OS",
        description: "A custom operating system kernel developed from scratch, demonstrating low-level system programming expertise. Features include basic memory management, process scheduling, and hardware interactions. This project showcases my passion for kernel development and systems programming.",
        technologies: ["C", "Assembly", "Operating Systems", "Kernel Development", "System Architecture"],
        features: [
            "Custom bootloader implementation",
            "Memory management system",
            "Basic process scheduling",
            "Hardware abstraction layer",
            "System calls implementation"
        ],
        image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "https://github.com/Anon23261/Official-ghostC-OS",
        category: "systems"
    },
    {
        title: "Network Scanner",
        description: "A robust network scanning tool built with security in mind. This tool demonstrates my understanding of network protocols and security principles, allowing for comprehensive network analysis and vulnerability assessment.",
        technologies: ["Python", "Networking", "Security", "Scapy", "Socket Programming"],
        features: [
            "Port scanning capabilities",
            "Network device discovery",
            "Service enumeration",
            "Basic vulnerability detection",
            "Network mapping"
        ],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "https://github.com/Anon23261/NetworkScanner",
        category: "security"
    },
    {
        title: "Mini Code Editor",
        description: "A lightweight code editor built as part of my full-stack development journey. Features syntax highlighting and basic text editing capabilities, demonstrating front-end development skills and UI/UX design principles.",
        technologies: ["JavaScript", "HTML", "CSS", "CodeMirror", "Web APIs"],
        features: [
            "Syntax highlighting",
            "Basic text editing",
            "File management",
            "Theme customization",
            "Keyboard shortcuts"
        ],
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "https://github.com/Anon23261/mini-code-editor",
        category: "fullstack"
    },
    {
        title: "C++ Learning Projects",
        description: "A collection of C++ projects demonstrating my progression in systems programming and algorithm implementation. These projects showcase my understanding of low-level programming concepts and data structures.",
        technologies: ["C++", "Data Structures", "Algorithms", "STL", "Memory Management"],
        features: [
            "Custom data structures",
            "Algorithm implementations",
            "Memory management examples",
            "Performance optimization",
            "Best practices demonstration"
        ],
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "https://github.com/Anon23261/Hello-World-C-",
        category: "systems"
    },
    {
        title: "Front-End Portfolio",
        description: "A showcase of my front-end development skills as part of my full-stack education. This project demonstrates my ability to create responsive, modern web interfaces with clean and maintainable code.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Web APIs"],
        features: [
            "Responsive layouts",
            "Modern CSS techniques",
            "Interactive components",
            "Performance optimization",
            "Cross-browser compatibility"
        ],
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "https://github.com/Anon23261/Hello-World-Front-End",
        category: "fullstack"
    },
    {
        title: "Weather Dashboard",
        description: "A full-stack weather application showcasing API integration, data visualization, and modern web development practices. Built as part of my full-stack development coursework.",
        technologies: ["React", "Node.js", "Express", "Weather API", "Chart.js"],
        features: [
            "Real-time weather data",
            "Interactive charts",
            "Location-based services",
            "Responsive design",
            "API integration"
        ],
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "https://github.com/Anon23261/Module6-Mini-Project",
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
        projectCard.className = 'project-card terminal-box';
        projectCard.innerHTML = `
            <div class="project-header">
                <h3>> ${project.title}</h3>
            </div>
            <img src="${project.image}" alt="${project.title}">
            <div class="project-content">
                <p>${project.description}</p>
                <h4>> Key Features:</h4>
                <ul>
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <h4>> Tech Stack:</h4>
                <div class="tech-stack">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <a href="${project.link}" class="btn primary" target="_blank">View Project <i class="fas fa-code-branch"></i></a>
            </div>
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
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Format the email body
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    // Update the mailto link with the formatted body
    this.action = `mailto:ghostsector@icloud.com?subject=Portfolio Contact from ${name}&body=${body}`;
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
