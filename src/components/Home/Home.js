import "./Home.css";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { ImFilePdf } from "react-icons/im";
import Pdf from '../../cv-julian-battaglino.pdf';


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
                <img className="profile-img" src="/img/profile-pic-4.png" alt="profile-img" />

            </div>

            <div className="intro-container">

                <h2 className="subtitle pt-100"><span class="underline-nice">Tech Stack</span></h2>
                <div className="icon-stack-container">
                    <img className="tech-icon" src="img/stack-icons/expo.png" alt="React Native, Expo CLI" />
                    <img className="tech-icon" src="img/stack-icons/react.png" alt="React.js" />
                    <img className="tech-icon" src="img/stack-icons/react-native.png" alt="React Native" />
                    <img className="tech-icon" src="img/stack-icons/js.png" alt="Vanilla js" />
                    <img className="tech-icon" src="img/stack-icons/node-js.png" alt="Node js" />
                    <img className="tech-icon" src="img/stack-icons/npm.png" alt="Node Package Manager - NPM" />
                    <img className="tech-icon" src="img/stack-icons/html5.png" alt="Hypertext Markup Language - Html 5" />
                    <img className="tech-icon" src="img/stack-icons/css3.png" alt="Stylesheet Cascades - CSS3" />
                    <img className="tech-icon" src="img/stack-icons/sass.png" alt="Sass: Syntactically Awesome Style Sheets" />
                    <img className="tech-icon" src="img/stack-icons/chakra.png" alt="Chakra UI" />
                </div>


            </div>
            {/* <ContactUs /> */}


        </>
    );
}

export default Home;