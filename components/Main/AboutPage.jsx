import styled from "@emotion/styled";
import Image from "next/image";
import imagen from '../../public/images/grafico12.png';
import Fade from 'react-reveal/Fade';

const About = styled('section')(({theme})=>({
    padding: '160px 10% 90px',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'center',
    gap: '2rem',

    [theme.breakpoints.down('h')]: {
        padding: '130px 3% 60px '
    },

    [theme.breakpoints.down('ms')]: {
        padding: '70px 3% 60px ',
        gridTemplateColumns: '1fr'
    },


}));

const AboutImg = styled('div')(({theme})=>({
    'img':{
        height:'auto',
        width: '100%',
        maxWidth: '460px',
        background: 'trasparent'
    },
    [theme.breakpoints.down('ms')]: {
        textAlign: 'center',
    },

}));

const AboutText = styled('div')({
    'h4':{
        margin: '10px 0',
        color: '#ff8808',
        fontSize: '20px',
        fontWeight: '600',
    },
    'h2': {
        fontSize: '3.5rem'
    },
    'p': {
        color: 'gray',
        fontSize: '1.1rem',
        lineHeight: '30px',
        marginBottom: '2rem',

    }

});

const AboutGrid = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, auto))',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '3rem',

});

const AboutIn = styled('div')({
    'h5': {
        fontSize: '22px',
        fontWeight: '600',

    }

});

const GetStarted = styled('a')({
    display: 'inline-block',
    padding: '14px 40px',
    borderRadius: '0.5rem',
    fontSize: '17px',
    fontWeight: '500',
    background: '#ff8808',
    color: '#fff',
    border: '1px solid #ff8808',
    transition: 'all .40s ease',
    ':hover': {
        transform: 'scale(1.01) translateY(-5px)',
        background: 'transparent',
        border: '1px solid #ff8808',    

    }

});




export default function AboutPage(){
    return(
        <Fade bottom>
            <About id="about">
                <AboutImg>
                    <Image className="img" src={imagen}/>
                </AboutImg>

                <AboutText>
                    <h2>About Us</h2>
                    <h4>We are here to help the nature</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et asperiores commodi quibusdam possimus, labore numquam. Enim facilis impedit doloribus voluptates incidunt doloremque eos dolores ex velit, ratione saepe tenetur labore?</p>
                    <AboutGrid>
                        <AboutIn>
                            <h5>1. Problem Solving</h5>
                        </AboutIn>

                        <AboutIn>
                            <h5>2. Help your pocket</h5>
                        </AboutIn>

                        <AboutIn>
                            <h5>3. Crative idea </h5>
                        </AboutIn>

                        <AboutIn>
                            <h5>4. Higth Quality</h5>
                        </AboutIn>

                    </AboutGrid>
                    <GetStarted href="#" className="btn">Get Started</GetStarted>
                </AboutText>

            </About>
        </Fade>

    )
}