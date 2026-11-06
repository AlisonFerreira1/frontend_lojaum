import Navbar from "@/hooks/navbar"
export default function RootClient ({children}: LayoutProps<"/">){
    return(
        <main>
            <Navbar/>
            {children}
        </main>
    )
}