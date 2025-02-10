document.addEventListener('DOMContentLoaded', () => {
    // Select all progress bars
    const progressBars = document.querySelectorAll('.progress-bar');

    // Function to trigger the width animation
    const animateProgressBar = (bar) => {
        const width = bar.getAttribute('data-width'); // Get target width
        bar.style.width = width; // Set the width to trigger animation
    };

    // Intersection Observer to detect when progress bars enter the viewport
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBar(entry.target); // Trigger animation
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, { threshold: 0.1 });

    // Observe each progress bar
    progressBars.forEach(bar => {
        observer.observe(bar);
    });
});
