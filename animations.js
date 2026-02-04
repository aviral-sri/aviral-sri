// animations.js - Premium Designer-Level Interactions (Optimized)
// Timing constants (designer rules)
const TIMING = {
    micro: 150,
    textReveal: 750,
    sectionTransition: 1000,
    backgroundLoop: 90000
};

// ==========================================
// 1. LIVING BACKGROUND - Smooth Gradient Drift
// ==========================================
class LivingBackground {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.id = 'living-bg';
        this.time = 0;
        this.animationId = null;
        this.init();
    }

    init() {
        this.canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            opacity: 0.7;
        `;
        document.body.insertBefore(this.canvas, document.body.firstChild);
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    animate() {
        this.time += 0.0002; // Ultra slow (feels like 90s loop)

        const centerX = this.canvas.width * (0.7 + Math.sin(this.time * 0.4) * 0.12);
        const centerY = this.canvas.height * (0.25 + Math.cos(this.time * 0.3) * 0.1);

        const gradient = this.ctx.createRadialGradient(
            centerX, centerY, 0,
            this.canvas.width * 0.5, this.canvas.height * 0.5,
            this.canvas.width * 0.9
        );

        // Smooth alpha oscillation
        const alpha1 = 0.06 + Math.sin(this.time * 2) * 0.015;
        const alpha2 = 0.025 + Math.cos(this.time * 1.5) * 0.01;

        gradient.addColorStop(0, `rgba(0, 255, 136, ${alpha1})`);
        gradient.addColorStop(0.4, `rgba(0, 212, 255, ${alpha2})`);
        gradient.addColorStop(1, 'transparent');

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.animationId = requestAnimationFrame(() => this.animate());
    }
}

// ==========================================
// 2. STATUS INDICATOR - Organic Breathing
// ==========================================
class BreathingDot {
    constructor(element) {
        this.element = element;
        const indicator = element.closest('.status-indicator');
        this.statusText = indicator ? indicator.querySelector('.status-text') : null;
        this.originalText = 'Available for opportunities';
        this.altText = 'Currently building edge systems';
        this.init();
    }

    init() {
        this.breathe();

        const indicator = this.element.closest('.status-indicator');
        if (indicator && this.statusText) {
            indicator.addEventListener('mouseenter', () => {
                this.statusText.style.opacity = '0';
                setTimeout(() => {
                    this.statusText.textContent = this.altText;
                    this.statusText.style.opacity = '1';
                }, 120);
            });

            indicator.addEventListener('mouseleave', () => {
                this.statusText.style.opacity = '0';
                setTimeout(() => {
                    this.statusText.textContent = this.originalText;
                    this.statusText.style.opacity = '1';
                }, 120);
            });
        }
    }

    breathe() {
        const pulse = () => {
            const interval = 1800 + Math.random() * 1200; // 1.8-3s irregular

            this.element.style.transition = 'transform 500ms ease-out, box-shadow 500ms ease-out';
            this.element.style.transform = 'scale(1.25)';
            this.element.style.boxShadow = '0 0 14px rgba(0, 255, 136, 0.7)';

            setTimeout(() => {
                this.element.style.transform = 'scale(1)';
                this.element.style.boxShadow = '0 0 6px rgba(0, 255, 136, 0.4)';
            }, 500);

            setTimeout(pulse, interval);
        };

        setTimeout(pulse, 800);
    }
}

// ==========================================
// 3. SCROLL CHOREOGRAPHY
// ==========================================
class ScrollChoreographer {
    constructor() {
        this.init();
    }

    init() {
        this.observeSectionHeaders();
        this.observeCards();
    }

    observeSectionHeaders() {
        const headers = document.querySelectorAll('.section-header');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, { threshold: 0.15, rootMargin: '-40px' });

        headers.forEach(header => {
            header.classList.add('scroll-reveal');
            observer.observe(header);
        });
    }

    observeCards() {
        const cardSelectors = '.project-card, .repo-card, .linkedin-post, .achievement-item, .skill-category';

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('card-revealed')) {
                    const siblings = Array.from(entry.target.parentElement.children);
                    const index = siblings.indexOf(entry.target);
                    const delay = index * 60; // 60ms stagger

                    setTimeout(() => {
                        entry.target.classList.add('card-revealed');
                    }, delay);
                }
            });
        }, { threshold: 0.08, rootMargin: '-20px' });

        document.querySelectorAll(cardSelectors).forEach(card => {
            card.classList.add('card-hidden');
            observer.observe(card);
        });
    }
}

// ==========================================
// 4. LINKEDIN POSTS ENHANCER
// ==========================================
class LinkedInEnhancer {
    constructor() {
        this.observeContainer();
    }

    observeContainer() {
        const container = document.getElementById('linkedin-posts');
        if (!container) return;

        const observer = new MutationObserver(() => this.enhancePosts());
        observer.observe(container, { childList: true });

        setTimeout(() => this.enhancePosts(), 400);
    }

    enhancePosts() {
        document.querySelectorAll('.linkedin-post').forEach(post => {
            if (post.dataset.enhanced) return;
            post.dataset.enhanced = 'true';

            const arrow = document.createElement('span');
            arrow.className = 'post-arrow';
            arrow.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
            post.appendChild(arrow);
        });
    }
}

// ==========================================
// 5. GITHUB GRAPH ANIMATION
// ==========================================
class GitHubGraphAnimator {
    constructor() {
        this.observeGraph();
    }

    observeGraph() {
        const graphImg = document.getElementById('github-graph');
        if (!graphImg) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !graphImg.dataset.animated) {
                    graphImg.dataset.animated = 'true';
                    this.animateGraph(graphImg);
                }
            });
        }, { threshold: 0.25 });

        observer.observe(graphImg);
    }

    animateGraph(img) {
        img.style.clipPath = 'inset(0 100% 0 0)';
        img.style.transition = 'clip-path 1.8s cubic-bezier(0.16, 1, 0.3, 1)';

        requestAnimationFrame(() => {
            img.style.clipPath = 'inset(0 0% 0 0)';
        });
    }
}

// ==========================================
// 6. PROCESSOR CURSOR WITH BINARY TRAIL
// ==========================================
class ProcessorCursor {
    constructor() {
        this.particles = [];
        this.mouseX = 0;
        this.mouseY = 0;
        this.targetX = 0;
        this.targetY = 0;
        this.isOverInteractive = false;
        this.lastSpawnTime = 0;
        this.spawnInterval = 50;
        this.canvas = null;
        this.ctx = null;
        this.cursorEl = null;
        this.init();
    }

    init() {
        // Hide default cursor
        document.body.style.cursor = 'none';

        // Create processor cursor element
        this.cursorEl = document.createElement('div');
        this.cursorEl.id = 'processor-cursor';
        this.cursorEl.innerHTML = `
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <rect x="8" y="8" width="8" height="8" rx="1" />
                <line x1="12" y1="1" x2="12" y2="4" />
                <line x1="12" y1="20" x2="12" y2="23" />
                <line x1="1" y1="12" x2="4" y2="12" />
                <line x1="20" y1="12" x2="23" y2="12" />
                <line x1="7" y1="1" x2="7" y2="4" />
                <line x1="17" y1="1" x2="17" y2="4" />
                <line x1="7" y1="20" x2="7" y2="23" />
                <line x1="17" y1="20" x2="17" y2="23" />
                <line x1="1" y1="7" x2="4" y2="7" />
                <line x1="1" y1="17" x2="4" y2="17" />
                <line x1="20" y1="7" x2="23" y2="7" />
                <line x1="20" y1="17" x2="23" y2="17" />
            </svg>
        `;
        this.cursorEl.style.cssText = `
            position: fixed;
            pointer-events: none;
            z-index: 10000;
            color: #00ff88;
            transform: translate(-50%, -50%);
            transition: transform 0.1s ease-out, color 0.2s ease;
            filter: drop-shadow(0 0 8px rgba(0, 255, 136, 0.5));
        `;
        document.body.appendChild(this.cursorEl);

        // Create canvas for binary trail
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'binary-trail';
        this.canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 9998;
        `;
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        this.resize();
        window.addEventListener('resize', () => this.resize());

        // Track mouse with smooth following
        document.addEventListener('mousemove', (e) => {
            this.targetX = e.clientX;
            this.targetY = e.clientY;
        });

        // Track interactive elements
        const interactives = 'a, button, .hero-link, .project-card, .repo-card, .linkedin-post, .skill-tag, .status-indicator';

        document.querySelectorAll(interactives).forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.isOverInteractive = true;
                this.spawnInterval = 15;
                this.cursorEl.style.transform = 'translate(-50%, -50%) scale(1.3) rotate(45deg)';
                this.cursorEl.style.color = '#00d4ff';
                this.cursorEl.style.filter = 'drop-shadow(0 0 12px rgba(0, 212, 255, 0.7))';
            });
            el.addEventListener('mouseleave', () => {
                this.isOverInteractive = false;
                this.spawnInterval = 50;
                this.cursorEl.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)';
                this.cursorEl.style.color = '#00ff88';
                this.cursorEl.style.filter = 'drop-shadow(0 0 8px rgba(0, 255, 136, 0.5))';
            });
        });

        // Also hide cursor on all elements
        const style = document.createElement('style');
        style.textContent = `
            *, *::before, *::after { cursor: none !important; }
            @media (hover: none) {
                *, *::before, *::after { cursor: auto !important; }
                #processor-cursor, #binary-trail { display: none !important; }
            }
        `;
        document.head.appendChild(style);

        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    spawnParticle() {
        // Don't spawn particles when hovering over interactive elements
        if (this.isOverInteractive) return;

        const now = Date.now();
        if (now - this.lastSpawnTime < this.spawnInterval) return;
        this.lastSpawnTime = now;

        const offsetX = (Math.random() - 0.5) * 15;
        const offsetY = (Math.random() - 0.5) * 15;

        this.particles.push({
            x: this.mouseX + offsetX,
            y: this.mouseY + offsetY,
            char: Math.random() > 0.5 ? '1' : '0',
            opacity: 0.5,
            size: 10,
            vx: (Math.random() - 0.5) * 0.8,
            vy: Math.random() * 1 + 0.5,
            life: 1,
            decay: 0.03
        });

        if (this.particles.length > 80) {
            this.particles = this.particles.slice(-60);
        }
    }

    animate() {
        // Smooth cursor following
        this.mouseX += (this.targetX - this.mouseX) * 0.15;
        this.mouseY += (this.targetY - this.mouseY) * 0.15;

        // Update cursor position
        this.cursorEl.style.left = this.mouseX + 'px';
        this.cursorEl.style.top = this.mouseY + 'px';

        // Clear and draw trail
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.spawnParticle();

        this.particles = this.particles.filter(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.life -= p.decay;
            p.opacity = p.life * 0.5;

            if (p.life <= 0) return false;

            this.ctx.save();
            this.ctx.font = `${p.size}px 'JetBrains Mono', monospace`;
            this.ctx.fillStyle = p.char === '1'
                ? `rgba(0, 255, 136, ${p.opacity})`
                : `rgba(0, 212, 255, ${p.opacity})`;
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(p.char, p.x, p.y);
            this.ctx.restore();

            return true;
        });

        requestAnimationFrame(() => this.animate());
    }
}

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Core systems
    new LivingBackground();
    new ScrollChoreographer();
    new LinkedInEnhancer();
    new GitHubGraphAnimator();
    new ProcessorCursor();

    // Status dot breathing
    const dot = document.querySelector('.dot');
    if (dot) new BreathingDot(dot);

    // Remove static processor icon from hero (it's now the cursor)
    const staticProcessor = document.querySelector('.processor-icon');
    if (staticProcessor) {
        staticProcessor.style.display = 'none';
    }
});
