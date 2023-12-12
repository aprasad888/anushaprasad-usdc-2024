/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    let result = {
        "SearchTerm": searchTerm,
        "Results": []
    };

    for (const textObj of scannedTextObj) {
        for (const scan of textObj["Content"]) {
            const text = scan["Text"];
            if ((text === "" && searchTerm === "") || (searchTerm !== "" && text.includes(searchTerm))) {
                result["Results"].push({
                    "ISBN": textObj["ISBN"], 
                    "Page": scan["Page"], 
                    "Line": scan["Line"]
                });
            }
        }
    }
    
    return result; 
}

/* * * * * * * * * * * * */
/* TESTING INPUT OBJECTS: */
/* * * * * * * * * * * * */
/* * * * * * * * * * * * * * * inputs containing scans from one book * * * * * * * * * * * * * * * * * * * */
/* inputs containing scans from "Twenty Thousand Leagues Under the Sea" */
const twentyLeaguesIn_1 = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum. The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
];
const twentyLeaguesIn_2 = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [] 
    }
];
const twentyLeaguesIn_3 = [];
const twentyLeaguesIn_4 = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum. The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "thethe thethethethe"
            } 
        ] 
    }
];
/* inputs containing scans from "Coraline" */
const coralineIn_1 = [ 
    {
        "Title": "Coraline",
        "ISBN": "9780380807345",
        "Content": [
            {
                "Page": 8,
                "Line": 11,
                "Text": "t-t-t-t-t-t. She sat up in bed."
            },
            {
                "Page": 8,
                "Line": 12,
                "Text": "Something went kreeee. . ."
            },
            {
                "Page": 8,
                "Line": 13,
                "Text": "                          . . . aaaak"
            } 
        ]
    }
];
const coralineIn_2 = [ 
    {
        "Title": "Coraline",
        "ISBN": "9780380807345",
        "Content": [
            {
                "Page": 10,
                "Line": 2,
                "Text": ""
            } 
        ]
    }
];
/* input containing scan from "Short Stories in French for Beginners" */
const frenchIn_1 = [
    {
        "Title": "Short Stories in French for Beginners",
        "ISBN": "9781473683433",
        "Content": [
            {
                "Page": 4,
                "Line": 1,
                "Text": "Mon père, Arthur, est poète. Il est auteur de plusieurs"
            } 
        ]
    }
];
/* * * * * * * * * * * * * * * input containing scans from multiple books * * * * * * * * * * * * * * * * * * * */
/* contains scans from both "Twenty Thousand Leagues Under the Sea" and "Coraline" */
const mixedTextIn_1 = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum. The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ]
    }, 
    {
        "Title": "Coraline",
        "ISBN": "9780380807345",
        "Content": [
            {
                "Page": 17,
                "Line": 4,
                "Text": "Miss Forcible looked at Miss Spink, picked up her knit-"
            },
            {
                "Page": 25,
                "Line": 9,
                "Text": "a patch of darkness. \"No,\" he agreed. \"I am not. But I take"
            },
            {
                "Page": 25,
                "Line": 10,
                "Text": "Mrs. Owens\'s point.\""
            } 
        ]
    }
];
    
/* * * * * * * * * * * * */
/* TESTING OUTPUT OBJECTS: */
/* * * * * * * * * * * * */
/* * * * * * * * * * * * * * * outputs for one book * * * * * * * * * * * * * * * * * * * */
/* outputs for "Twenty Thousand Leagues Under the Sea" */
const twentyLeaguesOut_1 = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
};
const twentyLeaguesOut_2 = {
    "SearchTerm": "The",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        }
    ]
};
const twentyLeaguesOut_3 = {
    "SearchTerm": "the",
    "Results": []
};
const twentyLeaguesOut_4 = {
    "SearchTerm": "and",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        },
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 10
        }
    ]
};
const twentyLeaguesOut_5 = {
    "SearchTerm": "-",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        }
    ]
};
const twentyLeaguesOut_6 = {
    "SearchTerm": "\'",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
};
const twentyLeaguesOut_7 = {
    "SearchTerm": "t o",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        }
    ]
};
const twentyLeaguesOut_8 = {
    "SearchTerm": " to ",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 10
        }
    ]
};
const twentyLeaguesOut_9 = {
    "SearchTerm": "apples",
    "Results": []
};
const twentyLeaguesOut_10 = {
    "SearchTerm": "\n",
    "Results": []
};
const twentyLeaguesOut_11 = {
    "SearchTerm": "%",
    "Results": []
};
/* outputs for "Coraline" */
const coralineOut_1 = {
    "SearchTerm": ". . .",
    "Results": [
        {
            "ISBN": "9780380807345",
            "Page": 8,
            "Line": 12
        },
        {
            "ISBN": "9780380807345",
            "Page": 8,
            "Line": 13
        }
    ]
};
const coralineOut_2 = {
    "SearchTerm": "",
    "Results": [
        {
            "ISBN": "9780380807345",
            "Page": 10,
            "Line": 2
        }
    ]
};
/* outputs for "Short Stories in French for Beginners" */
const frenchOut_1 = {
    "SearchTerm": "è",
    "Results": [
        {
            "ISBN": "9781473683433",
            "Page": 4,
            "Line": 1
        }
    ]
};
const frenchOut_2 = {
    "SearchTerm": "ç",
    "Results": []
};
const frenchOut_3 = {
    "SearchTerm": "É",
    "Results": []
};
/* * * * * * * * * * * * * * * outputs for multiple books * * * * * * * * * * * * * * * * * * * */
/* outputs for both "Twenty Thousand Leagues Under the Sea" and "Coraline" */
const mixedTextOut_1 = {
    "SearchTerm": "I",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 10
        }, 
        {
            "ISBN": "9780380807345",
            "Page": 25,
            "Line": 9
        }
    ]
};
const mixedTextOut_2 = {
    "SearchTerm": "\'",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }, 
        {
            "ISBN": "9780380807345",
            "Page": 25,
            "Line": 10
        }
    ]
};
const mixedTextOut_3 = {
    "SearchTerm": "\"",
    "Results": [
        {
            "ISBN": "9780380807345",
            "Page": 25,
            "Line": 9
        },
        {
            "ISBN": "9780380807345",
            "Page": 25,
            "Line": 10
        }
    ]
};

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/* * * * * * * * * * * /
/* POSITIVE MATCHES TESTS */
/* * * * * * * * * * * /
/* We check for a searchTerm that will return a match. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn_1);
if (JSON.stringify(twentyLeaguesOut_1) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut_1);
    console.log("Received:", test1result);
}

/* We check for a searchTerm that is in multiple lines of scanned text for one book (with matches). */
const test2result = findSearchTermInBooks("and", twentyLeaguesIn_1);
if (JSON.stringify(twentyLeaguesOut_4) === JSON.stringify(test2result)) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut_4);
    console.log("Received:", test2result);
}

/* We check for a special character with a match. */
const test3result = findSearchTermInBooks("-", twentyLeaguesIn_1);
if (JSON.stringify(twentyLeaguesOut_5) === JSON.stringify(test3result)) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", twentyLeaguesOut_5);
    console.log("Received:", test3result);
}

/* We check for an escape character with a match. */
const test4result = findSearchTermInBooks("\'", twentyLeaguesIn_1);
if (JSON.stringify(twentyLeaguesOut_6) === JSON.stringify(test4result)) {
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", twentyLeaguesOut_6);
    console.log("Received:", test4result);
}

/* We check for spacing between characters with a match. */
const test5result = findSearchTermInBooks("t o", twentyLeaguesIn_1);
if (JSON.stringify(twentyLeaguesOut_7) === JSON.stringify(test5result)) {
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected:", twentyLeaguesOut_7);
    console.log("Received:", test5result);
}

/* We check for characters between spacing with a match. */
const test6result = findSearchTermInBooks(" to ", twentyLeaguesIn_1);
if (JSON.stringify(twentyLeaguesOut_8) === JSON.stringify(test6result)) {
    console.log("PASS: Test 6");
} else {
    console.log("FAIL: Test 6");
    console.log("Expected:", twentyLeaguesOut_8);
    console.log("Received:", test10result);
}

/* We check for a searchTerm across multiple books that have been scanned (with matches). */
const test7result = findSearchTermInBooks("I", mixedTextIn_1);
if (JSON.stringify(mixedTextOut_1) === JSON.stringify(test7result)) {
    console.log("PASS: Test 7");
} else {
    console.log("FAIL: Test 7");
    console.log("Expected:", mixedTextOut_1);
    console.log("Received:", test7result);
}

/* We check for an escape character (i.e. single quote) across multiple books that have been scanned (with matches). */
const test8result = findSearchTermInBooks("\'", mixedTextIn_1);
if (JSON.stringify(mixedTextOut_2) === JSON.stringify(test8result)) {
    console.log("PASS: Test 8");
} else {
    console.log("FAIL: Test 8");
    console.log("Expected:", mixedTextOut_2);
    console.log("Received:", test8result);
}

/* We check for an escape character (i.e. double quotes) across multiple books that have been scanned (with matches). */
const test9result = findSearchTermInBooks("\"", mixedTextIn_1);
if (JSON.stringify(mixedTextOut_3) === JSON.stringify(test9result)) {
    console.log("PASS: Test 9");
} else {
    console.log("FAIL: Test 9");
    console.log("Expected:", mixedTextOut_3);
    console.log("Received:", test9result);
}

/* We check for spacing between special characters with matches. */
const test10result = findSearchTermInBooks(". . .", coralineIn_1);
if (JSON.stringify(coralineOut_1) === JSON.stringify(test10result)) {
    console.log("PASS: Test 10");
} else {
    console.log("FAIL: Test 10");
    console.log("Expected:", coralineOut_1);
    console.log("Received:", test10result);
}

/* We check for empty strings/lines with a match */
const test11result = findSearchTermInBooks("", coralineIn_2);
if (JSON.stringify(coralineOut_2) === JSON.stringify(test11result)) {
    console.log("PASS: Test 11");
} else {
    console.log("FAIL: Test 11");
    console.log("Expected:", coralineOut_2);
    console.log("Received:", test11result);
}

/* We check for a searchTerm in a foreign language (i.e. French) book that was scanned and has a match. */
const test12result = findSearchTermInBooks("è", frenchIn_1);
if (JSON.stringify(frenchOut_1) === JSON.stringify(test12result)) {
    console.log("PASS: Test 12");
} else {
    console.log("FAIL: Test 12");
    console.log("Expected:", frenchOut_1);
    console.log("Received:", test12result);
}


/* * * * * * * * * * * /
/* NEGATIVE MATCHES TESTS */
/* * * * * * * * * * * /
/* We check for a searchTerm when there is no content scanned for a book (with no matches). */
const test13result = findSearchTermInBooks("the", twentyLeaguesIn_2);
if (JSON.stringify(twentyLeaguesOut_3) === JSON.stringify(test13result)) {
    console.log("PASS: Test 13");
} else {
    console.log("FAIL: Test 13");
    console.log("Expected:", twentyLeaguesOut_3);
    console.log("Received:", test13result);
}

/* We check for a searchTerm when there are no scanned books (with no matches). */
const test14result = findSearchTermInBooks("the", twentyLeaguesIn_3);
if (JSON.stringify(twentyLeaguesOut_3) === JSON.stringify(test14result)) {
    console.log("PASS: Test 14");
} else {
    console.log("FAIL: Test 14");
    console.log("Expected:", twentyLeaguesOut_3);
    console.log("Received:", test14result);
}

/* We check for a searchTerm that will return no matches. */
const test15result = findSearchTermInBooks("apples", twentyLeaguesIn_1);
if (JSON.stringify(twentyLeaguesOut_9) === JSON.stringify(test15result)) {
    console.log("PASS: Test 15");
} else {
    console.log("FAIL: Test 15");
    console.log("Expected:", twentyLeaguesOut_9);
    console.log("Received:", test15result);
}

/* We check for a searchTerm in a foreign language (i.e. French) book that was scanned and has no matches. */
const test16result = findSearchTermInBooks("ç", frenchIn_1);
if (JSON.stringify(frenchOut_2) === JSON.stringify(test16result)) {
    console.log("PASS: Test 16");
} else {
    console.log("FAIL: Test 16");
    console.log("Expected:", frenchOut_2);
    console.log("Received:", test16result);
}

/* We check for an escape character with no matches. */
const test17result = findSearchTermInBooks("\n", twentyLeaguesIn_1);
if (JSON.stringify(twentyLeaguesOut_10) === JSON.stringify(test17result)) {
    console.log("PASS: Test 17");
} else {
    console.log("FAIL: Test 17");
    console.log("Expected:", twentyLeaguesOut_10);
    console.log("Received:", test17result);
}

/* We check for a special character with no matches. */
const test18result = findSearchTermInBooks("%", twentyLeaguesIn_1);
if (JSON.stringify(twentyLeaguesOut_11) === JSON.stringify(test18result)) {
    console.log("PASS: Test 18");
} else {
    console.log("FAIL: Test 18");
    console.log("Expected:", twentyLeaguesOut_11);
    console.log("Received:", test17result);
}


/* * * * * * * * * * * /
/* CASE-SENSITIVE MATCHES TESTS */
/* * * * * * * * * * * /
/* We check for case-sensitivity (using The vs. the) with a match. */
const test19result = findSearchTermInBooks("The", twentyLeaguesIn_1);
if (JSON.stringify(twentyLeaguesOut_2) === JSON.stringify(test19result)) {
    console.log("PASS: Test 19");
} else {
    console.log("FAIL: Test 19");
    console.log("Expected:", twentyLeaguesOut_2);
    console.log("Received:", test19result);
}

/** We check for case-sensitivity in a foreign language (i.e. French) with no matches. */
const test20result = findSearchTermInBooks("É", frenchIn_1);
if (JSON.stringify(frenchOut_3) === JSON.stringify(test20result)) {
    console.log("PASS: Test 20");
} else {
    console.log("FAIL: Test 20");
    console.log("Expected:", frenchOut_3);
    console.log("Received:", test20result);
}


/* * * * * * * * * * * /
/* SPECIAL-CASE MATCHES TESTS */
/* * * * * * * * * * * /
/* We check that we get the correct number of results. */
const test21result = findSearchTermInBooks("the", twentyLeaguesIn_1); 
if (test21result.Results.length == 1) {
    console.log("PASS: Test 21");
} else {
    console.log("FAIL: Test 21");
    console.log("Expected:", twentyLeaguesOut_1.Results.length);
    console.log("Received:", test21result.Results.length);
}