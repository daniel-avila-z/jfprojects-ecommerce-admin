// import { authMiddleware } from '@clerk/nextjs'

// export default authMiddleware({
//   publicRoutes: ['/']
//   // ignoredRoutes: ['/((?!api|trpc))(_next.*|.+\.[\w]+$)', '/']
// })

// export const config = {
//   matcher: ['/((?!.*\\..*|_next).*)', '/']
// }

import { authMiddleware } from '@clerk/nextjs'

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
}