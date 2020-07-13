// In this file you initialize and configure your experiment using magpieInit

$("document").ready(function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };

    // calls magpieInit
    // in debug mode this returns the magpie-object, which you can access in the console of your browser
    // e.g. >> window.magpie_monitor or window.magpie_monitor.findNextView()
    // in all other modes null will be returned

  if (order === 1) {
    window.magpie_monitor = magpieInit({
        // You have to specify all views you want to use in this experiment and the order of them
        views_seq: [
            intro,     //thank you for participating blabla
            instructions_general,
            instructions,  //instructions für erste practice, 10 trials
            comp_practice,  // erste practise
            begin,          // übergang zu 60 main trials
            comp_trials,    // main trials
            instructions4,  // instructions für die zweite practice mit umgekehrtem mapping, 20 trials
            incomp_practice2, // zweite practise
            begin2,         // übergang zu den zweiten main trials
            incomp_trials,  // zweite main trials
            post_test,      // post test summary
            thanks,         // tahnk you again for participating blabla
        ],                                                           //  , you can specify all information for the deployment
        deploy: {
            experimentID: "132",
            serverAppURL: "https://magpie-demo.herokuapp.com/api/submit_experiment/",
            // Possible deployment methods are:
            // "debug" and "directLink"
            // As well as "MTurk", "MTurkSandbox" and "Prolific"
            deployMethod: "debug",
            contact_email: "YOUREMAIL@wherelifeisgreat.you",
            prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
        },
        // Here, you can specify how the progress bar should look like
        progress_bar: {
            in: [
                // list the view-names of the views for which you want a progress bar
            ],
             // Possible styles are "default", "separate" and "chunks"
            style: "separate",
            width: 100
        }
    });
  } else {
    window.magpie_monitor = magpieInit({
        // You have to specify all views you want to use in this experiment and the order of them
        views_seq: [
            intro,     //thank you for participating blabla
            instructions_general,
            instructions3,  //instructions für erste practice, 10 trials
            incomp_practice,  // erste practise
            begin,          // übergang zu 60 main trials
            incomp_trials,    // main trials
            instructions2,  // instructions für die zweite practice mit umgekehrtem mapping, 20 trials
            comp_practice2, // zweite practise
            begin2,         // übergang zu den zweiten main trials
            comp_trials,  // zweite main trials
            post_test,      // post test summary
            thanks,         // tahnk you again for participating blabla
        ],                                                           //  , you can specify all information for the deployment
        deploy: {
            experimentID: "132",
            serverAppURL: "https://magpie-demo.herokuapp.com/api/submit_experiment/",
            // Possible deployment methods are:
            // "debug" and "directLink"
            // As well as "MTurk", "MTurkSandbox" and "Prolific"
            deployMethod: "debug",
            contact_email: "YOUREMAIL@wherelifeisgreat.you",
            prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
        },
        // Here, you can specify how the progress bar should look like
        progress_bar: {
            in: [
                // list the view-names of the views for which you want a progress bar
            ],
             // Possible styles are "default", "separate" and "chunks"
            style: "separate",
            width: 100
        }
    });
  }
});
