import ResponsiveDrawer from "@/components/Drawer";

export default function PrivateRoutesLayout({children}) {    
    return (
     <div>
          <ResponsiveDrawer>
            {children}
          </ResponsiveDrawer>
          
      </div>
    )
}