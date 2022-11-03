// nullish operator its used to default value to certain things:// 

function getUserDefinedSettings() {
    return {
        difficulty: "easy",
        startingCash : 0
    };
}

const cash = getUserDefinedSettings().startingCash ?? 500; 

console.log(cash);

