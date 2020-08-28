// Written by b0kch01
// 8-28-2020

const elementSymbol = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt"];
const elementWeight = ["1.0079", "4.0026", "6.941", "9.0122", "10.811", "12.0107", "14.0067", "15.9994", "18.9984", "20.1797", "22.9897", "24.305", "26.9815", "28.0855", "30.9738", "32.065", "35.453", "39.948", "39.0983", "40.078", "44.9559", "47.867", "50.9415", "51.9961", "54.938", "55.845", "58.9332", "58.6934", "63.546", "65.39", "69.723", "72.64", "74.9216", "78.96", "79.904", "83.8", "85.4678", "87.62", "88.9059", "91.224", "92.9064", "95.94", "98", "101.07", "102.9055", "106.42", "107.8682", "112.411", "114.818", "118.71", "121.76", "127.6", "126.9045", "131.293", "132.9055", "137.327", "138.9055", "140.116", "140.9077", "144.24", "145", "150.36", "151.964", "157.25", "158.9253", "162.5", "164.9303", "167.259", "168.9342", "173.04", "174.967", "178.49", "180.9479", "183.84", "186.207", "190.23", "192.217", "195.078", "196.9665", "200.59", "204.3833", "207.2", "208.9804", "209", "210", "222", "223", "226", "227", "232.0381", "231.0359", "238.0289", "237", "244", "243", "247", "247", "251", "252", "257", "258", "259", "262", "261", "262", "266", "264", "277", "268"];

// Checks if a char is captial returns boolean
function isCapital(inputChar) {
    return inputChar == inputChar.toUpperCase();
}
// returns the type from string
function getType(inputString) {
    if (!isNaN(inputString)) {
        return "int";
    } else {
        if (inputString == "(" || inputString == ")") {
            return inputString == "(" ? "par(" : "par)";
        } else {
            return "str";
        }
    }
}

// Check if string is a name
function isName(inputString) {
    let counter = 0;

    for (letter of inputString) {
        if (getType(letter) != "int" &&
            letter == letter.toLowerCase()) {
            counter++;
        } else {
            counter = 0;
        }

        if (counter == 2) {
            return true
        }
    }

    return false;
}

function getInfo(rawInput) {
    if (!isNaN(rawInput[0])) {
        return "Compounds don't start with numbers";
    }

    var tokenList = [];
    var i = 0;
    var token;
    var currentType;

    // Tokenize each type
    while (i < rawInput.length) {
        token = "";
        currentType = getType(rawInput[i]);

        // Add first charachter
        token += rawInput[i];
        i++;

        // While its the same type, add to the same group, if capital, exit
        while (i != rawInput.length && currentType == getType(rawInput[i])) {
            if (getType(rawInput[i]) == "str" && isCapital(rawInput[i])) {
                break;
            }
            token += rawInput[i];
            i++;
        }
        // Add to the list as a seperate index
        tokenList.push(token);
    }

    // Adding operators (going backwards)
    i = tokenList.length - 1
    while (i > 0) {
        if (getType(tokenList[i]) == "int") {
            tokenList.splice(i, 0, "*");
        } else if (getType(tokenList[i]) == "str") {
            if (getType(tokenList[i - 1]) != "par(") {
                tokenList.splice(i, 0, "+");
            }
        } else if (getType(tokenList[i]) == "par(") {
            tokenList.splice(i, 0, "+");
        }
        i--;
    }

    operators = ["+", "*"];
    for (i = 0; i < tokenList.length; i++) {
        if (getType(tokenList[i]) == "str" && !operators.includes(tokenList[i])) {
            tokenList.splice(i, 1, elementWeight[elementSymbol.indexOf(tokenList[i])]);
        } else {}
    }

    if (tokenList[0] == undefined) {
        return ["Invalid Compound: Check for spelling"];
    }

    var information = []

    try {
        let mass = eval(tokenList.join("")).toFixed(6);
        information.push(mass);

        return information;
    } catch (SyntaxError) {
        return ["Invalid Compound: Check for spelling"];
    }
}

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