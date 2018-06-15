var shuffleSequence = seq("trial");
PennController.ResetPrefix(null);

var items = [
    ["trial", "PennController", PennController(
        newText("question", "Which patch do you find greener?")
            .print()
        ,
        // We just add two images on the screen, hosted on a distant server
        newImage("patch1", "http://files.lab.florianschwarz.net/ibexfiles/PennController/SampleTrials/green1.png")
            .print()
        ,
        newImage("patch2", "http://files.lab.florianschwarz.net/ibexfiles/PennController/SampleTrials/green2.png")
            .print()
        ,
        newSelector("patches") // And we indicate that they belong to a selection group
            .settings.add(getImage("patch1"), getImage("patch2"))
            .wait() // We wait for a selection before validation
    )]
];
