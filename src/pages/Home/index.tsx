import { BlueSpan, ContainerIntro, HomeStyle, YellowSpan } from "./styles";
import { HomeCarousel } from "../../components/HomeCarousel";
import { EventDetails } from "../../components/EventDetails";
import { FAQ } from "../../components/FAQ";


export const Home: React.FC = () => {
    return(
        <HomeStyle >
            <ContainerIntro >
                <p>O Melhor mapa de </p>
                <div>
                    <YellowSpan>exposições</YellowSpan> do <BlueSpan>Nordeste</BlueSpan>.<span> </span>
                </div> 
            </ContainerIntro>
            <HomeCarousel/>
            <EventDetails />
            <FAQ />


        </HomeStyle>
        
        
    )
}