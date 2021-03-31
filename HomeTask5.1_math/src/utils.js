const checkNumberOfArguments = (argarr, name) => {
    if (argarr.length !== 2) {
        throw new Error(`${name} exactly needs 2 arguments`);
    }
}

exports.checkNumberOfArguments = checkNumberOfArguments;