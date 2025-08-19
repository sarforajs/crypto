function typeEffect(element, text, speed, callback) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML = text.substring(0, i + 1);
            element.classList.add("typing");
            i++;
            setTimeout(typing, speed);
        } else {
            element.classList.remove("typing");
            if (callback) callback();
        }
    }
    typing();
}

// Start typing when page loads
window.onload = function() {
    const title = document.getElementById("title");
    const footer = document.getElementById("footer");

    typeEffect(title, " Crypto Encrypt / Decrypt", 100, function() {
        // After title finishes, type footer
        typeEffect(footer, "Project By: Sarforaj Shaikh", 80);
    });
};

