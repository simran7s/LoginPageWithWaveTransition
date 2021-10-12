const labels = document.querySelectorAll(".form-control label")

labels.forEach(label => {
    label.innerHTML = label.innerText
        // Split each letter into an array
        .split("")
        // Put a span around each letter
        .map((letter, index) => {
            return (`<span style="transition-delay: ${index * 30}ms">${letter}</span>`)
        })
        // Turn into a string again
        .join("")
})