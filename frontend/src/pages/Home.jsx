import styled from "styled-components";
import axios from 'axios';

import Header from "../sections/Header";
import NavBar from "../components/NavBar";
import Play from "../sections/Play";
import Apprendre from "../sections/Apprendre";
import Footer from "../sections/Footer";
import { useEffect, useState } from "react";
import { ListFizzBuzz } from "../components/ListFizzBuzz";


const Container = styled.div`
  display: flex;
  flex-direction: column;
`;


function Home() {
  const [fizzBuzzData, setData] = useState([]);

  const BaseUrl = "http://localhost:8080";

  useEffect(() => {
    axios.get(`${BaseUrl}/stages`)
      .then((res) => {
        setData(res?.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(fizzBuzzData);
  return (
    <Container>
      <NavBar />
      <Header id="Header"/>
      <Play data={ListFizzBuzz} id="Play"/>
      <Apprendre data={ListFizzBuzz} id="Apprendre" />
      <Footer id="Footer" />
    </Container>
  );
}

export default Home;
