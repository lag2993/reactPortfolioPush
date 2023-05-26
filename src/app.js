import React,{useState} from "react";
import Header from "./components/header";
import Nav from "./components/nav"
import Page from "./components/page"
import Footer from "./components/footer";

function App(){
    const [pages] = useState([
        {name: "About"},
        {name: "Showcase"},
        {name: "Contact"},
        {name: "Resume"}

    ]);
    const [currentPage,setCurrentPage] = useState(pages[0]);
    return (
        <div>
            <Header>
                <Nav pages = {pages} setCurrentPage  = {setCurrentPage}currentPage = {currentPage}> 
                </Nav>
            </Header>
            <main>
                <Page key={currentPage.name} pages={pages} currentPage={currentPage} />
            </main>
            <Footer />
        </div>
    )
}

export default App;