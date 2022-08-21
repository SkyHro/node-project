const download = require('download-git-repo')
const ora = require('ora')

interface DownloadParams {
    template_url: string
    project: string
    config?: Record<string, string | number | boolean>
}

const downloadFn = (params: DownloadParams) => {
    return new Promise((resolve, reject) => {
        const { template_url, project, config = { clone: true } } = params
        const spinner = ora().start()
        spinner.text = 'downloading..'
        download(`direct:${template_url}`, project, config, (err) => {
            if (err) {
                spinner.fail('下载失败')
                return reject(err)
            }
            spinner.succeed('下载成功')

            console.log('DONE: You run')
            console.log(`cd ${project}`)
            console.log('npm install')
            console.log('npm run dev')

            resolve(void 0)
        })
    })
}

export { downloadFn as download }
