$(document).ready(function() {
    $("#retrieve-resources").click(function() {
        // var displayResources = $("#display-resources");
        //
        // displayResources.text("Loading....");

        $.ajax({
            type: "GET",
            url: "response.json",
            success: function(result) {
                console.log(result);
                var output =
                    "<table><thead><tr><th>id</th><th>fullName</th><th>gender</th><th>birthDate</th><th>phoneNumber</th><th>address</th></thead><tbody>";
                for (var i in result) {
                    output +=
                        "<tr><td>" +
                        result[i].id +
                        "</td><td>" +
                        result[i].fullName +
                        "</td><td>" +
                        result[i].gender +
                        "</td><td>" +
                        result[i].birthDate +
                        "</td><td>" +
                        result[i].phoneNumber +
                        "</td><td>" +
                        result[i].address +
                        "</td></tr>";
                }
                output += "</tbody></table>";

                // displayResources.html(output);
                // $("table").addClass("table");
            }
        });
    });
});