import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SeatsPage() {

    const [assentos, setAssentos] = useState([]);
    const [filme, setFilme] = useState([]);
    const [horario, setHorario] = useState([]);
    const [dia, setDia] = useState([]);
    const { idSessao } = useParams();

    useEffect(() => {

    const url = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`

    const promise = axios.get(url);
    promise.then((res) => {
        setAssentos(res.data.seats);
        setFilme(res.data.movie);
        setHorario(res.data);
        setDia(res.data.day);
    } )
    promise.catch((err) => {
        console.log(err.response.data);
    })
}, []);


    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer> {assentos.map((a) => (
                <>
                   <SeatItem id={a.id} busca={a.isAvailable} >{a.name}</SeatItem>
                   </>
            ))}
               
                
            </SeatsContainer>

            <CaptionContainer>
                <CaptionItem>
                    <CaptionCircle busca={true} id={assentos.id} />
                    Selecionado
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle busca={''} id={assentos.id}/>
                    Disponível
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle busca={false} id={assentos.id}/>
                    Indisponível
                </CaptionItem>
            </CaptionContainer>

            <FormContainer>
                Nome do Comprador:
                <input placeholder="Digite seu nome..." />

                CPF do Comprador:
                <input placeholder="Digite seu CPF..." />

                <button>Reservar Assento(s)</button>
            </FormContainer>

            <FooterContainer>
                <div>
                    <img src={filme.posterURL} alt="poster" />
                </div>
                <div>
                    <p>{filme.title}</p>
                    <p>{dia.weekday} - {horario.name}</p>
                </div>
            </FooterContainer>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
`
const SeatsContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
const FormContainer = styled.div`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    input {
        width: calc(100vw - 60px);
    }
`
const CaptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    margin: 20px;
`
const CaptionCircle = styled.div`
    border: 1px solid ${({busca}) => busca === true ? '#0E7D71' : busca === false ? '#F7C52B' : '#7B8B99'};          // Essa cor deve mudar
    background-color: ${({busca}) => busca === true ? '#1AAE9E' : busca === false ? '#FBE192' : 'lightblue' };   // Essa cor deve mudar
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const CaptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
`
const SeatItem = styled.div`
    border: 1px solid ${({busca}) => busca === true ? '#0E7D71' : busca === false ? '#F7C52B' : '#7B8B99'} ;         // Essa cor deve mudar
    background-color: ${({busca}) => busca === true ? '#1AAE9E' : busca === false ? '#FBE192' : 'lightblue' };
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;

    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
            text-align: left;
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`