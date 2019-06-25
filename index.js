//Load external resources
const {showHelp} = require('./messaging');

// Handle input
const args = process.argv.slice(2);

if(args.includes('--help')) {
    showHelp();
}

console.log(args);
