// Chrome automatically creates a background.html page for this to execute.
// This can access the inspected page via executeScript
// 
// Can use:
// chrome.tabs.*
// chrome.extension.*


function sendObjectToDevTools(message) {
    // The callback here can be used to execute something on receipt
    chrome.extension.sendMessage(message, function(message){});
}

chrome.runtime.onMessageExternal.addListener(
    function(message, sender, sendResponse) {

        console.log("on extension");
        console.log(message);


        document.querySelector('#debugger').innerHTML = message.content;
        chrome.tabs.executeScript(message.tabId, {code: "console.log('helllll')"});
    });

