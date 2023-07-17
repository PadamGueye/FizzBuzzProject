import styled from "styled-components";
import colors from "../styles/colors";
import { useState } from "react";

const PlayWrapper= styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    height: 100vh;
    background: #000000;
`;

const TitleWrapper= styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    width: 100%;
    padding-top: 50px;
`;

const Title = styled.h1`
    {fontStyle.Header};
    position: relative;
    font-size: 40px;
    color:${colors.primary};

`;

const ButtonWrapper= styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    margin-bottom: 30px;
`;

const SelectButton = styled.select`
    padding: 10px 20px;
    border: none;
    background #FFF;
    color: #000;
    display: flex;
    justify-content:center;
    align-items:center;
    border-radius: 5px;
`;

const PlayContain= styled.div`
    height: 55%;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 50px;
`;

const ElementsContainer= styled.ul`
    width: 90%;
    height: 300px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px;
    flex-wrap: wrap;
    padding: 30px;
    background: #444;
    gap: 30px;
    border-radius: 10px;
    overflow-y: scroll;

    scrollbar-width: thin; 
    &::-webkit-scrollbar {
    width: 8px;
    }

    &::-webkit-scrollbar-thumb {
    background-color: ${colors.primary}; 
    border-radius: 4px;
    }

    &::-webkit-scrollbar-track {
    background-color: #f0f0f0; 
    border-radius: 4px;
    }

`;
const Element= styled.li`
    width: 170px;
    border: none;
    background : #DDD;
    color: #000;
    display: flex;
    justify-content:center;
    align-items:center;
    border-radius: 5px;
    padding : 10px 0;
    font-weight:bold;
    cursor: pointer;
    transition: transform 0.6s ease-in-out;
    &:hover {
    background: ${colors.primary};
    transform: scale(1.1); 
    color: #FFF;
  }
`;

function Apprendre({data, id}) {
    const [stage, setStage] = useState('LOW');
    const [hoveredElement, setHoveredElement] = useState(null);

    const handleSelectChange = (event) => {
        const selectedOptionValue = event.target.value;
        setStage(selectedOptionValue);
      };

    return(
        <PlayWrapper id={id} >
            <TitleWrapper>
                <Title>
                    VOULEZ VOUS APPRENDRE ? 
                </Title>
            </TitleWrapper>
            <ButtonWrapper>
                <SelectButton onChange={handleSelectChange}>
                    <option value="LOW">LOW STAGE</option>
                    <option value="HIGHT">HIGH STAGE</option>
                </SelectButton>
            </ButtonWrapper>
            <PlayContain>
                <ElementsContainer>
                    {
                        data.map((value) => {
                            if (value.stage === stage) {
                                return(
                                    <Element 
                                        key={value.id}
                                        onMouseEnter={() => setHoveredElement(value.id)}
                                        onMouseLeave={() => setHoveredElement(null)} 
                                    >
                                        {hoveredElement === value.id  ? (
                                            <span>{value.value}</span> 
                                            ) : (
                                            <span>{value.digit}</span> 
                                            )}
                                    </Element>
                                )
                            }
                        })
                    }
                    
                </ElementsContainer>
            </PlayContain>
        </PlayWrapper>
    )
}

export default Apprendre;