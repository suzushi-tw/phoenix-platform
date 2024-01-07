'use server'
import { getAuthSession } from "@/lib/auth";
import { db } from '@/lib/db'

export async function setrole(FormData: FormData) {
    const session = await getAuthSession();
    let password=process.env.ADMIN_SECRET;
    const input = FormData.get("password")?.toString();
    let role;
    if(input==password){
      role="admin";
      if(session){
        await db.user.update({
          where: {
            id: session.user.id,
          },
          data: {
            role: role,
          },
        });
      }
      console.log(session?.user.id+"became admin");
      return { status: 'success', message: "Update successfull" };
    } else {
      return { status: 'error', message: 'Invalid password' };
    }

}

