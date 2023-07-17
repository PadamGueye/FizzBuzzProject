import styled from "styled-components";
import colors from "../styles/colors";
import fontStyle from "../styles/fontStyle";

const MyButtonStyled = styled.button`
${fontStyle.Body}
color: ${({color})=>(color ==='light') ? colors.primary : "#FFF" };
width:100%;
text-decoration: none;
border-radius: 30px; 
background-color: ${({color})=>(color ==='light') ? "#FFF" : colors.primary};
padding: 10px 30px; 
border:none;
&:hover{
        transition: 0.5s;
        box-shadow: 0 0 8px ${colors.primary}
    }
`;

function ButtonStyled ({type,label,onClick}){

    return(
        <MyButtonStyled onClick={onClick} color={type}>{label}</MyButtonStyled>
    )
}
export default ButtonStyled ;