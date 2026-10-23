'use client'
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";



export default function Login() {
  
  const routerhome = useRouter();
  
  return (
    <main id="layoutlogin">
      <section className="layoutloginsec">
        <div id="login-left">
          <div className="layouttitle">
            <Image src="/logologin.png" alt="Logo" width={60} height={40} />
            <span>
              <p>Seja bem vindo!</p>
              <p>Batatiships</p>
            </span>
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
          <button type="submit" formMethod="post" id="loginbutton" onClick={() => routerhome.push('/home')}>Sign-in</button>
          
        </div>
        <div id="login-right">
          <span>
            <p>Seja bem vindo ao nosso site!</p>
            <p>
              Aqui voce podera realizar seu pedido com mais facilidade e receber em casa! 
              <br /> <strong>caso ainda nao esteja cadastrado click no botão abaixo e faça ja seu cadastro</strong>
            </p>
          </span>
          <button type="button" >Sign-up</button>
        </div>
      </section>
      <section className="layoutcreated">
        <div>lado um</div>
        <div>lado dois</div>
      </section>
      <footer>

      </footer>
    </main>
  );
}
