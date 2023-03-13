import styled from "styled-components";
import { useState } from "react";

export default function Seats({id, busca , name , handleSelectSeat}){

    const [reserva, setReserva] = useState(false);
    console.log(reserva)
    

    return (
        <>
        <SeatItem 
        id={id} 
        busca={busca} 
        reserva={reserva}
        onClick={() => {
            setReserva(!reserva);
        }
            
        } 
        > 
        {name}
        </SeatItem>
        </>
    )
}

const SeatItem = styled.div`
    border: 1px solid ${({busca, reserva}) => busca === false ? '#F7C52B' : reserva === true? '#0E7D71' : '#808F9D'} ;         
    background-color: ${({busca, reserva}) => busca === false ? '#FBE192' : reserva === true ? '#1AAE9E' : '#C3CFD9'} ;
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
    cursor: pointer;
`

