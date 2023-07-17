import { styled } from "styled-components";
import colors from "../styles/colors";

const FooterWrapper = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top : solid 1px ${colors.primary};
    color: ${colors.primary};
    background: #000;
`;

function Footer({id}){
    return(
        <FooterWrapper id={id}>
            <p>Copyright © Papa Adama GUEYE 2023 - tout droits réservés.</p>
        </FooterWrapper>
    )
}

export default Footer;