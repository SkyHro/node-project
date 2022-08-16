#! /usr/bin/env node

const [execPath, path, ...args] = process.argv
const [arg0, arg1] = args

if (arg0 === '--help' || arg0 === '-h') {
    console.log('This is help commond')
}