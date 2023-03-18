import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'


const Formulario = () => {
    return (
        <section className="formulario" >
            <form>
                <h2>Preencha os dados para criar o card do colaborador </h2>
            <CampoTexto label="Nome:" placeholder="Digite seu Nome "/>
            <CampoTexto label="Cargo:" placeholder="Digite seu Cargo"/>
            <CampoTexto label="Imagem:" placeholder="Digite o Endereço da Imagem"/>
            </form>
        </section>
    )

}

export default Formulario