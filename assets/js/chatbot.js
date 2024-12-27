// // Wait for the DOM to be ready before running the script
// document.addEventListener("DOMContentLoaded", function () {

//     // Define chatbot elements
//     const chatbotPopup = document.getElementById("chatbot-popup");
//     const chatbotButton = document.getElementById("chatbot-button");
//     const closeBtn = document.getElementById("close-chatbot");
//     const sendBtn = document.getElementById("send-message");
//     const inputField = document.getElementById("chatbot-input");
//     const messageContainer = document.getElementById("message-container");

//     // Delay for showing the chatbot popup (5 seconds)
//     setTimeout(() => {
//         chatbotPopup.style.display = "block"; // Show the popup after 5 seconds
//     }, 5000);

//     // Toggle the chatbot popup when the button is clicked
//     chatbotButton.addEventListener("click", () => {
//         chatbotPopup.style.display = "block";
//     });

//     // Close the chatbot when the close button is clicked
//     closeBtn.addEventListener("click", () => {
//         chatbotPopup.style.display = "none";
//     });

//     // Display message in the chatbot
//     function displayMessage(message, sender) {
//         const messageElement = document.createElement("div");
//         messageElement.classList.add("chat-message", sender);

//         // Add message text
//         const messageText = document.createElement("p");
//         messageText.textContent = message;
//         messageElement.appendChild(messageText);

//         // Append message to container
//         messageContainer.appendChild(messageElement);
//         messageContainer.scrollTop = messageContainer.scrollHeight; // Scroll to the bottom
//     }

//     // Send message when 'Enter' key is pressed
//     inputField.addEventListener("keydown", function (event) {
//         if (event.key === "Enter" && inputField.value.trim() !== "") {
//             // Display user message
//             displayMessage(inputField.value, "user");

//             // Simulate bot response after a short delay
//             setTimeout(() => {
//                 // Simulate a bot thinking message
//                 displayMessage("Bot is thinking...", "bot");
//                 setTimeout(() => {
//                     // Replace with your bot logic or AI integration
//                     displayMessage("This is a placeholder response from Quantum Bytech Bot.", "bot");
//                 }, 1000);
//             }, 1000);

//             // Clear the input field
//             inputField.value = "";
//         }
//     });

//     // Send message when the 'Send' button is clicked
//     sendBtn.addEventListener("click", () => {
//         if (inputField.value.trim() !== "") {
//             // Display user message
//             displayMessage(inputField.value, "user");

//             // Simulate bot response after a short delay
//             setTimeout(() => {
//                 // Simulate a bot thinking message
//                 displayMessage("Bot is thinking...", "bot");
//                 setTimeout(() => {
//                     // Replace with your bot logic or AI integration
//                     displayMessage("This is a placeholder response from Quantum Bytech Bot.", "bot");
//                 }, 1000);
//             }, 1000);

//             // Clear the input field
//             inputField.value = "";
//         }
//     });

// });
