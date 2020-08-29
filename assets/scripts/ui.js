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
    $("#output").hide();
    $("#wiki").hide();
    $(".element").hide();
    $(".formula>span").html("&#8205;");
    $(".formula").removeClass("wrong");

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
            let elements = parse($(this).val());
            let result = getMass(elements);

            if (result.startsWith("Invalid", 0) || result.startsWith("Unknown", 0)) {
                $(".formula").addClass("wrong");
            } else {
                $("#mass>span").html(result + "<sub class='unit'>g/mol</sub>");

                // El Group
                const i = elementSymbols.indexOf(input);
                if (i > 0) {
                    const element = data["elements"][i];
                    $(".formula>span").html(element.name);
                    $("#type>span").text(element.elementGroup);
                    $("#group>span").text(element.group);
                    $("#period>span").text(element.period);
                    $(".element").show();
                }
            }

            const selectNums = /([\D)])(\d+)/ig;
            const formulaHTML = `${input.replace(selectNums, "$1<sub>$2</sub>")}`;
            $("#output>.formula>h1").html(formulaHTML);

            $("#output").show();
        }
    }
});

var dark = false;

function darkModeOn() {
    document.documentElement.style.setProperty('--background-color', "#171717");
    document.documentElement.style.setProperty('--primary', "#fff");
    document.documentElement.style.setProperty('--heading-color', "#f7f7f7");
    document.documentElement.style.setProperty('--color-green', "#a550c7");
    document.documentElement.style.setProperty('--card-shadow', "#a550c72d");
}

function darkModeOff() {
    document.documentElement.style.setProperty('--background-color', "#f0f0f0");
    document.documentElement.style.setProperty('--primary', "#1c1c1c");
    document.documentElement.style.setProperty('--heading-color', "#1c1e21");
    document.documentElement.style.setProperty('--color-green', "#64B77D");
    document.documentElement.style.setProperty('--card-shadow', "#0000002d");
}

function toggleDarkMode() {
    if (dark) {
        darkModeOff();
    } else {
        darkModeOn();
    }
    dark = !dark;
}

$("#swap").click(() => {
    toggleDarkMode();
});

var firebaseConfig = {
    apiKey: "AIzaSyDF8OlqfgEvzpHGffp9uqcD3teoKKrsVAs",
    authDomain: "quick-mass.firebaseapp.com",
    databaseURL: "https://quick-mass.firebaseio.com",
    projectId: "quick-mass",
    storageBucket: "quick-mass.appspot.com",
    messagingSenderId: "320581514612",
    appId: "1:320581514612:web:4aa4bbcefe0e2b70ac2821",
    measurementId: "G-7ZG917KLDW"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();