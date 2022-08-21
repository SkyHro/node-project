import { Command } from 'commander'

const help = (program: Command) => {
    program.option('-f --framework <framework>', '设置框架')
}

export { help }
