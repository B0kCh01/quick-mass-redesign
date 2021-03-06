const data = {
    elements: {
        '1': {
            atomicMass: 1.0079,
            atomicNumber: 1,
            ionizationEnergy: 13.5984,
            atomicRay: '25',
            boilingPoint: {
                C: -252.879
            },
            criticalPoint: 32.938,
            group: '1',
            density: 0.08988,
            discoveryAuthor: 'Henry Cavendish',
            electronConfiguration: [
                '1s'
            ],
            electronegativity: 2.2,
            electronsPerShell: [
                1
            ],
            elementGroup: 'non-metal',
            heatOfFusion: 0.117,
            heatOfVaporization: 0.3904,
            ionisationEnergy: 13.598443,
            meltingPoint: {
                C: -259.16
            },
            molarHeatCapacity: 28.836,
            name: 'Hydrogen',
            period: 1,
            phase: 'gas',
            symbol: 'H',
            triplePoint: 13.8033,
            discoveryDate: 1766,
            context: 'Hydrogen gas was first artificially produced in the early 16th century by the reaction of acids on metals. In 1766–81, Henry Cavendish was the first to recognize that hydrogen gas was a discrete substance, and that it produces water when burned, the property for which it was later named: in Greek, hydrogen means "water-former".'
        },
        '2': {
            atomicMass: 4.0026,
            atomicNumber: 2,
            ionizationEnergy: 24.5874,
            boilingPoint: {
                C: -268.928
            },
            group: '18',
            electronsPerShell: [
                2
            ],
            elementGroup: 'noble-gas',
            meltingPoint: {
                C: -272.2
            },
            name: 'Helium',
            period: 1,
            phase: 'gas',
            symbol: 'He',
            discoveryDate: 1895,
            context: 'Helium is named for the Greek god of the Sun, Helios. It was first detected as an unknown yellow spectral line signature in sunlight during a solar eclipse in 1868 by Georges Rayet, Captain C. T. Haig, Norman R. Pogson, and Lieutenant John Herschel, and was subsequently confirmed by French astronomer Jules Janssen.'
        },
        '3': {
            atomicMass: 6.941,
            atomicNumber: 3,
            ionizationEnergy: 5.3917,
            boilingPoint: {
                C: 1330
            },
            group: '1',
            electronsPerShell: [
                2,
                1
            ],
            elementGroup: 'alkali-metal',
            meltingPoint: {
                C: 180.5
            },
            name: 'Lithium',
            period: 2,
            phase: 'solid',
            symbol: 'Li',
            discoveryDate: 1817,
            context: 'Like all alkali metals, lithium is highly reactive and flammable, and is stored in mineral oil. When cut open, it exhibits a metallic luster, but moist air corrodes it quickly to a dull silvery gray, then black tarnish. It never occurs freely in nature, but only in (usually ionic) compounds, such as pegmatitic minerals which were once the main source of Li. Due to its solubility as an ion, it is present in ocean water and is commonly obtained from brines.'
        },
        '4': {
            atomicMass: 9.0122,
            atomicNumber: 4,
            ionizationEnergy: 9.3227,
            boilingPoint: {
                C: 2469
            },
            group: '2',
            electronsPerShell: [
                2,
                2
            ],
            elementGroup: 'alkaline-earth-metal',
            meltingPoint: {
                C: 1287
            },
            name: 'Beryllium',
            period: 2,
            phase: 'solid',
            symbol: 'Be',
            discoveryDate: 1798,
            context: 'The mineral beryl, which contains beryllium, has been used at least since the Ptolemaic dynasty of Egypt. In the first century CE, Roman naturalist Pliny the Elder mentioned in his encyclopedia Natural History that beryl and emerald ("smaragdus") were similar. The Papyrus Graecus Holmiensis, written in the third or fourth century CE, contains notes on how to prepare artificial emerald and beryl.'
        },
        '5': {
            atomicMass: 10.811,
            atomicNumber: 5,
            ionizationEnergy: 8.298,
            boilingPoint: {
                C: 3927
            },
            group: '13',
            elementGroup: 'metalloid',
            meltingPoint: {
                C: 2076
            },
            name: 'Boron',
            period: 2,
            phase: 'solid',
            symbol: 'B',
            electronsPerShell: [
                2,
                3
            ],
            discoveryDate: 1808,
            context: 'Boron is concentrated on Earth by the water-solubility of its more common naturally occurring compounds, the borate minerals. These are mined industrially as evaporites, such as borax and kernite. The largest known boron deposits are in Turkey, the largest producer of boron minerals.'
        },
        '6': {
            atomicMass: 12.0107,
            atomicNumber: 6,
            ionizationEnergy: 11.2603,
            group: '13',
            electronsPerShell: [
                2,
                4
            ],
            elementGroup: 'non-metal',
            meltingPoint: {
                C: 2349
            },
            name: 'Carbon',
            period: 2,
            phase: 'solid',
            sublimationPoint: {
                C: 3642
            },
            symbol: 'C',
            context: 'The English name carbon comes from the Latin carbo for coal and charcoal, whence also comes the French charbon, meaning charcoal. In German, Dutch and Danish, the names for carbon are Kohlenstoff, koolstof and kulstof respectively, all literally meaning coal-substance.'
        },
        '7': {
            atomicMass: 14.0067,
            atomicNumber: 7,
            ionizationEnergy: 14.5341,
            elementGroup: 'non-metal',
            group: 15,
            name: 'Nitrogen',
            period: 2,
            symbol: 'N',
            electronsPerShell: [
                2,
                5
            ],
            discoveryDate: 1772,
            context: 'Apart from its use in fertilisers and energy-stores, nitrogen is a constituent of organic compounds as diverse as Kevlar used in high-strength fabric and cyanoacrylate used in superglue. Nitrogen is a constituent of every major pharmacological drug class, including antibiotics.'
        },
        '8': {
            atomicMass: 15.9994,
            atomicNumber: 8,
            ionizationEnergy: 13.6181,
            elementGroup: 'non-metal',
            group: 16,
            name: 'Oxygen',
            period: 2,
            symbol: 'O',
            electronsPerShell: [
                2,
                6
            ],
            discoveryDate: 1774,
            context: 'One hundred million tonnes of O2 are extracted from air for industrial uses annually by two primary methods. The most common method is fractional distillation of liquefied air, with N2 distilling as a vapor while O2 is left as a liquid.'
        },
        '9': {
            atomicMass: 18.9984,
            atomicNumber: 9,
            ionizationEnergy: 17.4228,
            elementGroup: 'halogen',
            group: 17,
            name: 'Fluorine',
            period: 2,
            symbol: 'F',
            electronsPerShell: [
                2,
                7
            ],
            discoveryDate: 1886,
            context: 'Fluorocarbon gases are generally greenhouse gases with global-warming potentials 100 to 20,000 times that of carbon dioxide. Organofluorine compounds persist in the environment due to the strength of the carbon–fluorine bond. Fluorine has no known metabolic role in mammals; a few plants synthesize organofluorine poisons that deter herbivores.'
        },
        '10': {
            atomicMass: 20.1797,
            atomicNumber: 10,
            ionizationEnergy: 6.2657,
            elementGroup: 'noble-gas',
            group: 18,
            name: 'Neon',
            period: 2,
            symbol: 'Ne',
            electronsPerShell: [
                2,
                8
            ],
            discoveryDate: 1898,
            context: 'Neon gives a distinct reddish-orange glow when used in low-voltage neon glow lamps, high-voltage discharge tubes and neon advertising signs. The red emission line from neon also causes the well known red light of helium–neon lasers. Neon is used in some plasma tube and refrigerant applications but has few other commercial uses. It is commercially extracted by the fractional distillation of liquid air. Since air is the only source, it is considerably more expensive than helium.'
        },
        '11': {
            atomicMass: 22.9897,
            atomicNumber: 11,
            ionizationEnergy: 5.1391,
            elementGroup: 'alkali-metal',
            group: 1,
            name: 'Sodium',
            period: 3,
            symbol: 'Na',
            electronsPerShell: [
                2,
                8,
                1
            ],
            discoveryDate: 1807,
            context: 'Sodium is an essential element for all animals and some plants. Sodium ions are the major cation in the extracellular fluid (ECF) and as such are the major contributor to the ECF osmotic pressure and ECF compartment volume. Loss of water from the ECF compartment increases the sodium concentration, a condition called hypernatremia. Isotonic loss of water and sodium from the ECF compartment decreases the size of that compartment in a condition called ECF hypovolemia.'
        },
        '12': {
            atomicMass: 24.305,
            atomicNumber: 12,
            ionizationEnergy: 7.6462,
            elementGroup: 'alkaline-earth-metal',
            group: 2,
            name: 'Magnesium',
            period: 3,
            symbol: 'Mg',
            electronsPerShell: [
                2,
                8,
                2
            ],
            discoveryDate: 1755,
            context: 'Magnesium is the eleventh most abundant element by mass in the human body and is essential to all cells and some 300 enzymes. Magnesium ions interact with polyphosphate compounds such as ATP, DNA, and RNA. Hundreds of enzymes require magnesium ions to function. Magnesium compounds are used medicinally as common laxatives, antacids (e.g., milk of magnesia), and to stabilize abnormal nerve excitation or blood vessel spasm in such conditions as eclampsia.'
        },
        '13': {
            atomicMass: 26.9815,
            atomicNumber: 13,
            ionizationEnergy: 5.9858,
            elementGroup: 'metal',
            group: 13,
            name: 'Aluminum',
            period: 3,
            symbol: 'Al',
            electronsPerShell: [
                2,
                8,
                3
            ],
            discoveryDate: 1825,
            context: 'Aluminium is remarkable for the metal\'s low density and its ability to resist corrosion through the phenomenon of passivation. Aluminium and its alloys are vital to the aerospace industry and important in transportation and structures, such as building facades and window frames. The oxides and sulfates are the most useful compounds of aluminium.'
        },
        '14': {
            atomicMass: 28.0855,
            atomicNumber: 14,
            ionizationEnergy: 8.1517,
            elementGroup: 'metalloid',
            group: 14,
            name: 'Silicon',
            period: 3,
            symbol: 'Si',
            electronsPerShell: [
                2,
                8,
                4
            ],
            discoveryDate: 1823,
            context: 'Most free silicon is used in the steel refining, aluminium-casting, and fine chemical industries (often to make fumed silica). Even more visibly, the relatively small portion of very highly purified silicon used in semiconductor electronics (< 10%) is essential to integrated circuits — most computers, cell phones, and modern technology depend on it. Silicon is the basis of the widely used synthetic polymers called silicones.'
        },
        '15': {
            atomicMass: 30.9738,
            atomicNumber: 15,
            ionizationEnergy: 10.4867,
            elementGroup: 'non-metal',
            group: 15,
            name: 'Phosphorus',
            period: 3,
            symbol: 'P',
            electronsPerShell: [
                2,
                8,
                5
            ],
            discoveryDate: 1669,
            context: 'The first form of elemental phosphorus to be produced (white phosphorus, in 1669) emits a faint glow when exposed to oxygen – hence the name, taken from Greek mythology, Φωσφόρος meaning "light-bearer" (Latin Lucifer), referring to the "Morning Star", the planet Venus (or Mercury).'
        },
        '16': {
            atomicMass: 32.065,
            atomicNumber: 16,
            ionizationEnergy: 10.36,
            elementGroup: 'non-metal',
            group: 16,
            name: 'Sulfur',
            period: 3,
            symbol: 'S',
            electronsPerShell: [
                2,
                8,
                6
            ],
            context: 'Sulfur is an essential element for all life, but almost always in the form of organosulfur compounds or metal sulfides. Three amino acids (cysteine, cystine, and methionine) and two vitamins (biotin and thiamine) are organosulfur compounds.'
        },
        '17': {
            atomicMass: 35.453,
            atomicNumber: 17,
            ionizationEnergy: 12.9676,
            elementGroup: 'halogen',
            group: 17,
            name: 'Chlorine',
            period: 3,
            symbol: 'Cl',
            electronsPerShell: [
                2,
                8,
                7
            ],
            discoveryDate: 1774,
            context: 'In the form of chloride ions, chlorine is necessary to all known species of life. Other types of chlorine compounds are rare in living organisms, and artificially produced chlorinated organics range from inert to toxic.'
        },
        '18': {
            atomicMass: 39.948,
            atomicNumber: 18,
            ionizationEnergy: 15.7596,
            elementGroup: 'noble-gas',
            group: 18,
            name: 'Argon',
            period: 3,
            symbol: 'Ar',
            electronsPerShell: [
                2,
                8,
                8
            ],
            discoveryDate: 1894,
            context: 'The name "argon" is derived from the Greek word ἀργόν, neuter singular form of ἀργός meaning "lazy" or "inactive", as a reference to the fact that the element undergoes almost no chemical reactions.'
        },
        '19': {
            atomicMass: 39.0983,
            atomicNumber: 19,
            ionizationEnergy: 4.3407,
            elementGroup: 'alkali-metal',
            group: 1,
            name: 'Potassium',
            period: 4,
            symbol: 'K',
            electronsPerShell: [
                2,
                8,
                8,
                1
            ],
            discoveryDate: 1807
        },
        '20': {
            atomicMass: 40.078,
            atomicNumber: 20,
            ionizationEnergy: 6.1132,
            elementGroup: 'alkaline-earth-metal',
            group: 2,
            name: 'Calcium',
            period: 4,
            symbol: 'Ca',
            electronsPerShell: [
                2,
                8,
                8,
                2
            ],
            discoveryDate: 1808
        },
        '21': {
            atomicMass: 44.9559,
            atomicNumber: 21,
            ionizationEnergy: 6.5615,
            elementGroup: 'transition-metal',
            group: 3,
            name: 'Scandium',
            period: 4,
            symbol: 'Sc',
            electronsPerShell: [
                2,
                8,
                9,
                2
            ],
            discoveryDate: 1879
        },
        '22': {
            atomicMass: 47.867,
            atomicNumber: 22,
            ionizationEnergy: 6.8281,
            elementGroup: 'transition-metal',
            group: 4,
            name: 'Titanium',
            period: 4,
            symbol: 'Ti',
            electronsPerShell: [
                2,
                8,
                10,
                2
            ],
            discoveryDate: 1791
        },
        '23': {
            atomicMass: 50.9415,
            atomicNumber: 23,
            ionizationEnergy: 6.7462,
            elementGroup: 'transition-metal',
            group: 5,
            name: 'Vanadium',
            period: 4,
            symbol: 'V',
            electronsPerShell: [
                2,
                8,
                11,
                2
            ],
            discoveryDate: 1801
        },
        '24': {
            atomicMass: 51.9961,
            atomicNumber: 24,
            ionizationEnergy: 6.7665,
            elementGroup: 'transition-metal',
            group: 6,
            name: 'Chromium',
            period: 4,
            symbol: 'Cr',
            electronsPerShell: [
                2,
                8,
                13,
                1
            ],
            discoveryDate: 1798
        },
        '25': {
            atomicMass: 54.938,
            atomicNumber: 25,
            ionizationEnergy: 7.434,
            elementGroup: 'transition-metal',
            group: 7,
            name: 'Manganese',
            period: 4,
            symbol: 'Mn',
            electronsPerShell: [
                2,
                8,
                13,
                2
            ],
            discoveryDate: 1774
        },
        '26': {
            atomicMass: 55.845,
            atomicNumber: 26,
            ionizationEnergy: 7.9024,
            elementGroup: 'transition-metal',
            group: 8,
            name: 'Iron',
            period: 4,
            symbol: 'Fe',
            electronsPerShell: [
                2,
                8,
                14,
                2
            ],
            discoveryDate: -2500
        },
        '27': {
            atomicMass: 58.9332,
            atomicNumber: 27,
            ionizationEnergy: 7.881,
            elementGroup: 'transition-metal',
            group: 9,
            name: 'Cobalt',
            period: 4,
            symbol: 'Co',
            electronsPerShell: [
                2,
                8,
                15,
                2
            ],
            discoveryDate: 1735
        },
        '28': {
            atomicMass: 58.6934,
            atomicNumber: 28,
            ionizationEnergy: 7.6398,
            elementGroup: 'transition-metal',
            group: 10,
            name: 'Nickel',
            period: 4,
            symbol: 'Ni',
            electronsPerShell: [
                2,
                8,
                16,
                2
            ],
            discoveryDate: 1751
        },
        '29': {
            atomicMass: 63.546,
            atomicNumber: 29,
            ionizationEnergy: 7.7264,
            elementGroup: 'transition-metal',
            group: 11,
            name: 'Copper',
            period: 4,
            symbol: 'Cu',
            electronsPerShell: [
                2,
                8,
                18,
                1
            ],
            discoveryDate: 1944
        },
        '30': {
            atomicMass: 65.39,
            atomicNumber: 30,
            ionizationEnergy: 9.3942,
            elementGroup: 'transition-metal',
            group: 12,
            name: 'Zinc',
            period: 4,
            symbol: 'Zn',
            electronsPerShell: [
                2,
                8,
                18,
                2
            ],
            discoveryDate: 1500
        },
        '31': {
            atomicMass: 69.723,
            atomicNumber: 31,
            ionizationEnergy: 5.9993,
            elementGroup: 'metal',
            group: 13,
            name: 'Gallium',
            period: 4,
            symbol: 'Ga',
            electronsPerShell: [
                2,
                8,
                18,
                3
            ],
            discoveryDate: 1875
        },
        '32': {
            atomicMass: 72.64,
            atomicNumber: 32,
            ionizationEnergy: 7.8994,
            elementGroup: 'metalloid',
            group: 14,
            name: 'Germanium',
            period: 4,
            symbol: 'Ge',
            electronsPerShell: [
                2,
                8,
                18,
                4
            ],
            discoveryDate: 1886
        },
        '33': {
            atomicMass: 74.9216,
            atomicNumber: 33,
            ionizationEnergy: 9.7886,
            elementGroup: 'metalloid',
            group: 15,
            name: 'Arsenic',
            period: 4,
            symbol: 'As',
            electronsPerShell: [
                2,
                8,
                18,
                5
            ],
            discoveryDate: 1250
        },
        '34': {
            atomicMass: 44.9559,
            atomicNumber: 34,
            ionizationEnergy: 9.7524,
            elementGroup: 'non-metal',
            group: 16,
            name: 'Selenium',
            period: 4,
            symbol: 'Se',
            electronsPerShell: [
                2,
                8,
                9,
                2
            ],
            discoveryDate: 1817
        },
        '35': {
            atomicMass: 79.904,
            atomicNumber: 35,
            ionizationEnergy: 11.8138,
            elementGroup: 'halogen',
            group: 17,
            name: 'Bromine',
            period: 4,
            symbol: 'Br',
            electronsPerShell: [
                2,
                8,
                18,
                7
            ],
            discoveryDate: 1826
        },
        '36': {
            atomicMass: 83.8,
            atomicNumber: 36,
            ionizationEnergy: 13.9996,
            elementGroup: 'noble-gas',
            group: 18,
            name: 'Krypton',
            period: 4,
            symbol: 'Kr',
            electronsPerShell: [
                2,
                8,
                18,
                8
            ],
            discoveryDate: 1898
        },
        '37': {
            atomicMass: 85.4678,
            atomicNumber: 37,
            ionizationEnergy: 4.1771,
            elementGroup: 'alkali-metal',
            group: 1,
            name: 'Rubidium',
            period: 5,
            symbol: 'Rb',
            electronsPerShell: [
                2,
                8,
                18,
                8,
                1
            ],
            discoveryDate: 1861
        },
        '38': {
            atomicMass: 87.62,
            atomicNumber: 38,
            ionizationEnergy: 5.694,
            elementGroup: 'alkaline-earth-metal',
            group: 2,
            name: 'Strontium',
            period: 5,
            symbol: 'Sr',
            electronsPerShell: [
                2,
                8,
                18,
                8,
                2
            ],
            discoveryDate: 1808
        },
        '39': {
            atomicMass: 88.9059,
            atomicNumber: 39,
            ionizationEnergy: 6.2173,
            elementGroup: 'transition-metal',
            group: 3,
            name: 'Yttrium',
            period: 5,
            symbol: 'Y',
            electronsPerShell: [
                2,
                8,
                18,
                9,
                2
            ],
            discoveryDate: 1794
        },
        '40': {
            atomicMass: 91.224,
            atomicNumber: 40,
            ionizationEnergy: 6.6339,
            elementGroup: 'transition-metal',
            group: 4,
            name: 'Zirconium',
            period: 5,
            symbol: 'Zr',
            electronsPerShell: [
                2,
                8,
                18,
                10,
                2
            ],
            discoveryDate: 1789
        },
        '41': {
            atomicMass: 92.9064,
            atomicNumber: 41,
            ionizationEnergy: 6.7589,
            elementGroup: 'transition-metal',
            group: 5,
            name: 'Niobium',
            period: 5,
            symbol: 'Nb',
            electronsPerShell: [
                2,
                8,
                18,
                12,
                1
            ],
            discoveryDate: 1801
        },
        '42': {
            atomicMass: 95.94,
            atomicNumber: 42,
            ionizationEnergy: 7.0924,
            elementGroup: 'transition-metal',
            group: 6,
            name: 'Molybdenum',
            period: 5,
            symbol: 'Mo',
            electronsPerShell: [
                2,
                8,
                18,
                13,
                1
            ],
            discoveryDate: 1781
        },
        '43': {
            atomicMass: 98,
            atomicNumber: 43,
            ionizationEnergy: 7.28,
            elementGroup: 'transition-metal',
            group: 7,
            name: 'Technetium',
            period: 5,
            symbol: 'Tc',
            electronsPerShell: [
                2,
                8,
                18,
                13,
                2
            ],
            discoveryDate: 1937
        },
        '44': {
            atomicMass: 101.07,
            atomicNumber: 44,
            ionizationEnergy: 7.3605,
            elementGroup: 'transition-metal',
            group: 8,
            name: 'Ruthenium',
            period: 5,
            symbol: 'Ru',
            electronsPerShell: [
                2,
                8,
                18,
                15,
                1
            ],
            discoveryDate: 1808
        },
        '45': {
            atomicMass: 102.9055,
            atomicNumber: 45,
            ionizationEnergy: 7.4589,
            elementGroup: 'transition-metal',
            group: 9,
            name: 'Rhodium',
            period: 5,
            symbol: 'Rh',
            electronsPerShell: [
                2,
                8,
                18,
                16,
                1
            ],
            discoveryDate: 1803
        },
        '46': {
            atomicMass: 106.42,
            atomicNumber: 46,
            ionizationEnergy: 8.3369,
            elementGroup: 'transition-metal',
            group: 10,
            name: 'Palladium',
            period: 5,
            symbol: 'Pd',
            electronsPerShell: [
                2,
                8,
                18,
                18,
                0
            ],
            discoveryDate: 1803
        },
        '47': {
            atomicMass: 107.8682,
            atomicNumber: 47,
            ionizationEnergy: 7.5762,
            elementGroup: 'transition-metal',
            group: 11,
            name: 'Silver',
            period: 5,
            symbol: 'Ag',
            electronsPerShell: [
                2,
                8,
                18,
                18,
                1
            ],
            discoveryDate: -3000
        },
        '48': {
            atomicMass: 112.411,
            atomicNumber: 48,
            ionizationEnergy: 8.9938,
            elementGroup: 'transition-metal',
            group: 12,
            name: 'Cadmium',
            period: 5,
            symbol: 'Cd',
            electronsPerShell: [
                2,
                8,
                18,
                18,
                2
            ],
            discoveryDate: 1817
        },
        '49': {
            atomicMass: 114.818,
            atomicNumber: 49,
            ionizationEnergy: 5.7864,
            elementGroup: 'metal',
            group: 13,
            name: 'Indium',
            period: 5,
            symbol: 'In',
            electronsPerShell: [
                2,
                8,
                18,
                18,
                3
            ],
            discoveryDate: 1863
        },
        '50': {
            atomicMass: 118.71,
            atomicNumber: 50,
            ionizationEnergy: 7.3439,
            elementGroup: 'metal',
            group: 14,
            name: 'Tin',
            period: 5,
            symbol: 'Sn',
            electronsPerShell: [
                2,
                8,
                18,
                18,
                4
            ],
            discoveryDate: -2100
        },
        '51': {
            atomicMass: 121.76,
            atomicNumber: 51,
            ionizationEnergy: 8.6084,
            elementGroup: 'metalloid',
            group: 15,
            name: 'Antimony',
            period: 5,
            symbol: 'Sb',
            electronsPerShell: [
                2,
                8,
                18,
                18,
                5
            ],
            discoveryDate: -1600
        },
        '52': {
            atomicMass: 127.6,
            atomicNumber: 52,
            ionizationEnergy: 9.0096,
            elementGroup: 'metalloid',
            group: 16,
            name: 'Tellurium',
            period: 5,
            symbol: 'Te',
            electronsPerShell: [
                2,
                8,
                18,
                18,
                6
            ],
            discoveryDate: 1783
        },
        '53': {
            atomicMass: 126.9045,
            atomicNumber: 53,
            ionizationEnergy: 10.4513,
            elementGroup: 'halogen',
            group: 17,
            name: 'Iodine',
            period: 5,
            symbol: 'I',
            electronsPerShell: [
                2,
                8,
                18,
                18,
                7
            ],
            discoveryDate: 1811
        },
        '54': {
            atomicMass: 131.293,
            atomicNumber: 54,
            ionizationEnergy: 12.1298,
            elementGroup: 'noble-gas',
            group: 18,
            name: 'Xenon',
            period: 5,
            symbol: 'Xe',
            electronsPerShell: [
                2,
                8,
                18,
                18,
                8
            ],
            discoveryDate: 1898
        },
        '55': {
            atomicMass: 132.9055,
            atomicNumber: 55,
            ionizationEnergy: 3.8939,
            elementGroup: 'alkali-metal',
            group: 1,
            name: 'Cesium',
            period: 6,
            symbol: 'Cs',
            electronsPerShell: [
                2,
                8,
                18,
                18,
                8,
                1
            ],
            discoveryDate: 1860
        },
        '56': {
            atomicMass: 137.327,
            atomicNumber: 56,
            ionizationEnergy: 5.2117,
            elementGroup: 'alkaline-earth-metal',
            group: 2,
            name: 'Barium',
            period: 6,
            symbol: 'Ba',
            electronsPerShell: [
                2,
                8,
                18,
                18,
                8,
                2
            ],
            discoveryDate: 1808
        },
        '57': {
            atomicMass: 138.9055,
            atomicNumber: 57,
            ionizationEnergy: 5.5769,
            elementGroup: 'lanthanoid',
            group: 2,
            name: 'Lanthanum',
            period: 6,
            symbol: 'La',
            electronsPerShell: [
                2,
                8,
                18,
                18,
                9,
                2
            ],
            discoveryDate: 1839
        },
        '58': {
            atomicMass: 140.116,
            atomicNumber: 58,
            ionizationEnergy: 5.5387,
            elementGroup: 'lanthanoid',
            group: 3,
            name: 'Cerium',
            period: 6,
            symbol: 'Ce',
            electronsPerShell: [
                2,
                8,
                18,
                19,
                9,
                2
            ],
            discoveryDate: 1803
        },
        '59': {
            atomicMass: 140.9077,
            atomicNumber: 59,
            ionizationEnergy: 5.473,
            elementGroup: 'lanthanoid',
            group: 4,
            name: 'Praseodymium',
            period: 6,
            symbol: 'Pr',
            electronsPerShell: [
                2,
                8,
                18,
                21,
                8,
                2
            ],
            discoveryDate: 1885
        },
        '60': {
            atomicMass: 144.24,
            atomicNumber: 60,
            ionizationEnergy: 5.525,
            elementGroup: 'lanthanoid',
            group: 5,
            name: 'Neodymium',
            period: 6,
            symbol: 'Nd',
            electronsPerShell: [
                2,
                8,
                18,
                22,
                8,
                2
            ],
            discoveryDate: 1885
        },
        '61': {
            atomicMass: 145,
            atomicNumber: 61,
            ionizationEnergy: 5.582,
            elementGroup: 'lanthanoid',
            group: 6,
            name: 'Promethium',
            period: 6,
            symbol: 'Pm',
            electronsPerShell: [
                2,
                8,
                18,
                23,
                8,
                2
            ],
            discoveryDate: 1945
        },
        '62': {
            atomicMass: 150.36,
            atomicNumber: 62,
            ionizationEnergy: 5.6437,
            elementGroup: 'lanthanoid',
            group: 7,
            name: 'Samarium',
            period: 6,
            symbol: 'Sm',
            electronsPerShell: [
                2,
                8,
                18,
                24,
                8,
                2
            ],
            discoveryDate: 1879
        },
        '63': {
            atomicMass: 151.964,
            atomicNumber: 63,
            ionizationEnergy: 5.6704,
            elementGroup: 'lanthanoid',
            group: 8,
            name: 'Europium',
            period: 6,
            symbol: 'Eu',
            electronsPerShell: [
                2,
                8,
                18,
                25,
                8,
                2
            ],
            discoveryDate: 1901
        },
        '64': {
            atomicMass: 157.25,
            atomicNumber: 64,
            ionizationEnergy: 6.1501,
            elementGroup: 'lanthanoid',
            group: 9,
            name: 'Gadolinium',
            period: 6,
            symbol: 'Gd',
            electronsPerShell: [
                2,
                8,
                18,
                25,
                9,
                2
            ],
            discoveryDate: 1880
        },
        '65': {
            atomicMass: 158.9253,
            atomicNumber: 65,
            ionizationEnergy: 5.8638,
            elementGroup: 'lanthanoid',
            group: 10,
            name: 'Terbium',
            period: 6,
            symbol: 'Tb',
            electronsPerShell: [
                2,
                8,
                18,
                27,
                8,
                2
            ],
            discoveryDate: 1843
        },
        '66': {
            atomicMass: 162.5,
            atomicNumber: 66,
            ionizationEnergy: 5.9389,
            elementGroup: 'lanthanoid',
            group: 11,
            name: 'Dysprosium',
            period: 6,
            symbol: 'Dy',
            electronsPerShell: [
                2,
                8,
                18,
                28,
                8,
                2
            ],
            discoveryDate: 1886
        },
        '67': {
            atomicMass: 164.9303,
            atomicNumber: 67,
            ionizationEnergy: 6.0215,
            elementGroup: 'lanthanoid',
            group: 12,
            name: 'Holmium',
            period: 6,
            symbol: 'Ho',
            electronsPerShell: [
                2,
                8,
                18,
                29,
                8,
                2
            ],
            discoveryDate: 1878
        },
        '68': {
            atomicMass: 167.259,
            atomicNumber: 68,
            ionizationEnergy: 6.1077,
            elementGroup: 'lanthanoid',
            group: 13,
            name: 'Erbium',
            period: 6,
            symbol: 'Er',
            electronsPerShell: [
                2,
                8,
                18,
                30,
                8,
                2
            ],
            discoveryDate: 1842
        },
        '69': {
            atomicMass: 168.9342,
            atomicNumber: 69,
            ionizationEnergy: 6.1843,
            elementGroup: 'lanthanoid',
            group: 14,
            name: 'Thulium',
            period: 6,
            symbol: 'Tm',
            electronsPerShell: [
                2,
                8,
                18,
                31,
                8,
                2
            ],
            discoveryDate: 1879
        },
        '70': {
            atomicMass: 173.04,
            atomicNumber: 70,
            ionizationEnergy: 6.2542,
            elementGroup: 'lanthanoid',
            group: 15,
            name: 'Ytterbium',
            period: 6,
            symbol: 'Yb',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                8,
                2
            ],
            discoveryDate: 1878
        },
        '71': {
            atomicMass: 174.967,
            atomicNumber: 71,
            ionizationEnergy: 5.4259,
            elementGroup: 'lanthanoid',
            group: 16,
            name: 'Lutetium',
            period: 6,
            symbol: 'Lu',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                9,
                2
            ],
            discoveryDate: 1907
        },
        '72': {
            atomicMass: 178.49,
            atomicNumber: 72,
            ionizationEnergy: 6.8251,
            elementGroup: 'transition-metal',
            group: 4,
            name: 'Hafnium',
            period: 6,
            symbol: 'Hf',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                10,
                2
            ],
            discoveryDate: 1923
        },
        '73': {
            atomicMass: 180.9479,
            atomicNumber: 73,
            ionizationEnergy: 7.5496,
            elementGroup: 'transition-metal',
            group: 5,
            name: 'Tantalum',
            period: 6,
            symbol: 'Ta',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                11,
                2
            ],
            discoveryDate: 1802
        },
        '74': {
            atomicMass: 183.84,
            atomicNumber: 74,
            ionizationEnergy: 7.864,
            elementGroup: 'transition-metal',
            group: 6,
            name: 'Tungsten',
            period: 6,
            symbol: 'W',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                12,
                2
            ],
            discoveryDate: 1783
        },
        '75': {
            atomicMass: 186.207,
            atomicNumber: 75,
            ionizationEnergy: 7.8335,
            elementGroup: 'transition-metal',
            group: 7,
            name: 'Rhenium',
            period: 6,
            symbol: 'Re',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                13,
                2
            ],
            discoveryDate: 1925
        },
        '76': {
            atomicMass: 190.23,
            atomicNumber: 76,
            ionizationEnergy: 8.4382,
            elementGroup: 'transition-metal',
            group: 8,
            name: 'Osmium',
            period: 6,
            symbol: 'Os',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                14,
                2
            ],
            discoveryDate: 1803
        },
        '77': {
            atomicMass: 192.217,
            atomicNumber: 77,
            ionizationEnergy: 8.967,
            elementGroup: 'transition-metal',
            group: 9,
            name: 'Iridium',
            period: 6,
            symbol: 'Ir',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                15,
                2
            ],
            discoveryDate: 1803
        },
        '78': {
            atomicMass: 195.078,
            atomicNumber: 78,
            ionizationEnergy: 8.9587,
            elementGroup: 'transition-metal',
            group: 10,
            name: 'Platinum',
            period: 6,
            symbol: 'Pt',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                17,
                1
            ],
            discoveryDate: 1700
        },
        '79': {
            atomicMass: 196.9665,
            atomicNumber: 79,
            ionizationEnergy: 9.2255,
            elementGroup: 'transition-metal',
            group: 11,
            name: 'Gold',
            period: 6,
            symbol: 'Au',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                18,
                1
            ],
            discoveryDate: -3000
        },
        '80': {
            atomicMass: 200.59,
            atomicNumber: 80,
            ionizationEnergy: 10.4375,
            elementGroup: 'transition-metal',
            group: 12,
            name: 'Mercury',
            period: 6,
            symbol: 'Hg',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                18,
                2
            ],
            discoveryDate: -1500
        },
        '81': {
            atomicMass: 204.3833,
            atomicNumber: 81,
            ionizationEnergy: 6.108,
            elementGroup: 'metal',
            group: 13,
            name: 'Thallium',
            period: 6,
            symbol: 'Tl',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                18,
                3
            ],
            discoveryDate: 1861
        },
        '82': {
            atomicMass: 207.2,
            atomicNumber: 82,
            ionizationEnergy: 7.4167,
            elementGroup: 'metal',
            group: 14,
            name: 'Lead',
            period: 6,
            symbol: 'Pb',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                18,
                4
            ],
            discoveryDate: -1000
        },
        '83': {
            atomicMass: 208.9804,
            atomicNumber: 83,
            ionizationEnergy: 7.2856,
            elementGroup: 'metal',
            group: 15,
            name: 'Bismuth',
            period: 6,
            symbol: 'Bi',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                18,
                5
            ],
            discoveryDate: 1500
        },
        '84': {
            atomicMass: 209,
            atomicNumber: 84,
            ionizationEnergy: 8.417,
            elementGroup: 'metalloid',
            group: 16,
            name: 'Polonium',
            period: 6,
            symbol: 'Po',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                18,
                6
            ],
            discoveryDate: 1898
        },
        '85': {
            atomicMass: 210,
            atomicNumber: 85,
            ionizationEnergy: 9.3,
            elementGroup: 'halogen',
            group: 17,
            name: 'Astatine',
            period: 6,
            symbol: 'At',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                18,
                7
            ],
            discoveryDate: 1940
        },
        '86': {
            atomicMass: 222,
            atomicNumber: 86,
            ionizationEnergy: 10.7485,
            elementGroup: 'noble-gas',
            group: 18,
            name: 'Radon',
            period: 6,
            symbol: 'Rn',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                18,
                8
            ],
            discoveryDate: 1900
        },
        '87': {
            atomicMass: 223,
            atomicNumber: 87,
            ionizationEnergy: 4.0727,
            elementGroup: 'alkali-metal',
            group: 1,
            name: 'Francium',
            period: 7,
            symbol: 'Fr',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                18,
                8,
                1
            ],
            discoveryDate: 1939
        },
        '88': {
            atomicMass: 226,
            atomicNumber: 88,
            ionizationEnergy: 5.2784,
            elementGroup: 'alkaline-earth-metal',
            group: 2,
            name: 'Radium',
            period: 7,
            symbol: 'Ra',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                18,
                8,
                2
            ],
            discoveryDate: 1898
        },
        '89': {
            atomicMass: 227,
            atomicNumber: 89,
            ionizationEnergy: 5.17,
            elementGroup: 'actinoid',
            group: 2,
            name: 'Actinium',
            period: 7,
            symbol: 'Ac',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                18,
                9,
                2
            ],
            discoveryDate: 1899
        },
        '90': {
            atomicMass: 232.0381,
            atomicNumber: 90,
            ionizationEnergy: 6.3067,
            elementGroup: 'actinoid',
            group: 3,
            name: 'Thorium',
            period: 7,
            symbol: 'Th',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                18,
                10,
                2
            ],
            discoveryDate: 1829
        },
        '91': {
            atomicMass: 106.42,
            atomicNumber: 91,
            ionizationEnergy: 5.89,
            elementGroup: 'actinoid',
            group: 4,
            name: 'Protactinium',
            period: 7,
            symbol: 'Pa',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                20,
                9,
                2
            ],
            discoveryDate: 1917
        },
        '92': {
            atomicMass: 238.0289,
            atomicNumber: 92,
            ionizationEnergy: 6.1941,
            elementGroup: 'actinoid',
            group: 5,
            name: 'Uranium',
            period: 7,
            symbol: 'U',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                21,
                9,
                2
            ],
            discoveryDate: 1789
        },
        '93': {
            atomicMass: 237,
            atomicNumber: 93,
            ionizationEnergy: 6.2657,
            elementGroup: 'actinoid',
            group: 6,
            name: 'Neptunium',
            period: 7,
            symbol: 'Np',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                22,
                9,
                2
            ],
            discoveryDate: 1940
        },
        '94': {
            atomicMass: 244,
            atomicNumber: 94,
            ionizationEnergy: 6.0262,
            elementGroup: 'actinoid',
            group: 7,
            name: 'Plutonium',
            period: 7,
            symbol: 'Pu',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                24,
                8,
                2
            ],
            discoveryDate: 1940
        },
        '95': {
            atomicMass: 243,
            atomicNumber: 95,
            ionizationEnergy: 5.9738,
            elementGroup: 'actinoid',
            group: 8,
            name: 'Americium',
            period: 7,
            symbol: 'Am',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                25,
                8,
                2
            ],
            discoveryDate: 1994
        },
        '96': {
            atomicMass: 247,
            atomicNumber: 96,
            ionizationEnergy: 5.9915,
            elementGroup: 'actinoid',
            group: 9,
            name: 'Curium',
            period: 7,
            symbol: 'Cm',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                25,
                9,
                2
            ],
            discoveryDate: 1944
        },
        '97': {
            atomicMass: 247,
            atomicNumber: 97,
            ionizationEnergy: 6.1979,
            elementGroup: 'actinoid',
            group: 10,
            name: 'Berkelium',
            period: 7,
            symbol: 'Bk',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                27,
                8,
                2
            ],
            discoveryDate: 1949
        },
        '98': {
            atomicMass: 251,
            atomicNumber: 98,
            ionizationEnergy: 6.2817,
            elementGroup: 'actinoid',
            group: 11,
            name: 'Californium',
            period: 7,
            symbol: 'Cf',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                28,
                8,
                2
            ],
            discoveryDate: 1950
        },
        '99': {
            atomicMass: 252,
            atomicNumber: 99,
            ionizationEnergy: 6.42,
            elementGroup: 'actinoid',
            group: 12,
            name: 'Einsteinium',
            period: 7,
            symbol: 'Es',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                29,
                8,
                2
            ],
            discoveryDate: 1952
        },
        '100': {
            atomicMass: 257,
            atomicNumber: 100,
            ionizationEnergy: 6.5,
            elementGroup: 'actinoid',
            group: 13,
            name: 'Fermium',
            period: 7,
            symbol: 'Fm',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                30,
                8,
                2
            ],
            discoveryDate: 1952
        },
        '101': {
            atomicMass: 258,
            atomicNumber: 101,
            ionizationEnergy: 6.58,
            elementGroup: 'actinoid',
            group: 14,
            name: 'Mendelevium',
            period: 7,
            symbol: 'Md',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                31,
                8,
                2
            ],
            discoveryDate: 1955
        },
        '102': {
            atomicMass: 259,
            atomicNumber: 102,
            ionizationEnergy: 6.65,
            elementGroup: 'actinoid',
            group: 15,
            name: 'Nobelium',
            period: 7,
            symbol: 'No',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                32,
                8,
                2
            ],
            discoveryDate: 1958
        },
        '103': {
            atomicMass: 262,
            atomicNumber: 103,
            ionizationEnergy: 4.9,
            elementGroup: 'actinoid',
            group: 16,
            name: 'Lawrencium',
            period: 7,
            symbol: 'Lr',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                32,
                8,
                3
            ],
            discoveryDate: 1961
        },
        '104': {
            atomicMass: 261,
            atomicNumber: 104,
            ionizationEnergy: 0,
            elementGroup: 'transition-metal',
            group: 4,
            name: 'Rutherfordium',
            period: 7,
            symbol: 'Rf',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                32,
                10,
                2
            ]
        },
        '105': {
            atomicMass: 262,
            atomicNumber: 105,
            ionizationEnergy: 0,
            elementGroup: 'transition-metal',
            group: 5,
            name: 'Dubnium',
            period: 7,
            symbol: 'Db',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                32,
                11,
                2
            ]
        },
        '106': {
            atomicMass: 266,
            atomicNumber: 106,
            ionizationEnergy: 0,
            elementGroup: 'transition-metal',
            group: 6,
            name: 'Seaborgium',
            period: 7,
            symbol: 'Sg',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                32,
                12,
                2
            ]
        },
        '107': {
            atomicMass: 264,
            atomicNumber: 107,
            ionizationEnergy: 0,
            elementGroup: 'transition-metal',
            group: 7,
            name: 'Bohrium',
            period: 7,
            symbol: 'Bh',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                32,
                13,
                2
            ]
        },
        '108': {
            atomicMass: 277,
            atomicNumber: 108,
            ionizationEnergy: 0,
            elementGroup: 'transition-metal',
            group: 8,
            name: 'Hassium',
            period: 7,
            symbol: 'Hs',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                32,
                14,
                2
            ]
        },
        '109': {
            atomicMass: 268,
            atomicNumber: 109,
            ionizationEnergy: 0,
            elementGroup: 'transition-metal',
            group: 9,
            name: 'Meitnerium',
            period: 7,
            symbol: 'Mt',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                32,
                15,
                2
            ]
        },
        '110': {
            atomicMass: 108,
            atomicNumber: 110,
            ionizationEnergy: 0,
            elementGroup: 'transition-metal',
            group: 10,
            name: 'Darmstadtium',
            period: 7,
            symbol: 'Ds',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                32,
                16,
                2
            ]
        },
        '111': {
            atomicMass: 282,
            atomicNumber: 111,
            ionizationEnergy: 0,
            elementGroup: 'transition-metal',
            group: 11,
            name: 'Roentgenium',
            period: 7,
            symbol: 'Rg',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                32,
                17,
                2
            ]
        },
        '112': {
            atomicMass: 285,
            atomicNumber: 112,
            ionizationEnergy: 0,
            elementGroup: 'transition-metal',
            group: 12,
            name: 'Copernicium',
            period: 7,
            symbol: 'Cn',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                32,
                18,
                2
            ]
        },
        '113': {
            atomicMass: 112,
            atomicNumber: 113,
            ionizationEnergy: 0,
            elementGroup: 'metal',
            group: 13,
            name: 'Nihonium/Ununtrium',
            period: 7,
            symbol: 'Nh/Uut',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                32,
                18,
                3
            ]
        },
        '114': {
            atomicMass: 289,
            atomicNumber: 114,
            ionizationEnergy: 0,
            elementGroup: 'metal',
            group: 14,
            name: 'Flerovium',
            period: 7,
            symbol: 'Fl',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                32,
                18,
                4
            ],
            discoveryDate: 1886
        },
        '115': {
            atomicMass: 114,
            atomicNumber: 115,
            ionizationEnergy: 0,
            elementGroup: 'metal',
            group: 15,
            name: 'Moscovium/Ununpentium',
            period: 7,
            symbol: 'Mc/Uup',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                32,
                18,
                5
            ]
        },
        '116': {
            atomicMass: 293,
            atomicNumber: 116,
            ionizationEnergy: 0,
            elementGroup: 'metal',
            group: 16,
            name: 'Livermorium',
            period: 7,
            symbol: 'Lv',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                32,
                18,
                6
            ]
        },
        '117': {
            atomicMass: 116,
            atomicNumber: 117,
            ionizationEnergy: 0,
            elementGroup: 'halogen',
            group: 17,
            name: 'Tennessine/Ununseptium',
            period: 7,
            symbol: 'Ts/Uus',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                32,
                18,
                7
            ]
        },
        '118': {
            atomicMass: 117,
            atomicNumber: 118,
            ionizationEnergy: 0,
            elementGroup: 'noble-gas',
            group: 18,
            name: 'Oganesson/Ununoctium',
            period: 7,
            symbol: 'Og/Uuo',
            electronsPerShell: [
                2,
                8,
                18,
                32,
                32,
                18,
                8
            ]
        }
    }
}