document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const notification = document.getElementById('notification');
    const closeButton = document.getElementById('close-notification');

    // Function to check if at least one checkbox is selected
    function checkCheckboxes() {
        const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;

        // If no checkboxes are checked, revert the last unchecked checkbox and show notification
        if (checkedCount === 0) {
            this.checked = true; // Re-check the checkbox
            showNotification(); // Show the notification
        }
    }

    // Function to show the notification
    function showNotification() {
        notification.classList.remove('hidden'); // Ensure it's not hidden
        setTimeout(() => {
            notification.classList.add('show'); // Add show class to display the notification after a short delay
        }, 10); // Small delay to allow the display to take effect
    }

    // Attach change event listener to each checkbox
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', function() {
            // Check if this checkbox is being unchecked
            if (!this.checked) {
                checkCheckboxes.call(this); // Call the check function
            }
        });
    });

    // Close notification button event listener
    closeButton.addEventListener('click', function() {
        notification.classList.remove('show'); // Remove show class to hide the notification
        setTimeout(() => {
            notification.classList.add('hidden'); // Add hidden class after transition
        }, 500); // Match the duration of the transition
    });
});

// Validate form on submission
function validateForm() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const isChecked = Array.from(checkboxes).some(cb => cb.checked); // Check if at least one checkbox is checked

    // If no checkbox is checked, alert the user and prevent form submission
    if (!isChecked) {
        alert("Please select at least one service before submitting the form.");
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}