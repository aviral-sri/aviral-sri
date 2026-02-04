// github.js - GitHub API integration

async function loadGitHubData() {
    const profile = await getGitHubProfile();

    // Load contribution graph
    loadContributionGraph(profile.username);

    // Load repositories
    loadRepositories(profile.username);
}

async function getGitHubProfile() {
    try {
        const response = await fetch('profile.json');
        const data = await response.json();
        return { username: data.github };
    } catch (error) {
        console.error('Error loading GitHub profile:', error);
        return { username: 'aviral-srivastava26' }; // fallback
    }
}

function loadContributionGraph(username) {
    const graphImg = document.getElementById('github-graph');

    // Using GitHub Chart service (no API key needed)
    graphImg.src = `https://ghchart.rshah.org/00ff88/${username}`;
    graphImg.alt = `${username}'s GitHub Contributions`;

    // Alternative option (uncomment to use):
    // graphImg.src = `https://github-readme-activity-graph.vercel.app/graph?username=${aviral-sri}&theme=react-dark&hide_border=true&bg_color=0a0e12&color=00ff88&line=00d4ff&point=00ff88`;
}

async function loadRepositories(username) {
    const container = document.getElementById('github-stats');
    container.innerHTML = '<p style="color: var(--text-muted); font-family: var(--font-mono); font-size: 14px;">Loading repositories...</p>';

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);

        if (!response.ok) {
            throw new Error(`GitHub API returned ${response.status}`);
        }

        const repos = await response.json();

        // Filter out forks and sort by stars
        const filteredRepos = repos
            .filter(repo => !repo.fork)
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 6); // Show top 6 repos

        container.innerHTML = '';

        if (filteredRepos.length === 0) {
            container.innerHTML = '<p style="color: var(--text-muted);">No repositories found.</p>';
            return;
        }

        filteredRepos.forEach(repo => {
            const repoCard = document.createElement('div');
            repoCard.className = 'repo-card';

            const description = repo.description
                ? repo.description
                : 'No description available';

            const language = repo.language
                ? `<span>📝 ${repo.language}</span>`
                : '';

            const stars = repo.stargazers_count > 0
                ? `<span>⭐ ${repo.stargazers_count}</span>`
                : '';

            const forks = repo.forks_count > 0
                ? `<span>🔱 ${repo.forks_count}</span>`
                : '';

            repoCard.innerHTML = `
                <h4 class="repo-name">${repo.name}</h4>
                <p class="repo-description">${description}</p>
                <div class="repo-stats">
                    ${language}
                    ${stars}
                    ${forks}
                </div>
                <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="repo-link">
                    View Repository →
                </a>
            `;

            container.appendChild(repoCard);
        });

    } catch (error) {
        console.error('Error loading GitHub repositories:', error);
        container.innerHTML = `
            <div style="padding: 24px; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 8px;">
                <p style="color: var(--text-secondary); margin-bottom: 12px;">
                    Unable to load repositories. This might be due to:
                </p>
                <ul style="color: var(--text-muted); font-size: 14px; margin-left: 20px;">
                    <li>GitHub API rate limiting</li>
                    <li>Network connectivity issues</li>
                    <li>Incorrect username in profile.json</li>
                </ul>
                <p style="color: var(--text-secondary); margin-top: 12px;">
                    <a href="https://github.com/${username}" target="_blank" rel="noopener noreferrer" 
                       style="color: var(--accent-primary); text-decoration: none;">
                        Visit GitHub Profile →
                    </a>
                </p>
            </div>
        `;
    }
}

// Initialize GitHub data on page load
document.addEventListener('DOMContentLoaded', () => {
    loadGitHubData();
});
