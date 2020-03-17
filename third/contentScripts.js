function replacer(match) {
    return " <span style='color: red'>" + match + "</span> ";
}

const marker = ( text ) => {
        let regexp = new RegExp(/\b(\w*?)ing\b/g, 'g');
        return text.replace( regexp, replacer );
};

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
       if (request.greeting == "hello") {
           let text = document.body.innerHTML;
           document.body.innerHTML = marker( text );
       }

       sendResponse({farewell: "goodbye"});
    });
