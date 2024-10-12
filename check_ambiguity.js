process.stdin.on('data', input => {
    const nearley = require("nearley");
    const grammar = require("./LaTaX.js");

    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

    try {
        parser.feed(String(input));
        if (parser.results.length > 1) {
            console.log("The grammar is ambiguous.");
        } else {
            console.log("The grammar is not ambiguous.");
        }
    } catch (e) {
        console.error("Error parsing input:", e.message);
    }
});