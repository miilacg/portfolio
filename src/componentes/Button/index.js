import styled from "styled-components";

/*cons Button = styled{Link} se quiser chamar o link daqui*/
const Button = styled.button` 
    color: var(--white);
    border: 1px solid var(--white);
    background: var(--primary);
    box-sizing: border-box;
    cursor: pointer;
    padding: 15px 50px;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: .1vw;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    
    &:hover,
    &:focus {
        color: var(--primary);
        border: 1px solid var(--primary);
        background: var(--white);
`;

export default Button;