document.addEventListener("DOMContentLoaded", function () {
    const gridContainer = document.getElementById("gridContainer");

    // Define an array of links with labels
    const links = [
        { label: "Google", url: "https://www.google.com" },
        { label: "Facebook", url: "https://www.facebook.com" },
        { label: "Twitter", url: "https://www.twitter.com" },
        { label: "Gowoon", url: "https://gw.hs.kr" },
        { label: "Sje", url: "https://www.sje.go.kr" },
        { label: "Sjefree", url: "https://www.sje.go.kr/free" },
        { label: "kdng", url: "https://kdng.kr" },
        { label: "neisplus", url: "https://neisplus.kr" },
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
