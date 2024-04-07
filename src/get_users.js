import { PrismaClient } from "@prisma/client";

const prima = new PrismaClient({ log : ['info','query']});

async function main() {
    const users = await prima.user.findMany({});
    console.log(users)
    const user = await prima.user.findUnique({
        where : {
            id : 1
        },
        include : {
            posts : true
        }
    });
    console.log(user)
}
main()