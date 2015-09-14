$(document).ready(function() {
    $("form#new-task").submit(function(event) {
        event.preventDefault();

        var inputtedTask = $("input#new-task").val();

        var newTask = { task: inputtedTask };

        $("ul#tasks").append("<li><span class='task'>" +
                                newTask.task +
                                "</span></li>");

        $("input#new-task").val("");
        $(".tasks").text(newTask.task);

        $(".tasks").last().click(function() {
            $("#show-task").toggle();
            // $("#completed").toggle();
            $("ul#completed").append("<li><span class='task'>" +
                                    newTask.task +
                                    "</span></li>");


        // $(document).ready(function() {
        //     $(".task").click(function() {
        //         $(".task").toggle();
        //   });
        // });

        });
    });
});
