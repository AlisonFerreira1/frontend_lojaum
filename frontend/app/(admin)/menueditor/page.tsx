import Image from "next/image";

export default function menueditor(){
    return(
        <main id="layoutdashboard">
            <div id="layoutform">
                <section id="forms">
                    <form className="formulario" action="" autoComplete="off" name="cadastro" encType="application/x-www-form-urlencoded" target="_self" method="post">
                        <div className="inputimgdiv">
                            <input className="inputimg" type="file" alt="item" accept="image/*" />
                        </div>
                        <div className="inputnome">
                            <label htmlFor="">Nome: </label>
                            <input type="text" name="item" placeholder=" Nome do item" required/>
                        </div>
                        <div className="inputpreco">
                            <label htmlFor="">Preço: </label>
                            <input type="numeric" name="price" placeholder=" valor do item" />
                        </div>
                        <div className="inputstatus">
                            <select name="status" id="status">
                                <option value="">Status do item</option>
                                <option value="ativo">ativo</option>
                                <option value="desativado">desativado</option>
                            </select>
                        </div>
                        <div className="inputdescricao">
                            <label htmlFor="">Descrição:</label>
                            <textarea name="descricao" placeholder="Digite aqui a descriçao do item!">
                            </textarea>
                        </div>
                        <button className="botaocadastroitem" type="submit">Enviar</button>
                    </form>
                </section>
                <section id="listf">
                    <div className="layoutlist">
                        <div className="menulist">
                            <div className="imgitem">
                                <Image src="/iconcam.svg" alt="item" width={120} height={100} />
                            </div>
                            <h1>Batata Frita</h1>
                            <button className="botaocadastroitem" type="submit">Editar</button>
                            <p className="statuscard">&bull; Ativo</p>
                            <p className="descrisao">"Feita com batatas frescas e fritadas em oleo!<br/>Ps:não são ultilizada batatas industrializadas"</p>
                            <p className="preco">Preço: R$ 15,00</p>
                            <p>Gramas: 200g</p>
                        </div>
                        <div className="menulist">
                            <div className="imgitem">
                                <Image src="/iconcam.svg" alt="item" width={120} height={100} />
                            </div>
                            <h1>Batata Frita</h1>
                            <button className="botaocadastroitem" type="submit">Editar</button>
                            <p className="statuscard">&bull; Ativo</p>
                            <p className="descrisao">"Feita com batatas frescas e fritadas em oleo!<br/>Ps:não são ultilizada batatas industrializadas"</p>
                            <p className="preco">Preço: R$ 15,00</p>
                            <p>Gramas: 200g</p>
                        </div>
                        <div className="menulist">
                            <div className="imgitem">
                                <Image src="/iconcam.svg" alt="item" width={120} height={100} />
                            </div>
                            <h1>Batata Frita</h1>
                            <button className="botaocadastroitem" type="submit">Editar</button>
                            <p className="statuscard">&bull; Ativo</p>
                            <p className="descrisao">"Feita com batatas frescas e fritadas em oleo!<br/>Ps:não são ultilizada batatas industrializadas"</p>
                            <p className="preco">Preço: R$ 15,00</p>
                            <p>Gramas: 200g</p>
                        </div>
                        <div className="menulist">
                            <div className="imgitem">
                                <Image src="/iconcam.svg" alt="item" width={120} height={100} />
                            </div>
                            <h1>Batata Frita</h1>
                            <button className="botaocadastroitem" type="submit">Editar</button>
                            <p className="statuscard">&bull; Ativo</p>
                            <p className="descrisao">"Feita com batatas frescas e fritadas em oleo!<br/>Ps:não são ultilizada batatas industrializadas"</p>
                            <p className="preco">Preço: R$ 15,00</p>
                            <p>Gramas: 200g</p>
                        </div>
                        <div className="menulist">
                            <div className="imgitem">
                                <Image src="/iconcam.svg" alt="item" width={120} height={100} />
                            </div>
                            <h1>Batata Frita</h1>
                            <button className="botaocadastroitem" type="submit">Editar</button>
                            <p className="statuscard">&bull; Ativo</p>
                            <p className="descrisao">"Feita com batatas frescas e fritadas em oleo!<br/>Ps:não são ultilizada batatas industrializadas"</p>
                            <p className="preco">Preço: R$ 15,00</p>
                            <p>Gramas: 200g</p>
                        </div>
                       
                    </div>
                </section>
            </div>
        </main>
    )
}