import { Command } from 'commander'
import { action } from './action'
const { create } = action

const commander = (program: Command) => {
    program
        .command('create <project> [option...]')
        .alias('crt')
        .description('创建项目')
        .action(create)
}

export { commander }
