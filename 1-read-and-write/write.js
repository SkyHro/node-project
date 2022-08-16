const fs = require('fs');


fs.writeFile('./file.txt', '6666', (err) => {
    if (err) {
        console.log('fail write file.txt')
        throw Error(err)
    }
    console.log('success write file.txt')
})
