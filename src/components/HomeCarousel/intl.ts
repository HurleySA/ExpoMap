interface IObjectTextSlide {
    [x:string]: string;
}

const objectTextsSlide: IObjectTextSlide = {
    'bovinos': 'Descubra a beleza majestosa dos bovinos em nossa exposição única! Aprecie as diferentes raças, admire a força e a elegância dos animais e mergulhe no mundo fascinante da pecuária. Uma experiência imperdível para os amantes da natureza e da agricultura.',
    'caprinos': 'Venha conhecer a encantadora diversidade dos caprinos em nossa exposição exclusiva! Delicie-se com as diferentes raças, maravilhe-se com a agilidade e a graça dos animais e adentre o mundo fascinante da criação de cabras. Uma experiência imperdível para os apaixonados pela natureza e pela criação de animais.',
    'tractor': 'Descubra a potência e a tecnologia dos tratores novos em nossa exposição imperdível! Explore as últimas inovações das diversas marcas, admire a robustez e o desempenho dessas máquinas agrícolas e mergulhe no mundo da agricultura moderna. Uma oportunidade única para os agricultores e entusiastas do setor.',
    'expo': 'Venha testemunhar a emocionante competição de animais em nosso evento! Admire a destreza e a elegância das raças famosas de bovinos, como Angus, Hereford e Holandês, enquanto competem pela vitória. Além disso, encante-se com a agilidade e a beleza das raças renomadas de caprinos, como Saanen, Boer e Angorá. Uma experiência imperdível para os amantes da pecuária e da competição animal.',
    'diversion': 'Aventure-se em um mundo de diversão e emoção no nosso parque de diversão! Desfrute de emocionantes montanhas-russas, jogos desafiadores e alegres carrosséis. Sinta a adrenalina em atrações como a roda-gigante e mergulhe na magia de espetáculos e shows incríveis. Uma experiência inesquecível para toda a família, repleta de risos, sorrisos e memórias duradouras.',

}
export const getSlideText = (nameSlide: string): string => objectTextsSlide[nameSlide] || '';