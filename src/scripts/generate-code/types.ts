export interface GenerateDir {
  path: string
  pathPrefix: string | false
}

export interface GenerateConfig {
  sourcePath: string
  dirs: GenerateDir[]
}

export const defaultGenerateConfig: GenerateConfig = {
  sourcePath: 'src/components/',
  dirs: [
    {
      path: 'buttons',
      pathPrefix: false,
    },
    {
      path: 'cards',
      pathPrefix: false,
    },
  ],
}

export interface PathConfig {
  sourcePath: string
  componentPath: string
}
