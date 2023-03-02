import styled from '@emotion/styled';
import Image from "next/image";
import imagen from '../../public/images/iconServices.png';
import imagenEnergy from '../../public/images/iconEnergy.png';
import imagenGrapics from '../../public/images/iconGrapics.png';




const Services = styled('section')({
    padding: '160px 10% 90px',

});



const MainText = styled('div')({

    textAlign: 'center',
    'h2': {
        fontSize: '3.5rem',
        marginBottom: '10px',

    },
    'h4': {
        color: '#ff8808',
        fontSize: '24px',
        fontWeight: '600',

    }

});

const ServicesContent = styled('div')({

    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px,auto))',
    alignItems: 'center',
    textAlign: 'center',
    gap: '2rem',
    marginTop: '5rem',


});

const Box = styled('div')({
    padding: '45px',
    background: '#12141c',
    borderTop: '5px solid transparent',
    transition: 'all .40s ease',
    cursor: 'pointer',
    borderRadius: '0.5rem',
    ':hover': {
        transform: 'scale(1.01) translateY(-5px)',
        borderTop: '5px solid #ff8808',

    }, 
    'h3': {
        fontSize: '24px',
        fontWeight: '600',
        margin: '15px 0',
        transition: 'all .40s ease'
    },
    'p': {
        color: 'gray',
        fontSize: '1.1rem',
        lineHeight: '30px',

    },
    '.img': {
        width: '60px',
        height: '60px'
    },
    ':hover h3': {
        color: '#d64802',

    }

});






export default function ServicesPage() {
    return(

        <Services>
            <MainText>
                <h2>Our services</h2>
                <h4>Better Expericences</h4>
            </MainText>

            <ServicesContent>
                <Box>
                    <Image className='img' src={imagen}/>
                    <h3>Mobile App Desing</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellendus nulla consequuntur vero dolorum tenetur vitae earum inventore soluta labore nisi ex corrupti, voluptates eaque illo dolor quae voluptate quos!</p>

                </Box>

                <Box >
                    <Image className='img' src={imagenEnergy}/>
                    <h3>Energy</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellendus nulla consequuntur vero dolorum tenetur vitae earum inventore soluta labore nisi ex corrupti, voluptates eaque illo dolor quae voluptate quos!</p>

                </Box>

                <Box >
                    <Image className='img' src={imagenGrapics}/>
                    <h3>Graphics</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellendus nulla consequuntur vero dolorum tenetur vitae earum inventore soluta labore nisi ex corrupti, voluptates eaque illo dolor quae voluptate quos!</p>

                </Box>
            </ServicesContent>
        </Services>


    )
}