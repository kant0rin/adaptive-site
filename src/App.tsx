import './style/based.scss'
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Forms from "./components/Forms.tsx";
import Catalog from "./components/Catalog.tsx";
import Offer from "./components/Offer.tsx";
import Quality from "./components/Quality.tsx";
import Partnership from "./components/Partnership.tsx";
import About from "./components/About.tsx";
import Facts from "./components/Facts.tsx";
import Reviews from "./components/Reviews.tsx";
import Opportunity from "./components/Opportunity.tsx";
import Contacts from "./components/Contacts.tsx";
import UpButton from "./components/UpButton.tsx";
import Footer from "./components/Footer.tsx";

function App() {

    return (
        <div className='main__container'>
            <Header/>
            <Main/>
            <Forms/>
            <Catalog/>
            <Offer/>
            <Quality/>
            <Partnership/>
            <About/>
            <Facts/>
            <Reviews/>
            <Opportunity/>
            <Contacts/>
            <UpButton/>
            <Footer/>

        </div>
    )
}

export default App
