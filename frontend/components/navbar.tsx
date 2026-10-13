import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <section className="Navbarcustom">
            <Image src="/logobattships.png" alt="Logo" width={80} height={50} loading="eager" className="logo" />
            <div className="options">
                <Link href="/products">Products</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/about">About</Link>
            </div>
            <div>     
                <button>
                    <Image src="/buycart.svg" alt="Cart" width={100} height={30} loading="eager" className="cart-icon" />
                </button>           
            </div>
        </section>
    )       
}