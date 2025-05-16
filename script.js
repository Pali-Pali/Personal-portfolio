document.addEventListener("DOMContentLoaded", () => {
  const titles = [
    "Business Analyst",
    "Cybersecurity",
    "IT Support",
    "COBOL Mainframe Developer",
    "Business Systems Graduate"
  ];

  const titleElement = document.getElementById("career-title");
  let index = 0;

  setInterval(() => {
    titleElement.classList.add("fade-out");

    setTimeout(() => {
      index = (index + 1) % titles.length;
      titleElement.textContent = titles[index];
      titleElement.classList.remove("fade-out");
    }, 800);
  }, 3000);

  // Chat toggle
  document.getElementById("chat-toggle").addEventListener("click", () => {
    const chatbox = document.getElementById("chatbox");
    chatbox.style.display =
      chatbox.style.display === "none" || chatbox.style.display === ""
        ? "block"
        : "none";
  });

  document.getElementById("close-chat").addEventListener("click", () => {
    document.getElementById("chatbox").style.display = "none";
  });

  // Send message
  document.getElementById("send-btn").addEventListener("click", () => {
    const userInput = document.getElementById("user-input");
    const messageText = userInput.value;

    if (messageText.trim() !== "") {
      const messagesDiv = document.getElementById("messages");

      const userMessage = document.createElement("div");
      userMessage.className = "right-part";
      userMessage.innerHTML = `<p>${messageText}</p><span>${new Date().toLocaleTimeString()}</span>`;
      messagesDiv.appendChild(userMessage);

      userInput.value = "";

      const botMessage = document.createElement("div");
      botMessage.className = "left-part";
      botMessage.innerHTML = `<p>Thanks for your message!</p>`;
      messagesDiv.appendChild(botMessage);
    }
  });

  // Contact form submit
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    this.reset();
    document.getElementById("contactForm").scrollIntoView({ behavior: "smooth" });
  });
});
