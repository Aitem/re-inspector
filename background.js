chrome.runtime.onConnectExternal.addListener(function(port) {
    alert(port.name);
    });

chrome.runtime.onMessageExternal.addListener(function(msg) {
    alert("lol" + msg.data)
});
