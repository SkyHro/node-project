const fs = require('fs')

fs.readFile('./file.txt', 'utf-8', (err, file) => {
    if (err) {
        console.log('fail read file.txt')
        throw Error(err)
    }
    console.log('success read file.txt: \n', file)
})
