// Can use
// chrome.devtools.*
// chrome.extension.*

// Create a tab in the devtools area
chrome.devtools.panels.create("Re-Inspector", "toast.png", "panel.html", function(panel) {});
