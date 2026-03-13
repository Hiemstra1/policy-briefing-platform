
document.addEventListener("DOMContentLoaded", function () {
    var body = document.body;
    var modeHeadline = document.getElementById("mode-headline");
    var modeDescription = document.getElementById("mode-description");
    var feedPanel = document.querySelector("[data-feed-panel]");
    var feedToggle = document.querySelector("[data-feed-toggle]");
    var feedClose = document.querySelector("[data-feed-close]");
    var homepageSplash = document.querySelector("[data-homepage-splash]");

    var modeCopy = {
        "logged-out": {
            headline: "Algemene nieuwsstroom en beleidsupdates",
            description: "De homepage toont brede ontwikkelingen voor iedere bezoeker, zonder persoonlijke rangschikking."
        },
        "logged-in": {
            headline: "Persoonlijke feed met snelle acties",
            description: "Ingelogde gebruikers krijgen een rustige homepage met een verborgen zijbalk voor filters, persoonlijke signalen en briefingacties."
        }
    };

    function syncHomepageState() {
        var authState = body.getAttribute("data-auth") || "logged-out";

        if (modeHeadline && modeDescription && modeCopy[authState]) {
            modeHeadline.textContent = modeCopy[authState].headline;
            modeDescription.textContent = modeCopy[authState].description;
        }

        if (feedPanel) {
            feedPanel.setAttribute("aria-hidden", "true");
        }
    }

    if (feedToggle && feedPanel) {
        feedToggle.addEventListener("click", function () {
            var isHidden = feedPanel.getAttribute("aria-hidden") === "true";
            feedPanel.setAttribute("aria-hidden", isHidden ? "false" : "true");
        });
    }

    if (feedClose && feedPanel) {
        feedClose.addEventListener("click", function () {
            feedPanel.setAttribute("aria-hidden", "true");
        });
    }

    if (modeHeadline || modeDescription || feedToggle) {
        syncHomepageState();
    }

    if (homepageSplash) {
        window.setTimeout(function () {
            homepageSplash.classList.add("is-hidden");
        }, 1600);
    }
});
