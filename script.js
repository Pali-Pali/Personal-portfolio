// Add this new function for contact form handling
function handleFormSubmit() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (name && email && message) {
        // Show confirmation (you could replace this with a nicer modal/alert)
        alert('Thank you for your message! I\'ll get back to you soon.');
        
        // Clear the form
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
    
    // Prevent actual form submission
    return false;
}


document.getElementById("chat-toggle").addEventListener("click", function() {
    const chatbox = document.getElementById("chatbox");
    chatbox.style.display = chatbox.style.display === "none" || chatbox.style.display === "" ? "block" : "none";
});

document.getElementById("close-chat").addEventListener("click", function() {
    document.getElementById("chatbox").style.display = "none";
});

document.getElementById("send-btn").addEventListener("click", function() {
    const userInput = document.getElementById("user-input");
    const messageText = userInput.value;

    if (messageText.trim() !== "") {
        const messagesDiv = document.getElementById("messages");
        const userMessage = document.createElement("div");
        userMessage.className = "right-part";
        userMessage.innerHTML = `<p>${messageText}</p><span>${new Date().toLocaleTimeString()}</span>`;
        messagesDiv.appendChild(userMessage);
        userInput.value = "";

        // Bot response
        const botMessage = document.createElement("div");
        botMessage.className = "left-part";
        botMessage.innerHTML = `<p>Thanks for your message!</p>`;
        messagesDiv.appendChild(botMessage);
    }
});
// Contact Form Handling
function handleFormSubmit() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('Thank you for your message! I\'ll get back to you soon.');
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
    return false;
}

// Chatbot Functionality
const portfolioChatbot = {
    responses: {
        "hello": "Hey there! How can I assist you today?",
        "hi": "Hello! How can I assist you today?",
        "what is your name?": "My name is Palesa Claudia Mashabela.",
        "skills": "I have skills in communication, teamwork, problem-solving, HTML, CSS, JavaScript, Java, and MongoDB.",
        "portfolio": "My portfolio showcases my work as an upcoming COBOL mainframe developer.",
        "experience": "I am currently an intern at capaciti.",
        "education": "I graduated from IIE Rosebank College with a Bachelor's in IT (Business Systems).",
        "contact": "You can email me at palesaclaudia2@gmail.com or use the contact form.",
        "testimonials": "You can find testimonials in my portfolio's testimonials section."
    },

    getResponse: function(userInput) {
        const lowerInput = userInput.toLowerCase();
        for (const [key, value] of Object.entries(this.responses)) {
            if (lowerInput.includes(key)) {
                return value;
            }
        }
        return "I'm sorry, I didn't understand that. Try asking about my skills, education, or experience.";
    }
};

// Chat UI Controls
document.addEventListener('DOMContentLoaded', function() {
    const chatToggle = document.getElementById("chat-toggle");
    const chatContainer = document.getElementById("chat-container");
    const closeChat = document.getElementById("close-chat");
    const sendBtn = document.getElementById("send-btn");
    const userInput = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    // Toggle chat visibility
    chatToggle.addEventListener("click", function() {
        chatContainer.style.display = chatContainer.style.display === "flex" ? "none" : "flex";
    });

    // Close chat
    closeChat.addEventListener("click", function() {
        chatContainer.style.display = "none";
    });

    // Send message
    function sendMessage() {
        const message = userInput.value.trim();
        if (message) {
            displayMessage(message, 'user-msg');
            const botResponse = portfolioChatbot.getResponse(message);
            setTimeout(() => displayMessage(botResponse, 'bot-msg'), 500);
            userInput.value = '';
        }
    }

    // Handle Enter key
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    sendBtn.addEventListener('click', sendMessage);

    // Display messages with icons
    function displayMessage(message, className) {
        const messageElement = document.createElement('p');
        messageElement.className = className;

        const icon = document.createElement('i');
        icon.className = className === 'user-msg' ? 'bx bx-user-circle' : 'bx bx-bot';
        icon.style.marginRight = '5px';

        messageElement.appendChild(icon);
        messageElement.appendChild(document.createTextNode(message));
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
    // Add this if you want a popup to view certificates in detail
    document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const certificateTitle = e.target.closest('.certificate-info').querySelector('h3').textContent;
        alert(`Opening: ${certificateTitle}\n(Links can be added to actual certificates)`);
    });
    
});
});