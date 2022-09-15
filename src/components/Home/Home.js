import "./Home.css";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { ImFilePdf } from "react-icons/im";
import Pdf from '../../cv-julian-battaglino.pdf';
import ContactUs from "../ContactUs/ContactUs";


const Home = () => {

    const onResumeClick = () => {
        window.open(Pdf);
    }


    return (
        <>
            <div className="intro-container">
            
                <h1 className="main-title"><span class="underline-nice">Julian Battaglino</span></h1>
                <h2 className="subtitle">Front End Developer</h2>
                <div className="icon-container">
                    <a href="https://github.com/julianbattaglino" target="_blank" rel="noreferrer" className="icon-link">
                        <SiGithub size={30} className="icon" />
                    </a>
                    <a href="https://github.com/julianbattaglino" target="_blank" rel="noreferrer" className="icon-link">
                        <SiLinkedin size={30} className="icon" />
                    </a>
                    <ImFilePdf onClick={onResumeClick} size={30} className="icon" />
                </div>
                <img className="profile-img" src="/img/profile-pic.png" alt="profile-img" />
            </div>
            {/* <ContactUs /> */}
        </>
    );
}

export default Home;