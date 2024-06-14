import styled from 'styled-components'
import facebook from './assets/facebook.png'
import google from './assets/google.png'
import instagram from './assets/instagram.png'
import whatsapp from './assets/whatsapp.png'


const RodapeEstilizado = styled.footer`
    height: 100%;
    color: white;
    padding: 1em;
    background-color: var(--azul-escuro);
    text-align: center;
`

const ListaEstilizada = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 15%;
    margin: 1em auto;
`

const ItemEstilizado = styled.li`
    list-style: none;
`

function Rodape() {


    return (

        <RodapeEstilizado>
            <ListaEstilizada>
                <ItemEstilizado>
                    <a href="#"><img src={facebook} alt="logo facebook" /></a>
                </ItemEstilizado>
                <ItemEstilizado>
                    <a href="#"><img src={google} alt="logo google" /></a>
                </ItemEstilizado>
                <ItemEstilizado>
                    <a href="#"><img src={instagram} alt="logo instagram" /></a>
                </ItemEstilizado>
                <ItemEstilizado>
                    <a href="#"><img src={whatsapp} alt="logo whatsapp" /></a>
                </ItemEstilizado>
            </ListaEstilizada>
            <p>2024 &copy; Desenvolvido por João Vitor</p>
        </RodapeEstilizado>

    )

}

export default Rodape;