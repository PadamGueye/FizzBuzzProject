import Footer from "./Footer";
import { render } from "@testing-library/react";
import Home from "../pages/Home";

describe('Footer', ()=>{
    test('Se rendre sans erreur', async ()=>{
        render(
            <Home>
                <Footer id='Footer'/>
            </Home>
        )
    })
})