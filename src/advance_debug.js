import { PrismaClient } from "@prisma/client";

const prima = new PrismaClient({log : [{
    emit : "event",
    level : "query"
}]});

async function main(){
    const users = await prima.user.findMany({
        take : 2
    });
};

main()

prima.$on("query",async (e) => {
    console.log(`${e.query} ${e.params}`)
})