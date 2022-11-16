import { useState } from "react";
import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioPostagem = (props) => {

  const [image, setImage] = useState('')
  const [descricao, setDescricao] = useState('')
  const [titulo, setTitulo] = useState('')

  const trocarImage = (e) => {
    setImage(e.target.value)
  }

  const trocarDescricao = (e) => {
    setDescricao(e.target.value)
  }

  const trocarTitulo = (e) => {
    setTitulo(e.target.value)
  }

  const novoPost = () => {
    const novoPostObj = {
      titulo: titulo,
      image: image,
      descricao: descricao,
    }
    props.setPost(novoPostObj)
    setImage("")
    setDescricao("")
    setTitulo("")
  }

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>

      <Form>

        <StyledLabel htmlFor="titulo">
          Título:
          <Input
            id="titulo"
            value={titulo}
            onChange={trocarTitulo}
          />
        </StyledLabel>

        <StyledLabel htmlFor="foto">
          Link da imagem:
          <Input
            id="foto"
            value={image}
            onChange={trocarImage}
          />
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input
            id="descricao"
            value={descricao}
            onChange={trocarDescricao}
          />
        </StyledLabel>

        <SendButton onClick={novoPost}>Enviar</SendButton>
      </Form>

    </FormContainer>
  );
};

export default FormularioPostagem;
