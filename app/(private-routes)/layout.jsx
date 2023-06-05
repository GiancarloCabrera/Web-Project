import ResponsiveDrawer from "../../components/Drawer";

export default async function PrivateRoutesLayout({children}) {    
    return (
     <div>
          <ResponsiveDrawer>
            {children}
          </ResponsiveDrawer>
          
      </div>
    )
}