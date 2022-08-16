const moment = require('moment');
const now = Date.now()
const format = moment(now).format('YYYY-MM-DD HH:mm:ss')



console.log('moment formart date: ', format)