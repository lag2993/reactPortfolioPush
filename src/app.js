import React,{useState} from "react";
import Header from "./components/header";
import Nav from "./components/nav"
import Page from "./components/page"
import Footer from "./components/footer";

function App(){
    const [page] = useState([
        {name:"About Me"},
        {name:"Porfolio"},
        {name:"Contact Me"},
        {name:"Resume"}

    ]);
    const [currentPage,setCurrentPage] = useState(page[0]);
    return (
        <div>
            <Header>
                <Nav>
                    pages = 
                    {page}
                    setCurrentPage  = {setCurrentPage}
                    currentPage = {currentPage}
                </Nav>
            </Header>
            <main>
                <Page>
                currentPage = {currentPage}
                </Page>
            </main>
            <Footer />
        </div>
    )
}

export default App;