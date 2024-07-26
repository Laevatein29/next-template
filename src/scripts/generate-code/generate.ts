//
// @filename - generate.ts
// @authored-by - laevatein29 <liyongchen29@gmail.com>
// @date - 2024-07-15
//
import path from 'node:path'
import fs from 'node:fs'
import type { GenerateConfig, PathConfig } from './types'

export function useListener(config: GenerateConfig) {
  function listener(file: string) {
    return file.includes(path.normalize(config.sourcePath))
      ? generator(file, config)
      : null
  }

  return listener
}

export async function starter(config: GenerateConfig) {
  for await (const element of config.dirs) {
    generateComponentCode({
      sourcePath: config.sourcePath,
      componentPath: element.path,
    })
  }
}

export function generator(file: string, config: GenerateConfig) {
  for (let index = 0; index < config.dirs.length; index++) {
    const dir = config.dirs[index]

    if (file.includes(path.normalize(dir.path))) {
      console.log('include')

      generateComponentCode({
        sourcePath: config.sourcePath,
        componentPath: dir.path,
      })

      return
    }
    else {
      console.log(dir.path)
    }
  }
}

export async function generateComponentCode(config: PathConfig) {
  const { sourcePath, componentPath } = config

  const sourceDirPath = path.join(__dirname, `../../../${sourcePath}${componentPath}`)

  const targetPath = path.join(__dirname, `./${componentPath}.json`)

  try {
    const files = await fs.promises.readdir(sourceDirPath)

    const components: { [key: string]: string } = {
    }

    for (const file of files) {
      const componentName = file

      const componentPath = path.join(sourceDirPath, (`${file}/index.tsx`))

      const content = await fs.promises.readFile(componentPath)

      components[componentName] = content.toString()
    }

    fs.writeFile(targetPath, JSON.stringify(components), () => { })
  }
  catch (_error) {
    console.log('error: please check component path: ', sourceDirPath)
  }
}
