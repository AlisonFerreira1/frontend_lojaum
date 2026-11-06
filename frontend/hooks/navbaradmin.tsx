import Image from "next/image";
import Link from "next/link";

export default function Navbaradmin() {
    return (
        <section className="Navbarcustom">
            <Image src="/logobattships.png" alt="Logo" width={80} height={50} loading="eager" className="logo" />
            <div className="options">
                <Link href="/grafic">Graficos</Link>
                <Link href="/menueditor">Menu</Link>
                <Link href="/analytics">Analitico</Link>
            </div>
            <div className="iconsoptions">     
                <button>
                    aliamenteo
                </button>
                <button>
                    aliamento 
                </button>
            </div>
        </section>
    )       
}