import { PrismaClient } from "@prisma/client";

const prima = new PrismaClient({log : ['info','query']});

async function getFilteredUsers() {
    let res = await prima.user.findMany(
        {
            where : {
                email : {
                    endsWith : "gmail.com"
                },

            },
            include : {
                posts : true
            }
        }
    )
    console.log(JSON.stringify(res))
}

getFilteredUsers();