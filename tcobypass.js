/**
 * tcobypass.js
 * fixes links which reference t.co where possible
 */
var fullAtts = [             // full URL attribute used on... 
        "data-ultimate-url", // twitter.com
        "data-expanded-url", // twitter.com
        "data-full-url"      // tweetdeck.com
    ],
    hrefRegex = /^http:\/\/t\.co\//i,
    tagNameRegex = /^a$/i,
    i;

document.addEventListener("mouseover", function (event) {
    if (tagNameRegex.test(event.target.tagName) &&
            hrefRegex.test(event.target.getAttribute("href"))) {
        for (i=0; i < fullAtts.length; i++) {
            if (event.target.hasAttribute(fullAtts[i])) {
                event.target.setAttribute(
                    "href",
                    event.target.getAttribute(fullAtts[i])
                );
                break;
            }            
        }
    }
 });

