import { useState } from 'react'
import { FadeLeft, FadeRight, TestImage, CarouselBack, ContainerTextSlide } from "./styles";
import { Carousel } from '@mantine/carousel';
import { getSlideText } from './intl';


export const HomeCarousel: React.FC = () => {
    const [slideName, setSlideName] = useState('bovinos')
    const [fadeDirection, setFadeDirection] = useState<'right' | 'left'>('right');
    
    const slideNames = ['bovinos','caprinos','tractor', 'expo', 'diversion']
    const srcPatch = ['/boi.png', '/dorper.png', '/tratores.png', '/exposicao.png', '/parque.png']

    const getSlideNameByIndex = (index: number) => slideNames[index]
  return (
    <>
    <CarouselBack>

        <Carousel slideSize="100%" height={500} withIndicators loop slideGap="xs" controlSize={70}
        className='container'
        controlsOffset={50} styles={{control: {borderColor: '#43A838', color: '#43A838',  '&:hover': {
            borderColor: '#fafafa',
            color: '#fafafa',
            backgroundColor: '#43A838'
        }}, indicator: {backgroundColor: '#43A838' }}} 
        onSlideChange={(newIndex) => {
            (newIndex % 2  === 0 ) ? setFadeDirection('right') : setFadeDirection('left') ;
            setSlideName(getSlideNameByIndex(newIndex));
        }}
        >
        {srcPatch.map(src => <Carousel.Slide><TestImage  onClick={(e) => {e.stopPropagation();
        }} ><img src={src} /></TestImage></Carousel.Slide>)}
        </Carousel>
    </CarouselBack>

    <ContainerTextSlide  >
        <div className="container">
            { fadeDirection === 'right' ? <FadeRight  >{getSlideText(slideName)}</FadeRight> : <FadeLeft >{getSlideText(slideName)}</FadeLeft>}
        </div>
    </ContainerTextSlide>

    </>
  );
}
