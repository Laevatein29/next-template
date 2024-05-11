import type { ActionFunction, LoaderFunction } from 'react-router'

interface Module { default: Element, Loader?: LoaderFunction, Action?: ActionFunction, Catch?: Element, Pending?: Element }
const PRESERVED = import.meta.glob<Module>('/src/pages/(_app|404).{jsx,tsx}', { eager: true })

const MODALS = import.meta.glob<Pick<Module, 'default'>>('/src/pages/**/[+]*.{jsx,tsx}', { eager: true })

const ROUTES = import.meta.glob<Module>(['/src/pages/**/[\\w[-]*.{jsx,tsx,mdx}', '!**/(_!(layout)*(/*)?|_app|404)*'], {
  eager: true,
})

export default function Routes() {
  return {
    PRESERVED,
    MODALS,
    ROUTES,
  }
}
