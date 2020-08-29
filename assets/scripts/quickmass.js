// Written by b0kch01
// 8-28-2020

const elementSymbols = ["", "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt"];

// 2, 8, 8, 18, 18, 18, 18
function getFullValenceNumber(electrons) {
    let count = electrons.count
    if (count == 1) {
        return 2;
    }

    if (count <= 3) {
        return 8;
    }

    return 18;
}

function getValence(electrons) {
    return electrons[electrons.length - 1];
}

function getBonds(electrons) {
    return getFullValenceNumber(electrons) - getValence(electrons);
}

function getNonBonding(electrons) {
    return getFullValenceNumber(electrons) - 2 * getBonds(electrons);
}

function getFormalCharge(electrons) {
    return getValence(electrons) - getNonBonding(electrons) - getBonds(electrons);
}


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
        if (getType(letter) == "str" &&
            letter == letter.toLowerCase()) {
            counter++;
        } else {
            counter = 0;
        }

        if (counter == 3) {
            return true
        }
    }

    return false;
}

function parse(rawInput) {
    let symbolName = [];
    var coeff = "x";

    if (getType(rawInput[0]) == "int") {
        coeff = rawInput.match(/(^\d+)(\D)/)[1];
    }

    var possibleElement = "";
    for (letter of rawInput) {
        if (getType(letter) != getType(possibleElement) ||
            getType(letter) == "str" && letter == letter.toUpperCase()) {
            symbolName.push(possibleElement);
            possibleElement = "";
        }

        possibleElement += letter;
    }
    symbolName.push(possibleElement);
    symbolName.shift();

    if (coeff == "x") {
        return symbolName;
    } else {
        return [coeff, "("].concat(symbolName).concat([")"]);
    }

}

function getMass(formulaList) {
    // Multiply operation for coefficient
    var hasCoefficient = false;
    if (getType(formulaList[0]) == "int") {
        formulaList[0] += "*";
        hasCoE = true;
    }

    for (let i = 1; i < formulaList.length; i++) {
        let item = formulaList[i];

        if (getType(item) == "int") {
            formulaList[i] = "*" + item;
        }
        // Ignore if coefficient
        else if (getType(item) == "par(" && !(i == 1 && hasCoefficient)) {
            formulaList[i] = "+" + item;
        }
    }

    console.log(formulaList);

    // Add operators
    for (let i = 0; i < formulaList.length; i++) {
        let item = formulaList[i];
        let index = elementSymbols.indexOf(item);

        // Don't touch if:
        if (getType(item) == "int" ||
            getType(item).startsWith("par") ||
            item.endsWith("*") ||
            item.startsWith("*") ||
            item.startsWith("+")) {
            continue;
        }

        // Find corrosponding element object
        if (index == -1) {
            return "Unknown Element: " + item;
        }

        formulaList[i] = "+" + data["elements"][index].atomicMass;
    }

    try {
        const val = eval(formulaList.join(""));
        return val + "";
    } catch (SyntaxError) {
        return "Invalid Compound -- Check spelling";
    }
}