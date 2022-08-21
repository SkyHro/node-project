const inquirer = require('inquirer')
import { download } from './download'
import { config } from '../../config'

export const action = {
    create: async (project: string, options?: string[]) => {
        console.log('create project', project)
        console.log('create options', options)

        try {
            const { frameworks } = config
            const { framework } = await inquirer.prompt([
                {
                    type: 'list',
                    choices: frameworks.map((framework) => framework.key),
                    name: 'framework',
                    message: '请选择需要的框架'
                }
            ])

            // 获取模板下载地址
            const template_url = frameworks.find((item) => item.key === framework)?.template_url
            if (!template_url) {
                throw Error(`not direct template_url, current is ${template_url}`)
            }

            // 下载模板
            await download({ template_url, project })
        } catch (err) {
            throw Error(err)
        }
    }
}
