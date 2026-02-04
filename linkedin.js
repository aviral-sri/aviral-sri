// linkedin.js - LinkedIn posts loader (manual fallback)

async function loadLinkedInPosts() {
    const container = document.getElementById('linkedin-posts');
    container.innerHTML = '<p style="color: var(--text-muted); font-family: var(--font-mono); font-size: 14px;">Loading posts...</p>';

    try {
        const response = await fetch('linkedin_posts.json');

        if (!response.ok) {
            throw new Error('Failed to load posts');
        }

        const posts = await response.json();

        container.innerHTML = '';

        if (posts.length === 0) {
            container.innerHTML = `
                <div style="padding: 32px; text-align: center; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 12px;">
                    <p style="color: var(--text-secondary);">No posts yet. Check back soon!</p>
                </div>
            `;
            return;
        }

        posts.forEach(post => {
            const postCard = document.createElement('a');
            postCard.className = 'linkedin-post';
            postCard.href = post.url;
            postCard.target = '_blank';
            postCard.rel = 'noopener noreferrer';

            postCard.innerHTML = `
                <h4 class="post-title">${post.title}</h4>
                <small class="post-date">${formatDate(post.date)}</small>
            `;

            container.appendChild(postCard);
        });

    } catch (error) {
        console.error('Error loading LinkedIn posts:', error);
        container.innerHTML = `
            <div style="padding: 32px; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 12px;">
                <p style="color: var(--text-secondary); margin-bottom: 12px;">
                    Featured posts will appear here soon.
                </p>
                <p style="color: var(--text-muted); font-size: 14px;">
                    To add posts, update <code style="background: var(--bg-tertiary); padding: 2px 6px; border-radius: 4px;">data/linkedin_posts.json</code>
                </p>
            </div>
        `;
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadLinkedInPosts();
});
