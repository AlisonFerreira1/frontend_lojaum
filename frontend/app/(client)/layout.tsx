import Navbar from "@/components/navbar"
export default function RootClient ({children}: LayoutProps<"/">){
    return(
        <main>
            <Navbar/>
            {children}
        </main>
    )
}