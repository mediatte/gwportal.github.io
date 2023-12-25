document.addEventListener("DOMContentLoaded", function () {
    const gridContainer = document.getElementById("gridContainer");

    // Define an array of links with labels
    const links = [
        { label: "Gowoon", url: "http://gw.hs.kr" },
        { label: "Sje", url: "https://www.sje.go.kr" },
        { label: "Poster Edit", url: "https://docs.google.com/spreadsheets/d/1GO2w3A3x2xIUDrd3RMZ5gxGDg1w9wcOH010fq8ho4sY/edit?pli=1#gid=0" },
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
