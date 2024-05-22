// src/config/redirects.tsx

import { Navigate, useLocation } from 'react-router-dom'
import type { Path } from '../router'

const PRIVATE: Path[] = ['/home']

const PUBLIC: Path[] = ['/']

export function Redirects({ children }: { children: React.ReactNode }) {
  const location = useLocation()

  const auth = {
    active: false,
  }

  console.log('location', location)

  const authenticatedOnPublicPath = auth.active && PUBLIC.includes(location.pathname as Path)

  console.log(authenticatedOnPublicPath)

  const unAuthenticatedOnPrivatePath = !auth.active && PRIVATE.includes(location.pathname as Path)

  console.log(unAuthenticatedOnPrivatePath)

  if (authenticatedOnPublicPath)
    return <Navigate to="/home" replace />
  if (unAuthenticatedOnPrivatePath)
    return <Navigate to="/" replace />

  //
  return children
}
