$('#trello_connect_btn').click(function(){

	//Authorize	
    Trello.setKey(APP_KEY);

    Trello.authorize(
    {
        name: "Interceptr",
        type: "redirect",
        expiration: "never",
        interactive: true,
        scope: {read: true, write: false},
        success: function () {
            // Can't do nothing, we've left the page
        },
        error: function () {
            alert("Failed to authorize with Trello.");
        }
    });
});

function postMessage(xyz,abc){
    alert(xyz);
}