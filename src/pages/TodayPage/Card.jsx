import { MyCheckBox, CardContainer, CardInfos } from "./style";
export default function Card(){
    return (
        <CardContainer>
            <CardInfos>
                <h3>
                    Ler 1 capítulo de livro
                </h3>
                <p>
                    Sequência atual: 3 dias
                </p>
                <p>
                    Seu recorde: 5 dias
                </p>
            </CardInfos>
            <MyCheckBox />
        </CardContainer>
    );
}