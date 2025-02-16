const sendMessage = function() {
    const sendButton = document.getElementById('send-button');
    const messageInput = document.getElementById('message-input');
    const chatMessages = document.getElementById('chat-messages');

    const addMessage = () => {
        let messageText = messageInput.value;
        if (messageText.trim() !== '') {
            let messageContainer = document.createElement('div');
            messageContainer.classList.add('message');
            
            let username = document.createElement('p');
            username.classList.add('username');
            username.textContent = 'You:';
            
            let text = document.createElement('p');
            text.classList.add('text');
            text.textContent = messageText;
            
            messageContainer.appendChild(username);
            messageContainer.appendChild(text);
            
            chatMessages.appendChild(messageContainer);
            messageInput.value = '';
            messageInput.focus();
        }
    };

    sendButton.addEventListener('click', addMessage);

    /** Code to achieve a enter on keyboard instead of using the mouse to press send */
    messageInput.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            addMessage();
        }
    });
};

sendMessage(); // Call the function to add the event listener
