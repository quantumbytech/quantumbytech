document.addEventListener('DOMContentLoaded', function() {
    const notification = document.getElementById('deviceNotification');
    const closeButton = document.getElementById('closeNotification');

    // Function to show the notification only on small devices
    function showNotification() {
        const windowWidth = window.innerWidth;
        if (windowWidth < 768) { // Only show on small devices
            notification.classList.remove('hidden'); // Ensure it's not hidden
            setTimeout(() => {
                notification.classList.add('show'); // Add show class to display the notification after a short delay
            }, 10); // Small delay to allow the display to take effect
        }
    }

    // Call the function to show the notification
    showNotification();

    // Close notification button event listener
    closeButton.addEventListener('click', function() {
        notification.classList.remove('show'); // Remove show class to hide the notification
        setTimeout(() => {
            notification.classList.add('hidden'); // Add hidden class after transition
        }, 500); // Match the duration of the transition
    });
});