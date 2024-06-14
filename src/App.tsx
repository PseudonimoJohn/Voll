import "./App.css";
import "./index.css";
import Cabecalho from "./components/cabecalho";
import Container from "./components/container";
import Titulo from "./components/titulo";
import Rodape from "./components/rodape"
import Tabela from "./components/tabela";
import useDadosConsulta from "./useDadosConsulta";
import Grafico from "./components/grafico";
import useDadosProfissionais from "./useDadosProfissionais";
import Avaliacao from "./components/avaliacao";
import Botao from "./components/botao";
import Subtitulo from "./components/subtitulo";


function App() {

  const { dados: consultas, erro: consultasErro } = useDadosConsulta();
  const { dados: profissionais, erro: profissionaisErro } = useDadosProfissionais();

  if (consultasErro || profissionaisErro) {
    console.log("Ocorreu um erro na requisição")
  }
  return (
    <>

      <Cabecalho />
      <Container>
        <Titulo>Área Administrativa</Titulo>

        <Botao>Cadastrar especialista</Botao>
        <Subtitulo>Consultas do dia</Subtitulo>
    
        <Tabela consultas={consultas} />
        <Botao>Ver mais</Botao>

        <Subtitulo>Consultas mensais por especialista</Subtitulo>
        <Grafico consultas={consultas} profissionais={profissionais} />

        <Subtitulo>Avaliações de especialistas</Subtitulo>
        <Avaliacao profissionais={profissionais} />
      </Container>
      <Rodape />

    </>
  );
}

export default App;
