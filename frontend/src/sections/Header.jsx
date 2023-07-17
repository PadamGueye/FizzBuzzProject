import styled from 'styled-components';


import coverImg from '../assets/cover.jpg';
import colors from '../styles/colors';

const HeaderWrapper = styled.div`
    width: 100%;
`;

const Cover = styled.div`
    width: 100%;
    height: 100vh;
`;

const CoverImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(1px);


`;

const Layer = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.50);
    position: absolute;
    top: 0;
`;

const Title = styled.h1`
    {fontStyle.Header};
    position: relative;
    font-size: 50px;
    line-height: 80px;
    top : 200px;
    padding: 0;
    margin: 0;
    width :40%;
    left: 10%;
    color: ${colors.primary};
`;


function Header({id}){
    return(
        <HeaderWrapper id={id}>
            <Cover>
                <CoverImage src={coverImg} alt="Image de couverture" />
                <Layer>
                    <Title>
                        Bienvenue dans votre site de Fizz Buzz !
                    </Title>
                </Layer>
            </Cover>
        </HeaderWrapper>
    )
}
export default Header;