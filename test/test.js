const welcomeEl = document.getElementById("welcome-el")

function greetUser(greeting, name) {
    // Rewrite the expression using template literals
    welcomeEl.textContent = '${greeting}, ${name} 👋'
}

greetUser("Howdy", "James")


// What are greeting and name? parameters
// What are "Howdy" and "James"? arguments
// What are num1 and num2? parameters
// What are 3 and 4? arguments