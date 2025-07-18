import { usersTable } from "@/config/schema";
import { currentUser, EmailAddress } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
  const user = await currentUser();
  try{
    //@ts-ignore
 const users = await db.select().from (usersTable).where
 //@ts-ignore
 (eq(usersTable.email, user?.primaryEmailAddress))

  if(users.length == 0){
    //@ts-ignore
    const result = await db . insert(usersTable).values({
    EmailAddress: user?.primaryEmailAddress?.emailAddress,
    name: user?.fullName,
    credits : 10 
    }).returning({usersTable})
    return NextResponse.json(result)
  }
  return NextResponse.json(users[0])
  
  } catch(e){
       return NextResponse.json(e)
  }
}