/**
 * tcobypass.js
 * fixes links on web.tweetdeck.com to avoid t.co
 */
document.addEventListener("mouseover", function (event) {
    if ((event.target.tagName === "a" || event.target.tagName === "A") &&
            /\burl-ext\b/.test(event.target.className)) {
        event.target.setAttribute("href", event.target.getAttribute("data-full-url"));
    }
 });


