const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8')
        console.log(data)
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data)
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), 'Nice to meet you.')
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'))
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8')
        console.log(newData)
    } catch (err) {
        console.error(err)
    }
}


fileOps();

console.log('Hello....');
/*
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
*/





//exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`Error: ${err}`);
    process.exit(1);
})