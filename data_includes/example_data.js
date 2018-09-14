var shuffleSequence = seq("trial");
PennController.ResetPrefix(null);

var items = [
    ["trial", "PennController", PennController(
        newText("green", "How warm is the color green to you?")
            .print()
        ,
        newScale("judgment", 5) // 5-point scale
            .print()
            .wait()             // Validate upon choice
    )]
];
