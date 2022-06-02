
function validate(json) {
    try {
        JSON.parse(json);
        console.log("Valid JSON");
    }catch(e) {
        console.log("Invalid JSON");
    }
}

//valid input
let inp1 = '{"name":"John", "age":30, "car":null}';
validate(inp1)

//invalid input
let inp2 = {"name":"John", "age":30, "car":null};
validate(inp2)




