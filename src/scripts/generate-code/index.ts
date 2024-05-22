import type { Plugin } from 'vite'
import { starter, useListener } from './generate'
import type { GenerateConfig } from './types'
import { defaultGenerateConfig } from './types'

export default function GenerateCode(config: GenerateConfig = defaultGenerateConfig): Plugin {
  // console.log('config', config)
  // const componentsPath = 'src/components/buttons'

  // const files = fs.readdirSync(componentsPath)
  //
  // files.forEach((fi) => {
  //   if (fs.statSync(path.join(componentsPath, fi)).isDirectory() && fs.existsSync(path.join(componentsPath, fi, 'index.tsx')))
  //     console.log('fi', fi)
  // })

  const listener = useListener(config)

  return {
    name: 'generate-code',
    configureServer(server) {
      server.watcher.on('add', listener)
      server.watcher.on('change', listener)
      server.watcher.on('unlink', listener)
    },
    buildStart(): Promise<void> {
      return starter(config)
    },
  }
}
