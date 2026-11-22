// ===== Temple Array =====
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    // Three additional temple objects
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-75244-main.jpg"
    },
    {
        templeName: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
    }
];

// ===== Select HTML Elements =====
const templeGrid = document.querySelector(".temple-grid");
const navigationLinks = document.querySelectorAll(".navigation a");
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

// ===== Display Temple Cards =====
function displayTemples(templeList) {
    templeGrid.innerHTML = "";

    templeList.forEach((temple) => {
        const figure = document.createElement("figure");

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";

        const caption = document.createElement("figcaption");

        const name = document.createElement("h2");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;

        const area = document.createElement("p");
        area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

        caption.appendChild(name);
        caption.appendChild(location);
        caption.appendChild(dedicated);
        caption.appendChild(area);

        figure.appendChild(image);
        figure.appendChild(caption);

        templeGrid.appendChild(figure);
    });
}

// ===== Filter Functions =====
function filterTemples(filter) {
    let filteredTemples = temples;

    switch (filter) {
        case "old":
            filteredTemples = temples.filter((temple) => {
                const year = parseInt(temple.dedicated, 10);
                return year < 1900;
            });
            break;

        case "new":
            filteredTemples = temples.filter((temple) => {
                const year = parseInt(temple.dedicated, 10);
                return year > 2000;
            });
            break;

        case "large":
            filteredTemples = temples.filter((temple) => {
                return temple.area > 90000;
            });
            break;

        case "small":
            filteredTemples = temples.filter((temple) => {
                return temple.area < 10000;
            });
            break;

        case "home":
        default:
            filteredTemples = temples;
            break;
    }

    displayTemples(filteredTemples);
}

// ===== Navigation Event Listeners =====
navigationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const filter = link.dataset.filter;

        filterTemples(filter);

        navigationLinks.forEach((navLink) => {
            navLink.classList.remove("active");
            navLink.removeAttribute("aria-current");
        });

        link.classList.add("active");
        link.setAttribute("aria-current", "page");

        // Close mobile navigation after selecting a filter
        navigation.classList.remove("open");
        menuButton.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
    });
});

// ===== Hamburger Menu =====
menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuButton.classList.toggle("open", isOpen);
    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

// ===== Footer Date =====
document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    document.lastModified;

// ===== Display All Temples When Page Loads =====
displayTemples(temples);