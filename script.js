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
