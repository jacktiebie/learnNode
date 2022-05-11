const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    //console.log(data.toString());
    console.log(data);
})


console.log('Hello....');

fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you.', (err) => {
    if (err) throw err;
    //console.log(data.toString());
    console.log('Write complete');

    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), ' we Modify Text ', (err) => {
        if (err) throw err;
        //console.log(data.toString());
        console.log('Append complete');

        fs.rename(path.join(__dirname, 'files', 'reply.txt'), 'newName.txt', (err) => {
            if (err) throw err;
            //console.log(data.toString());
            console.log('Rename complete');
        })
    })

    
    
})





//exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`Error: ${err}`);
    process.exit(1);
})