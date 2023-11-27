document.addEventListener("DOMContentLoaded", function () {
    const algorithmsContainer = document.getElementById("algorithms-container");

    // Add a class to disable hover and transition effects during intro
    algorithmsContainer.classList.add("disable-hover-transition");

    // Delay the display of the intro
    setTimeout(function () {
        document.getElementById("intro-container").style.display = "none";
        // Remove the class to enable hover and transition after intro
        algorithmsContainer.classList.remove("disable-hover-transition");
    }, 2000); // Display for 2 seconds

    // Delay the display of title and opacity of body
    setTimeout(function () {
        document.getElementById("title").style.display = "block";
        document.body.style.opacity = 1;
    }, 2000);

    algorithms.forEach(function (algorithm, index) {
        // Create a div element for each algorithm
        const algorithmDiv = document.createElement("div");
        algorithmDiv.className = "algorithm";
        algorithmDiv.textContent = algorithm;

        // Add a class to trigger the CSS transition
        algorithmDiv.classList.add("fade-in");

        // Append the algorithm div to the container
        algorithmsContainer.appendChild(algorithmDiv);

        // Use a timeout to delay the appearance of each algorithm
        setTimeout(function () {
            algorithmDiv.style.opacity = 1;
        }, (index + 1) * 1000); // Delay each algorithm by 1 second
    });
});
