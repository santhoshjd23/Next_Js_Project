import { PrismaClient } from "@prisma/client";
export default async function handler(req, res){
    //to perfom some db inserting process
    const first = req.body.first;
    const last = req.body.last;
    console.log("Hi "+first);
    const primsa = new PrismaClient();
    const user = await primsa.user.create({
        data:{
            "first_name" : first,
            "last_name" : last
        }
    });
    console.log(JSON.stringify(user));
    if(null != user) res.status(200).json({message: "Data stored"});
    else res.status(200).json({message: "Data not stored"});
}