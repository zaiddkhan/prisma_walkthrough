import { PrismaClient } from "@prisma/client";

const prima = new PrismaClient({log : ['info','query']});

async function main(){
    let res = await prima.post.findMany({
        take : 2,
        skip : 0
    });

    console.log(res)
}

main()