import styled from "styled-components";
import fontStyle from "../styles/fontStyle";
import ButtonStyled from '../components/ButtonStyled';
import colors from "../styles/colors";
import { useState, useEffect } from "react";


const PlayWrapper= styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    height: 100vh;
    background: #FFF1C6;
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
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px;
`;


const GameSpace= styled.div`
    width: 60%;
    height: 90%;
    border-radius: 20px;
    border: solid 1px #000;
    display : flex;
    justify-content: space-between;
    align-items: center;
    padding : 20px;
    box-shadow: 0 1px 10px #AAA;
`;

const RandomNumber= styled.div`
    height: 100%;
    width: 40%;
    display : flex;
    justify-content:center;
    align-items:center;
    border-radius: 20px;
    background: #000;

`;

const RandomNumberValue = styled.h1`
    {fontStyle.Header};
    font-size: 40px;
    color: #FFF;
`;

const Responses= styled.ul`
    height: 100%;
    width: 40%;
    display : flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    padding: 0;
    gap: 30px;
`;

const Response = styled.li`
    width: 240px;
    height: 30px;
    list-style:none;
    background: #000;
    padding : 10px;
    border-radius: 10px;
    display:flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #FFF;
    cursor: pointer;
    transition: transform 0.6s ease-in-out;
    &:hover {
    background: ${colors.primary};
    transform: scale(1.1); 
    color: #FFF;
`;

const DashBoard= styled.div`
    width: 20%;
    height: 90%;
    border-radius: 20px;
    border: solid 1px #000;
    display : flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding : 20px;
    box-shadow: 0 1px 10px #AAA;
    background: #000;
    color: #FFF;
`;

const ElementDashboard= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-weight: bold;
`;

const TitleD= styled.div`
    color: ${colors.primary}
`;
const ContainD= styled.div`
    font-size: 25px;
`;
const MyButton= styled.button`
    color: ${({color})=>(color ==='light') ? colors.primary : colors.colorLight};
    text-decoration: none;
    font-size: 18px;
    border-radius: 30px; 
    background-color: ${({color})=>(color ==='light') ? colors.colorLight : colors.primary};
    padding: 10px 50px;
    box-shadow: 0 0 10px #494949 ;

    &:hover{
        transition: 0.5s;
        box-shadow: 0 0 10px #FFFFFF ;
    }
`;



    function Play({data, id}) {
    const [stage, setStage] = useState('LOW')
    const [allResponses, setAllResponses] = useState([]);
    const [selectedResponse, setSelectedResponse] = useState(null);
    const [myCorrectResponse, setmyCorrectResponse] = useState('');
    const [randomNumberValue, setRandomNumberValue] = useState('');
    const [score, setScore] = useState(0);
    const [essais, setEssais] = useState(5);
    

    function shuffleArray(array) {
        const shuffledArray = array.slice();
        for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }

    function getRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    function selectionReponses(correctResponse, data) {
        const responseTab = [];
        let random;

        if (!isNaN(correctResponse?.value)) {
        responseTab.push(correctResponse?.value);
        }
        else{
            responseTab.push(correctResponse?.value);
            responseTab.push(correctResponse?.digit);
        }


        while (responseTab.length < 4) {
        random = Math.floor(Math.random() * data?.length);
        const valeur = data[random].value;

        if (!responseTab.includes(valeur) && valeur !== correctResponse?.value && isNaN(valeur) ) {
            responseTab.push(valeur);
        }
        }

        return responseTab;
    }

        const handleSelectChange = (event) => {
            const selectedOptionValue = event.target.value;
            setStage(selectedOptionValue);
            Reinitialise();
        };

    function Reinitialise(){
            setEssais(5);
            setScore(0);
            setRandomNumberValue(getRandomNumber());
    }

    useEffect(()=>{
        setRandomNumberValue(getRandomNumber());

    },[selectedResponse])

    useEffect(() => { 
        const filteredResponses = data.filter((value) => value?.stage === stage);

        const foundCorrectResponse = filteredResponses.find(
        (value) => value?.digit === randomNumberValue
        );

        if (foundCorrectResponse) {
        setmyCorrectResponse(foundCorrectResponse);
        }

        const possibleResponses = selectionReponses(myCorrectResponse, filteredResponses);

        const combinedResponses = shuffleArray(possibleResponses);
        setAllResponses(combinedResponses);

    }, [randomNumberValue, myCorrectResponse]);

    useEffect(() =>{
        if(essais > 0){
            console.log(selectedResponse);
            if(myCorrectResponse?.value === selectedResponse){
                console.log("Felicitation");
                setScore(score+1);
            }
            else{
                console.log("Vous avez perdu");
                setEssais(essais-1);
            }
        }else{
            Reinitialise();
        }
        
    },[selectedResponse])

        return(
            <PlayWrapper id={id}>
                <TitleWrapper>
                    <Title>
                        VOULEZ VOUS JOUER ? 
                    </Title>
                </TitleWrapper>
                <ButtonWrapper>
                    <SelectButton onChange={handleSelectChange} id="stage-select" >
                        <option value="LOW">LOW STAGE</option>
                        <option value="HIGHT">HIGH STAGE</option>
                    </SelectButton>
                </ButtonWrapper>
                <PlayContain>
                    <GameSpace>
                        <RandomNumber>
                            <RandomNumberValue>{randomNumberValue}</RandomNumberValue>
                        </RandomNumber>
                        <Responses>
                        {allResponses.map((response) => (
                        <Response key={response} onClick={() => {setSelectedResponse(response);}}>
                            {response}
                        </Response>
                    ))}
                        </Responses>
                    </GameSpace>
                    <DashBoard>
                        <ElementDashboard>
                            <TitleD>Score</TitleD>
                            <ContainD>{score} points</ContainD>
                        </ElementDashboard>
                        <ElementDashboard>
                            <TitleD>Essais Restant</TitleD>
                            <ContainD>{essais} / 5</ContainD>
                        </ElementDashboard>
                        <ElementDashboard>
                            <MyButton onClick={Reinitialise}>RESTART</MyButton>
                        </ElementDashboard>
                    </DashBoard>
                </PlayContain>
            </PlayWrapper>
        )
    }

    export default Play;