'use-client'
import ResponsiveDrawer from "@/components/Drawer";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";

export default async function PrivateRoutesLayout({children}) {    
  const session = await getServerSession()
  // const router = useRouter();
console.log('hola', session);
  // if (status === 'unauthenticated'){
  //   router.push('/auth')
  // }
    return (
     <div>
          <ResponsiveDrawer>
            {children}
          </ResponsiveDrawer>
          
      </div>
    )
}