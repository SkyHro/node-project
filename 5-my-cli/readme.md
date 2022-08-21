1. 创建 `bin` 目录，并创建 cli.ts 文件
2. 执行 `yarn init` 初始化项目
3. 打开 `package.json` 文件, 添加 `bin` 选项
    ```ts
        {
            "bin": {
                "my-cli": "bin/cli.ts"
            }
        }
    ```
4. 执行 `yarn link` 将命令挂载到全局命令下，成功后显示以下提示信息
    ```ts
    $ yarn link v1.22.19
    $ success Registered "my-cli".
    $ info You can now run `yarn link "my-cli"` in the projects where you want to use this package and it will be used instead.
    $ Done in 0.06s.
    ```
5. 不同代码运行环境安装不同的环境
   - `node` 运行环境: [安装地址](https://nodejs.org/zh-cn/)
   - `ts-node` 运行环境: 全局安装 ts-node 环境，`yarn global add ts-node`
6. 修改 `bin - cli.ts` 文件
    ```ts
    #! /usr/bin/env node 或 #! /usr/bin/env ts-node
    // 第一行指定命令运环境

    // 获取命令行中的参数
    process.argv
    
    // commander 模块可以快捷实现命令行工具，安装: yarn add commander -S
    const { program } = require('commander') // commomjs
    import { Command } from 'commander' // ts
    const program = new Command()
    
    ```