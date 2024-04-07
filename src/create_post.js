import { PrismaClient } from "@prisma/client";

const prima = new PrismaClient({log : ['info','query']});

async function main(){
    await prima.post.create({
        data : {
            title : "post 2",
            desc : "description of post 2",
            user : {
                connect : {
                    id : 1
                }
            }
        }
    })
}

main()