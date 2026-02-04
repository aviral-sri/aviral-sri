// main.js - Profile and Projects loader

// Load profile data
async function loadProfile() {
    try {
        const response = await fetch('profile.json');
        const profile = await response.json();

        // Update hero section
        document.getElementById('hero-name').textContent = profile.name;
        document.getElementById('hero-tagline').textContent = profile.tagline;
        document.getElementById('hero-location').textContent = `📍 ${profile.location}`;

        // Update links
        const githubLink = document.getElementById('github-link');
        const linkedinLink = document.getElementById('linkedin-link');

        githubLink.href = `https://github.com/${profile.github}`;
        linkedinLink.href = `https://www.linkedin.com/in/${profile.linkedin}`;

        return profile;
    } catch (error) {
        console.error('Error loading profile:', error);
        // Fallback values
        document.getElementById('hero-name').textContent = 'Aviral Srivastava';
        document.getElementById('hero-tagline').textContent = 'ML • Computer Vision • Edge AI';
        document.getElementById('hero-location').textContent = '📍 Ghaziabad, India';
    }
}

// Load projects
async function loadProjects() {
    try {
        const response = await fetch('projects.json');
        const projects = await response.json();

        const container = document.getElementById('projects-container');
        container.innerHTML = '';

        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';

            const tagsHTML = project.tags.map(tag =>
                `<span class="project-tag">${tag}</span>`
            ).join('');

            const githubLinkHTML = project.github ?
                `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">
                    View on GitHub →
                </a>` : '';

            projectCard.innerHTML = `
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">${tagsHTML}</div>
                ${githubLinkHTML}
            `;

            container.appendChild(projectCard);
        });
    } catch (error) {
        console.error('Error loading projects:', error);
        document.getElementById('projects-container').innerHTML =
            '<p style="color: var(--text-muted);">Projects coming soon...</p>';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', async () => {
    await loadProfile();
    await loadProjects();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
