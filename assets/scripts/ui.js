// Written by b0kch01
// 8-28-2020

$('input').focus(function() {
    $(this).attr('placeholder', 'Element, Compound, Name')
}).blur(function() {
    $(this).attr('placeholder', 'Search')
})

// Main UI chainging jQUery
$("#main-input").on("keyup paste", function() {
    $("#empty").hide();
    $("#error").hide();
    $("#output").hide();
    $("#wiki").hide();

    let input = $(this).val()

    if (input.length < 1) {
        $("#empty").show();
    } else {
        if (isName(input)) {
            let url = "https://pubchem.ncbi.nlm.nih.gov/#query=" + input.replace(" ", "%20")
            $("#wiki").attr("src", url);
            $("#wiki").height($("card").height() - 220);
            $("#wiki").show();
        } else {
            let result = getInfo($(this).val());

            if (result[0].startsWith("Invalid", 0)) {
                $("#error").show();
                $("#error > .text").text(result[0])
            } else {
                let head = "<h3>Molar Mass:</h3>";
                $("#output").html(head + result[0]);
                $("#output").show();
            }
        }
    }
});