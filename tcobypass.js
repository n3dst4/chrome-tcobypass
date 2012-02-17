$("body").delegate("a.url-ext", "mouseenter", function () {
    $(this).attr("href", $(this).attr("data-full-url"));
});
