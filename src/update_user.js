import { PrismaClient } from "@prisma/client";

const prima = new PrismaClient({log : ['info','query']});

async function updateUser() {
    await prima.user.update({
        where : {
            id : 1
        },
        data : {
            name : 'zaidd2'
        }
    });

}

updateUser()