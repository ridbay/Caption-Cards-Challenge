import styled from 'styled-components';

export const CaptionViewStyle= styled.section`
display: flex;
    flex-direction: column;
    background-color: #95dada;
    border-radius: 5px;
    border: 1px solid grey;
    padding: 25px;
    cursor: pointer;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform 0.25s ease-out;
`

// .card-container:hover {
//     transform: scale(1.05)
// }