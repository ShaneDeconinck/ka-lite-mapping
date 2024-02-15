<script>

    // Create IE + others compatible event handler
    var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    var eventer = window[eventMethod];
    var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

    // Listen to message from child window
    eventer(messageEvent,function(e) {

        $.ajax({
                method: "POST",
              url: "getNextExercise.php",
              data: {
                result: e.data
              }
            })
            .done(function( msg ) {
                if (msg.toString() != "stay") {
                    document.getElementById('iframe').src = msg;
                }
          });

    },false);

    });
</script>
