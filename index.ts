

function initialFunction(message: string) {
    console.log('initialFunction: ', message);
}

const userInput = process.argv[2]

if(userInput){    
    initialFunction(userInput)
}
