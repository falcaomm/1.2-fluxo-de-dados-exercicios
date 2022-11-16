import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = (props) => {


  const login = () => {
    props.setPageFlow(2);
  };

  const trocaFoto = e => {
    props.setFoto(e.target.value)
  }

  const trocaNome = e => {
    props.setNome(e.target.value)
  }

  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input
            id="input"
            type={"text"}
            value={props.nome}
            onChange={trocaNome}
            />
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input
            type={"text"} 
            value={props.foto}
            onChange={trocaFoto}
            />
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
