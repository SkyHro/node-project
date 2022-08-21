#! /usr/bin/env ts-node
// [commander 模块使用文档](https://github.com/tj/commander.js/blob/master/Readme_zh-CN.md#typescript)
import { Command } from 'commander'
import { help } from '../lib/core/help'
import { commander } from '../lib/core/commander'
const program = new Command()

//* 获取参数
// const [execPath, path, ...args] = process.argv
// const [arg0, arg1] = args

help(program)
commander(program)

program.parse(process.argv)
