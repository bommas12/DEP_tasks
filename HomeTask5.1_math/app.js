const args = require('yargs').argv;
const operations = require('./src/operations');

const validOps = Object.keys(operations);
try {
    if (!args.operation) {
        console.error(`
        operation argument needed
        for example: --operation ${validOps}
        `)
        throw new Error(`type of operation not passed`);
    }

    if (!validOps.includes(args.operation)) {
        console.error(`
            Operation ${args.operation} doesn't exist:
            Valid Operations: ${validOps}
        `);
        throw new Error(`Invalid operation`);
    }

    console.log(operations[args.operation](...args._));
}
catch (e) {
    console.error(e.message);
}