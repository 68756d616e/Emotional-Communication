// JavaScript code below as an exmaple, I will rectify. 
// For example, you can dynamically change the emoticon based on the message
document.addEventListener('DOMContentLoaded', function() {
    var messageElement = document.getElementById('message');
    var emoticonElement = document.getElementById('emoticon');

    // Example: Change the emoticon based on the message content
    var message = messageElement.innerText.toLowerCase();
    if (message.includes('happy')) {
        emoticonElement.innerText = '😄'; // Example New Icons 
    } else if (message.includes('sad')) {
        emoticonElement.innerText = '😢'; // Example New Icons  
    } else {
        emoticonElement.innerText = '😐'; // Example New Icons  
    }
});
 