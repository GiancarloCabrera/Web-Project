import styled from '@emotion/styled';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import Graphics from '../../assets/imageGraphics1.jpg';
import Graphics2 from '../../assets/imagenGraphics2.jpg';
import Graphics3 from '../../assets/imageGraphics3.jpg';
import Graphics4 from '../../assets/imageGraphics4.jpg';
import Graphics5 from '../../assets/imageGraphics5.jpg';
import Graphics6 from '../../assets/imageGraphics6.jpg';


const Examples = styled('section')({
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

const Span = styled("span")({
    color: "#d64802",
});

const ExamplesContent = styled('div')({

    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px,auto))',
    alignItems: 'center',
    gap: '2rem',
    marginTop: '5rem',

});

const Row = styled('row')({

    padding: '25px',
    background: '#12141c',
    borderRadius: '0.5rem',
    transition: 'all .40s ease',

    '.img' : {
        height: 'auto',
        width: '100%',
        borderRadius: '0.5rem',
        marginBottom: '1.5rem',
        
    },
    'h3': {
        fontSize: '25px',
        fontWeight: '700',
    },
    'h6': {
        color: '#ff8808',
        fontSize: '16px',
        fontWeight: '500',
        letterSpacing: '1px',
    },
    
    ':hover':{
        transform: 'scale(1.01) translateY(-5px)',
        cursor: 'pointer',
    },

    ':hover h6':{
        color: '#d64802'
    }

    

});

const MainRow = styled('div')({

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1rem',

});

const RowText = styled('div')({

});

const RowIcon = styled('div')({
    '.i': {
        fontSize: '21px',
    },
    

});

export default function ExamplesPage(){
    return(

        <Examples id='examples'>
            <MainText>
                <h2>Examples</h2>
                <h4>Examples of <Span>River Bird</Span></h4>
            </MainText>

            <ExamplesContent>
                <Row>
                    <Image className='img' src={Graphics}/>
                    <MainRow>
                        <RowText>
                            <h6 className='xd'>Graphics</h6>
                        </RowText>
                        <RowIcon>
                            < FavoriteBorderIcon className='i'/>
                        </RowIcon>
                    </MainRow>
                    <h3>Responsible time management statistics</h3>
                </Row>


                <Row>
                    <Image className='img' src={Graphics2}/>
                    <MainRow>
                        <RowText>
                            <h6>Graphics</h6>
                        </RowText>
                        <RowIcon>
                            < FavoriteBorderIcon className='i'/>
                        </RowIcon>
                    </MainRow>
                    <h3>Responsible time management statistics</h3>
                </Row>


                <Row>
                    <Image className='img' src={Graphics3}/>
                    <MainRow>
                        <RowText>
                            <h6>Graphics</h6>
                        </RowText>
                        <RowIcon>
                            < FavoriteBorderIcon className='i'/>
                        </RowIcon>
                    </MainRow>
                    <h3>Responsible time management statistics</h3>
                </Row>

                <Row>
                    <Image className='img' src={Graphics4}/>
                    <MainRow>
                        <RowText>
                            <h6>Graphics</h6>
                        </RowText>
                        <RowIcon>
                            < FavoriteBorderIcon className='i'/>
                        </RowIcon>
                    </MainRow>
                    <h3>Responsible time management statistics</h3>
                </Row>

                <Row>
                    <Image className='img' src={Graphics5}/>
                    <MainRow>
                        <RowText>
                            <h6>Graphics</h6>
                        </RowText>
                        <RowIcon>
                            < FavoriteBorderIcon className='i'/>
                        </RowIcon>
                    </MainRow>
                    <h3>Responsible time management statistics</h3>
                </Row>

                <Row>
                    <Image className='img' src={Graphics6}/>
                    <MainRow>
                        <RowText>
                            <h6>Graphics</h6>
                        </RowText>
                        <RowIcon>
                            < FavoriteBorderIcon className='i'/>
                        </RowIcon>
                    </MainRow>
                    <h3>Responsible time management statistics</h3>
                </Row>

            </ExamplesContent>
        </Examples>


    )
} 