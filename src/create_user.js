import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({ log : ['info','query']})

async function main() {
    await prisma.user.create({
        data : {
            email : 'zaiddkhaan@gmail.com',
            name : "zaid"
        }

    })
}

main()
.then(
    async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        await prisma.$disconnect()
    })