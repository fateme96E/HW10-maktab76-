// What do you think? Will the .catch trigger? Explain your answer.
new Promise(function(resolve, reject) {
    setTimeout(() => {
        throw new Error("Whoops!");
    }, 1000);
}).catch(alert)

//the error is not generated when promise is executing, and it is generated later, so promise do not handle it and we can say that is is ignored by promise.
