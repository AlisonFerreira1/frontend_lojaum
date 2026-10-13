import Image from "next/image";

export default function Home() {
  return (
    <div id="layoutmain">
      <main>
          <section className="info">
            <div className="description" >
              <h1 className="title">Ola seja bem-vindo!</h1>
              <p className="maindescription">
                Aqui você encontra as melhores opções de babatas fritas, macacheiras fristas, 
                e muito mais! Explore nosso cardápio e descubra o que vai satisfazer 
                seu paladar. Aproveite a experiência de fazer pedidos online de forma rápida e prática.
              </p>
              <strong>Horário de Funcionamento: 17:00PM - 23:00PM </strong>
              <p className="footerdescription">
                No site você pode encontrar a nossa localização, informações de contato e poder saber 
                mais sobre a nossa equipe.
              </p>
            </div>
            <Image src="/logobattships.png" alt="Logo" width={370} height={200} loading="eager" className="logo" />
          </section>
      </main>
    </div>
  );
}
