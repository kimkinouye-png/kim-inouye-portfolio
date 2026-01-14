// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') {
            // Scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }
        
        const target = document.querySelector(targetId);
        if (target) {
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Dark mode toggle - wait for DOM to be ready
function initDarkModeToggle() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (!darkModeToggle) return;
    
    const toggleIcon = darkModeToggle.querySelector('.toggle-icon');
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Initialize theme on page load
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            if (toggleIcon) {
                toggleIcon.innerHTML = '<span class="toggle-option">Dark</span> <span class="toggle-separator">|</span> <span class="toggle-option active">Light</span>';
            }
        } else {
            document.body.classList.remove('dark-mode');
            if (toggleIcon) {
                toggleIcon.innerHTML = '<span class="toggle-option active">Dark</span> <span class="toggle-separator">|</span> <span class="toggle-option">Light</span>';
            }
        }
    }
    
    // Apply initial theme
    applyTheme(currentTheme);
    
    // Add click event listener
    darkModeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const isCurrentlyDark = document.body.classList.contains('dark-mode');
        const newTheme = isCurrentlyDark ? 'light' : 'dark';
        
        // Apply new theme
        applyTheme(newTheme);
        
        // Save theme preference
        localStorage.setItem('theme', newTheme);
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDarkModeToggle);
} else {
    // DOM is already ready
    initDarkModeToggle();
}

// Print resume functionality
const printResume = document.getElementById('printResume');
if (printResume) {
    printResume.addEventListener('click', function() {
        // Ensure we're in light mode for printing
        const wasDark = document.body.classList.contains('dark-mode');
        if (wasDark) {
            document.body.classList.remove('dark-mode');
        }
        
        // Trigger print dialog
        window.print();
        
        // Restore dark mode if it was on
        if (wasDark) {
            document.body.classList.add('dark-mode');
        }
    });
}
