export default function About() {
    return (
        <section className="informations">
            <article id="descriptionInformation">
                <div className="sectionLocalizacao ">
                    <h1 className="titleinformation">
                    Localização
                    </h1>
                    <p>
                        Olá, aqui você encontrará algumas informações importantes
                        sobre a gente abaixo esta a nossa localização: <br/>
                        <strong className="destaque">
                            Endereço: Rua das Batatas, 123, Bairro das Delícias, Cidade Saborosa, Estado do Paladar, CEP 12345-678
                        </strong>  
                    </p>
                    <iframe src="https://www.google.com/maps" ></iframe>
                </div>
                <div className="sectionContato">
                    <h1 className="titleinformation">Contato</h1>
                    <div>
                        <p>Email: contato@loja.com</p>
                        <p>Telefone: (11) 1234-5678</p>
                        <p>Horário de Funcionamento: Segunda a Domingo, 17:30h às 22h</p>
                    </div>
                </div>
                <div className="sectionSobre">
                    <h1 className="titleinformation">Sobre Nós</h1>
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </article>
        </section>
    )
}