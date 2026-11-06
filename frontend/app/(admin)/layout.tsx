import Navbaradmin from "@/hooks/navbaradmin"
export default function RootAdmin ({children}: LayoutProps<"/">){
    return(
        <main>
            <Navbaradmin/>
            {children}
        </main>
    )
}