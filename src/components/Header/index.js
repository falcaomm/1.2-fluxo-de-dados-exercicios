import { HeaderStyle, TitleHeader, Image, NomeUsuario } from './styled'

export const Header = (props) => {

    return (
        (props.pageFlow === 2) ?
            <HeaderStyle>
                <TitleHeader>Insta4</TitleHeader>
                <Image src={props.dadosUsuario.foto} />
                <NomeUsuario>{props.dadosUsuario.nome}</NomeUsuario>
            </HeaderStyle> :
            <HeaderStyle>
                <TitleHeader>Insta4</TitleHeader>
            </HeaderStyle>
    )
}