import logo from '../assets/logo.png';
import colors from '../styles/colors';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const NavBarWrapper = styled.div`
    position: fixed;
    top: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items:center;
    gap:20px;
    width: 100%;
    padding: 20px 0;
    gap: 30px;
    width: 100%;
    height: 20px;
    background :  ${({enable})=>(enable) ? '#FFF' : 'none'};
`;

const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.img`
    max-width: 50px;
`;

const MenuList = styled.ul`
    display: flex;
    justify-content: center;
    align-items:center;
    list-style:none;
`;

const ListItem = styled.li`
    display: flex;
    justify-content: center;
    align-items:center;
    padding: 10px 25px;
`;

const LinkItem = styled.a`
    color: ${({enable})=>(enable) ? "#C09200" : `${colors.primary}`};
    text-decoration:none;
`;

const SearchBar = styled.input`
    height: 30px;
    width: 200px;
    border-radius: 20px;
    outline:none;
    border : solid 1px #000;
    background: none;
    padding: 0 10px ;
    color: #000;
`;

function NavBar(){
    const [scrollHeight, setScrollHeight] = useState(0)
    const [enablebackground, setEnableBackground] = useState(false);

    const handleScroll = () => {
        setScrollHeight(window.scrollY);
    };      
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[])
    useEffect(()=>{
        if (scrollHeight > 150) {
            setEnableBackground(true);
        }else{
            setEnableBackground(false);
        }
    },[scrollHeight])
    
    return(
        <NavBarWrapper enable={enablebackground} data-testid="nav-bar" >
            <LogoWrapper><Logo src={logo}  alt='LogoGamma'/></LogoWrapper>
                <MenuList>
                        <ListItem><LinkItem enable={enablebackground}  href="#Header" >Accueil</LinkItem></ListItem>
                        <ListItem><LinkItem enable={enablebackground}  href="#Play" >Jouer Fizzbuzz</LinkItem></ListItem>
                        <ListItem><LinkItem enable={enablebackground}  href="#Apprendre" >Apprendre FizzBuzz</LinkItem></ListItem>
                        <ListItem><LinkItem enable={enablebackground}  href="#Footer" >A propos de nous !</LinkItem></ListItem>
                </MenuList>
                <div>
                    <SearchBar type="text" placeholder="Que rechercher vous ?"/>
                </div>
        </NavBarWrapper>
    )
}

export default NavBar;