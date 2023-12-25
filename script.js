document.addEventListener("DOMContentLoaded", function () {
    const gridContainer = document.getElementById("gridContainer");

    // Define an array of links with labels
    const links = [
        { label: "Google", url: "https://www.google.com" },
        { label: "Facebook", url: "https://www.facebook.com" },
        { label: "Twitter", url: "https://www.twitter.com" },
        // Add more links as needed
    ];

    // Generate grid items (hyperlinks) dynamically
    links.forEach(link => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");

        const anchor = document.createElement("a");
        anchor.textContent = link.label;
        anchor.href = link.url;
        anchor.target = "_blank"; // Open links in a new tab

        gridItem.appendChild(anchor);
        gridContainer.appendChild(gridItem);
    });
});
