import { PrismaClient } from "@prisma/client"

export default function Fetch({lastCreatedUser, allUsers}){
    //data retrieval process
    console.log(allUsers);
    return (
        <>
        <div>
        <p>Thanks for submitting this form.</p>
        <p> Please find below the submitted details which are retrieved from DB</p>
        <div> 
            <h1> Last created user:</h1>
            <p>{lastCreatedUser.first_name +" "+lastCreatedUser.last_name }</p>
        </div>
        <div> 
            <h1 style={{ color: "red"}}> All Users in DB:</h1>
            <p>{JSON.stringify(allUsers)}</p>
        </div>
        </div>
        </>
    )
}

export async function getServerSideProps(){
     const primsa = new PrismaClient();
     const lastCreatedUser = await primsa.user.findFirst(
        {
            take : -1
        }
     );
     const allUsers = await primsa.user.findMany();
     console.log("all users : "+JSON.stringify(allUsers));
     return {
        props: {
            lastCreatedUser, allUsers
        }
     };
     
}