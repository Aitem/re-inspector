
    <script>

// The ID of the extension we want to talk to.
var editorExtensionId = "ingehikejpddebfmllnanhnbfcoklhhl";

// Make a simple request:
var go = function(){
    console.log("click");
    chrome.runtime.sendMessage(editorExtensionId, {content: JSON.stringify(window.re_frame.db.app_db.state)},
                               function(response) {
                                   if (!response.success)
                                       handleError(url);
                               });}


</script>
    <a href="javascript:go();">Click me</a>
