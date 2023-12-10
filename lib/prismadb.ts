/* eslint-disable no-var */
/* eslint-disable no-unused-vars */
// import { PrismaClient } from '@prisma/client'

// declare global {
//     var prisma: PrismaClient | undefined
// }

// const prismadb = globalThis.prisma || new PrismaClient()
// if (process.env.NODE_ENV !== 'production') globalThis.prisma = prismadb

// export default prismadb

import { PrismaClient } from '@prisma/client'

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices

// let prisma: PrismaClient

// if (process.env.NODE_ENV === 'production') {
//   prisma = new PrismaClient()
// } else {
//   if (!global.prisma) {
//     global.prisma = new PrismaClient()
//   }
//   prisma = global.prisma
// }
// export default prisma

// Con este codigo funciona bien

declare const global: {
  prisma?: PrismaClient;
}

let prisma: PrismaClient

if (!global.prisma) {
  global.prisma = new PrismaClient()
}

export default prisma = global.prisma
