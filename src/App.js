import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [pageFlow, setPageFlow] = useState(1);

  const [nome, setNome] = useState('')
  const [foto, setFoto] = useState('')

  const dadosUsuario = {
    nome: nome,
    foto: foto
  }

  const [post, setPost] = useState({
    titulo: '',
    image: '',
    descricao: '',
  })

  console.log(post);
  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header 
            dadosUsuario={dadosUsuario}
            pageFlow={pageFlow}
          />
          {pageFlow === 1 ? (
            <FormularioLogin
              setPageFlow={setPageFlow}
              nome={nome}
              setNome={setNome}
              foto={foto}
              setFoto={setFoto}
            />
          ) : (
              <FormularioPostagem
                setPost={setPost}
              />
          )}
        </aside>
        <TelaDaPostagem
          post={post}
        />
      </Container>
    </>
  );
}

export default App;
