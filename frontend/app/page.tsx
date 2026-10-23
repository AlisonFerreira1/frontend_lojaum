'use client'
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";



export default function Login() {
  
  const [zlayout, setzlayout] = useState(false)
  const routerhome = useRouter();
  
  return (
    <main id="layoutlogin">
      <section className={zlayout ? 'layoutloginsec' : 'layoutloginsec zlayoutfront' } >
        <div className="login-left">
          <div className="layouttitle">
            <Image src="/logologin.png" alt="Logo" width={60} height={40} />
            <h2>Batatiships</h2>
          </div>
          <div className="layoutinput">
            <input type="email" placeholder="Email" />
            <input type="password" name="keypass" id="passwordkey" placeholder="Password" />
            <div className="layoutinputbox">
              <label>
                <input type="checkbox" name="" id="" />
                Remenber me
              </label>
              <Link href="">Forgot password</Link>
            </div>
          </div>
          <button type="submit" formMethod="post" className="loginbutton" onClick={() => routerhome.push('/home')}>Sign-in</button>
        </div>
        <div className="login-right">
          <h1 className="titulo">Olá, seja bem-vindo!</h1>
          <span>
            Aqui seus pedidos ficam mais simples e chegam direto na sua casa.
            <br /> <strong>Ainda não faz parte? Crie sua conta e aproveite.</strong>
          </span>
          <button type="button" className="loginbutton" onClick={() => setzlayout(true)}>Sign-up</button>
        </div>
      </section>
      <section className={zlayout ? 'layoutcreated zlayoutfront' : 'layoutcreated' } >
        <div className="login-left">
          <h1 className="titulo">Bem-vindo de volta!</h1>
          <span>
            Faça login para ver o que há de novo, acompanhar seus pedidos e receber suas compras sem sair do sofá.
            <br /> <strong>Ja faz parte? Click aqui para logar.</strong>
          </span>
          <button type="button" className="loginbutton" onClick={() => setzlayout(false)} >Sign-up</button>
        </div>
        <div className="login-right">

          <div>
            <div className="layoutinput">
              <input type="text" placeholder="Nome completo"/>
              <input type="text" placeholder="Nome de usuario"/>
              <input type="email" placeholder="Email" />
              <input type="password" name="keypass" id="passwordkey" placeholder="Password" />
            </div>
          </div>
            <button type="submit" formMethod="post" className="loginbutton" onClick={() => routerhome.push('/home')}>Sign-in</button>
        </div>
      </section>
      <footer>

      </footer>
    </main>
  );
}
