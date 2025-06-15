// Professional Company Website - InsightLoop Global Data Consultancy
// Enhanced JavaScript for improved user experience

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Close mobile menu when clicking on a link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Enhanced Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Account for fixed navbar
            const targetPosition = target.offsetTop - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Professional Navbar Scroll Effect
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    if (navbar) {
        if (scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.boxShadow = '0 4px 20px rgba(15, 23, 42, 0.08)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.boxShadow = '0 1px 3px rgba(15, 23, 42, 0.05)';
        }
        
        // Hide/show navbar on scroll
        if (scrollY > lastScrollY && scrollY > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
    }
    
    lastScrollY = scrollY;
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -80px 0px'
};

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Specific animations for different elements
            if (entry.target.classList.contains('principle-card')) {
                animatePrincipleCard(entry.target);
            }
            
            if (entry.target.classList.contains('expertise-card')) {
                animateExpertiseCard(entry.target);
            }
            
            if (entry.target.classList.contains('testimonial-card')) {
                animateTestimonialCard(entry.target);
            }
            
            if (entry.target.classList.contains('contact-item')) {
                animateContactItem(entry.target);
            }
        }
    });
}, observerOptions);

// Observe elements for animations
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll(
        '.principle-card, .expertise-card, .testimonial-card, .contact-item, .country-flag'
    );
    
    elementsToAnimate.forEach(el => {
        animationObserver.observe(el);
    });
});

// Professional Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const start = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(target * easeOutCubic);
            
            counter.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        }
        
        requestAnimationFrame(updateCounter);
    });
}

// Hero Section Counter Observer
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroObserver.observe(heroSection);
}

// Global Showcase Interactions
document.addEventListener('DOMContentLoaded', function() {
    initializeGlobalShowcase();
    initializeScrollEffects();
    initializeCountryFlags();
    initializeContactMethods();
});

function initializeGlobalShowcase() {
    // Add hover effects to floating cards
    const floatingCards = document.querySelectorAll('.floating-card');
    floatingCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.05)';
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-3px) scale(1)';
            this.style.zIndex = '1';
        });
        
        // Add staggered entrance animation
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 + (index * 150));
    });
    
    // Enhanced logo animations
    const heroLogoAnimated = document.querySelector('.hero-logo-animated');
    if (heroLogoAnimated) {
        // Add gentle bounce effect to hero logo
        let bounceRotation = 0;
        setInterval(() => {
            bounceRotation += 0.05;
            const bounceY = Math.sin(bounceRotation) * 3;
            heroLogoAnimated.style.transform = `translateY(${bounceY}px)`;
        }, 100);
    }
    
    // Add hover effects to all animated logos
    const animatedLogos = document.querySelectorAll('.insightloop-logo, .hero-logo-animated, .footer-logo-animated');
    animatedLogos.forEach(logo => {
        logo.addEventListener('mouseenter', function() {
            const circles = this.querySelectorAll('.loop-circle');
            const dots = this.querySelectorAll('.dot');
            
            circles.forEach(circle => {
                circle.style.animationPlayState = 'paused';
            });
            
            dots.forEach(dot => {
                dot.style.animationDuration = '0.5s';
            });
        });
        
        logo.addEventListener('mouseleave', function() {
            const circles = this.querySelectorAll('.loop-circle');
            const dots = this.querySelectorAll('.dot');
            
            circles.forEach(circle => {
                circle.style.animationPlayState = 'running';
            });
            
            dots.forEach(dot => {
                dot.style.animationDuration = '2s';
            });
        });
    });
}

function initializeCountryFlags() {
    const countryFlags = document.querySelectorAll('.country-flag');
    countryFlags.forEach((flag, index) => {
        // Staggered animation on load
        setTimeout(() => {
            flag.style.opacity = '1';
            flag.style.transform = 'translateY(0)';
        }, index * 100);
        
        // Hover interactions
        flag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        flag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Animation Functions for New Elements
function animatePrincipleCard(card) {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 100);
}

function animateExpertiseCard(card) {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px) scale(0.95)';
    
    setTimeout(() => {
        card.style.transition = 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0) scale(1)';
        
        // Animate expertise items
        const items = card.querySelectorAll('.expertise-item');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, 200 + (index * 100));
        });
    }, 150);
}

function animateTestimonialCard(card) {
    card.style.opacity = '0';
    card.style.transform = 'translateX(-30px)';
    
    setTimeout(() => {
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        card.style.opacity = '1';
        card.style.transform = 'translateX(0)';
        
        // Add typing effect to testimonial text
        const quote = card.querySelector('blockquote');
        if (quote) {
            setTimeout(() => {
                quote.style.opacity = '1';
            }, 300);
        }
    }, 200);
}

function animateContactItem(item) {
    item.style.opacity = '0';
    item.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        item.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
    }, 100);
}

// Contact Methods Enhancement
function initializeContactMethods() {
    const contactMethods = document.querySelectorAll('.contact-method');
    
    contactMethods.forEach((method, index) => {
        // Staggered animation on load
        setTimeout(() => {
            method.style.opacity = '1';
            method.style.transform = 'translateY(0)';
        }, index * 200);
        
        // Enhanced hover effects
        method.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });
        
        method.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
}

// Enhanced Scroll Effects
function initializeScrollEffects() {
    createScrollProgress();
    addParallaxEffects();
    initializeTextRevealAnimations();
}

function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #00a8a8, #00d4aa);
        z-index: 10000;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

function addParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.hero-graphic, .global-showcase');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.2;
        
        parallaxElements.forEach(element => {
            element.style.transform = `translateY(${rate}px)`;
        });
    });
}

function initializeTextRevealAnimations() {
    const textElements = document.querySelectorAll('h1, h2, h3, .about-intro, .work-cta');
    
    textElements.forEach(element => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        // Initial state
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        
        observer.observe(element);
    });
}

// Performance optimizations
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add CSS animations for better performance
const styles = document.createElement('style');
styles.textContent = `
    .animate-in {
        animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .expertise-item {
        opacity: 0;
        transform: translateX(-20px);
        transition: all 0.3s ease;
    }
    
    .country-flag {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.4s ease;
    }
    
    .floating-card {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
`;
document.head.appendChild(styles);

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('InsightLoop Global Data Consultancy Website Loaded');
    });
} else {
    console.log('InsightLoop Global Data Consultancy Website Loaded');
} 