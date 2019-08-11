chrome.runtime.onConnectExternal.addListener(function(port) {
    alert(port.name);
    });
