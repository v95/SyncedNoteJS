// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=392286
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                //window.onresize = function (event) {
                //    console.log(window.innerWidth);
                //};
                // TODO: This application has been newly launched. Initialize
                // your application here.
                console.clear();
                //var button1 = document.getElementById("submit_button");
                //button1.addEventListener("click", button1Click, false);
                var v = Windows.UI.ViewManagement.ApplicationView.getForCurrentView();
                v.titleBar.buttonBackgroundColor = Windows.UI.Colors.white;
                v.titleBar.buttonForegroundColor = Windows.UI.Colors.black;
                v.titleBar.backgroundColor = Windows.UI.Colors.white;
                v.titleBar.foregroundColor = Windows.UI.Colors.black;
                v.ExtendViewIntoTitleBar = true;

                document.getElementById("login").addEventListener("submit", login_attempt, false);

            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();

    function login_attempt(event) {
        var email = document.getElementById("email");
        var pw = document.getElementById("pw");

        document.getElementById("login").disabled = true;


    }

    function button1Click(mouseEvent) {
        var app_id = 'chalk-bump-f49';

        WinJS.xhr({
            url: "https://api.simperium.com/1/" + app_id + "/note/i/52d9fc3fb3dcb5ed2b51f4db2404d515",
            //url: "https://auth.simperium.com/1/" + app_id + "/authorize/",
            type: "GET",
            contentType: "application/json",
            data: {
                "tags": ["todo", "later"],
                "systemTags": [],
                "creationDate": 1335390338.091436,
                "modificationDate": 1335390338.091436,
                "deleted": false,
                "shareURL": "",
                "publishURL": "",
                "content": "new note content!7777777777"
            },
            headers: { "X-Simperium-Token": "74f3882b1441436dba025f5990e6e56d" }
        }).then(function (result) {
            var data = result.responseText;
            console.log("Success" + data);
        }, function (error) {
            var er = error.responseText;
            console.log("Error: " + er);
        }, function (progress) {
            var data = progress.responseText; //the result is here not in the result because it is a live stream API
        });
    }
})();