import styled from "styled-components";
import HomePage from "./pages/HomePage/HomePage";
import SeatsPage from "./pages/SeatsPage/SeatsPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {

    const [selected, setSelected] = useState([]);
    const [nomeFinal, setNomeFinal] = useState("");
    const [cpf, setCpf] = useState("");
    const [dia, setDia] = useState([]);
    const [horario, setHorario] = useState([]);
    const [filme, setFilme] = useState([]);
    const [sessoes, setSessoes] = useState([]);
    const [assentos, setAssentos] = useState([]);
    const [compra, setCompra] = useState([]);

    const assentosIds = (selected);

    const ingresso = (compra) => {
        if (selected.includes(compra)) {
            setSelected(selected.filter((cadeiraId) =>  cadeiraId !== compra))
        } else {
            setSelected([...selected, compra]);
        }
    }

    return (
        <>
            <BrowserRouter>
                <NavContainer>CINEFLEX</NavContainer>

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sessoes/:idFilme" 
                    element={
                    <SessionsPage
                    sessoes={sessoes}
                    setSessoes={setSessoes}
                     />} />
                    <Route path="/assentos/:idSessao"
                        element={
                            <SeatsPage
                                nomeFinal={nomeFinal}
                                setNomeFinal={setNomeFinal}
                                selected={selected}
                                setSelected={setSelected}
                                cpf={cpf}
                                setCpft={setCpf}
                                dia={dia}
                                setDia={setDia}
                                horario={horario}
                                setHorario={setHorario}
                                filme={filme}
                                setFilme={setFilme}
                                assentosIds={assentosIds}
                                assentos={assentos}
                                setAssentos={setAssentos}
                                ingresso={ingresso}
                                setCompra={setCompra}
                            />} />

                    <Route path="/sucesso"
                        element={
                            <SuccessPage
                                selected={selected}
                                setSelected={setSelected}
                                assentosIds={assentosIds}
                                filme={filme}
                                setFilme={setFilme}
                                horario={horario}
                                setHorario={setHorario}
                                dia={dia}
                                setDia={setDia}
                                sessoes={sessoes}
                                nomeFinal={nomeFinal}
                                assentos={assentos}
                                cpf={cpf}
                                ingresso={ingresso}
                                
                            />} />
                </Routes>

            </BrowserRouter>
        </>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`
