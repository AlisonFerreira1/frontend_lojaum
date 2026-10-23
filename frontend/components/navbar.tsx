import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <section className="Navbarcustom">
            <Link href="/home">
                <Image src="/logobattships.png" alt="Logo" width={80} height={50} loading="eager" className="logo" />
            </Link>
            <div className="options">
                <Link href="/menu">Cardapio</Link>
                <Link href="/about">Informações</Link>
            </div>
            <div className="iconsoptions">     
                <button>
                    <Image src="/useraccount.svg" alt="User Account" width={40} height={40} loading="eager" className="icon" />
                </button>
                <button>
                    <Image src="/buycar.svg" alt="Shopping Cart" width={40} height={40} loading="eager" className="icon" />  
                </button>
            </div>
        </section>
    )       
}