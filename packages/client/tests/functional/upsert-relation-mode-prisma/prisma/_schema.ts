import { idForProvider } from '../../_utils/idForProvider'
import testMatrix from '../_matrix'

export default testMatrix.setupSchema(({ provider }) => {
  return /* Prisma */ `
      generator client {
        provider = "prisma-client-js"
      }

      datasource db {
        provider = "${provider}"
        url      = env("DATABASE_URI_${provider}")
        relationMode = "prisma"
      }

      model Node {
        id ${idForProvider(provider)}
        identifier Int @unique
        value Int
      }
      `
})
