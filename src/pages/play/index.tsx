import { useEffect, useState } from "react";
import { AlertContainer, Background, CardBack, CardContainer, CardFront, Container, Image, P, Pergaminho, PrincipalContainer, QuestionButton, SkipButton } from "./style";

import backcard from '../../assets/backcart.png'
import pergaminho from '../../assets/pergaminho.png'

import frame1 from '../../assets/Frame1.png'
import frame2 from '../../assets/Frame2.png'
import frame3 from '../../assets/Frame3.png'
import frame4 from '../../assets/Frame4.png'
import frame5 from '../../assets/Frame5.png'
import frame6 from '../../assets/Frame6.png'

import background from '../../assets/medievalBackground.png'
import carta1 from '../../assets/carta1.png'
import carta2 from '../../assets/carta2.png'
import carta3 from '../../assets/carta3.png'

import correctImg from '../../assets/acertou.png'
import wrongImg from '../../assets/errou.png'


export function Play() {

    const Tutorial = [
        frame1,
        frame2,
        frame3,
        frame4,
        frame5,
        frame6
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const [isFinished, setIsFinished] = useState(false)

    function handleSkip() {
        setCurrentIndex(5)
    }

    useEffect(() => {
        if (currentIndex >= Tutorial.length) {
            setIsFinished(true)
            return
        }
        if (currentIndex == 1) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => prevIndex + 1)
            }, 6500)
            return () => clearInterval(interval)
        }
        if (currentIndex == 2) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => prevIndex + 1)
            }, 10000)
            return () => clearInterval(interval)
        }
        if (currentIndex == 3) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => prevIndex + 1)
            }, 7000)
            return () => clearInterval(interval)
        }
        if (currentIndex == 4) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => prevIndex + 1)
            }, 9000)
            return () => clearInterval(interval)
        }
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => prevIndex + 1)
        }, 6000)
        return () => clearInterval(interval)
    }, [currentIndex])


    const [flipped, setFlipped] = useState(true);
    const [flipped2, setFlipped2] = useState(true);
    const [flipped3, setFlipped3] = useState(true);

    const [onClicked, setOnClicked] = useState(false)

    const handlePergaminho = () => {
        setOnClicked(!onClicked)
    }

    const questions = [
        // 0 conjunção 1 disjunção 2 negação
        {
            question: "O Mestre das Chaves decreta: ‘Nenhum cavaleiro que não seja fiel ao rei entrará no salão real.’ O cavaleiro Mordred não jurou lealdade ao rei. Ele poderá entrar no salão?",
            resposta: 2,
        },
        {
            question: "O Rei determinou que todos os cavaleiros que entrarem na batalha devem estar usando armadura de aço e carregando um escudo sagrado.  A pergunta é: o cavaleiro Arthur, que está usando armadura de aço mas sem o escudo, poderá entrar na batalha?",
            resposta: 0,
        },
        {
            question: "Uma aldeia está sob uma maldição: ‘Aqueles que não usarem uma pedra encantada não poderão ver o caminho para o castelo.’ O aventureiro Roland não possui uma pedra encantada. Ele conseguirá ver o caminho para o castelo?",
            resposta: 2,
        },
        {
            question: "Na cidade medieval de Eldoria, o oráculo prevê que uma tempestade ou um ataque de dragão ocorrerá em breve. A população deve se preparar para se proteger. Se houver uma tempestade, todos devem buscar abrigo, e se houver um ataque de dragão, devem se armar. O que acontece se apenas uma das previsões se realizar?",
            resposta: 1,
        },
        {
            question: "Para que um aprendiz seja aceito na Guilda dos Magos, ele precisa ser capaz de lançar um feitiço de luz ou passar no teste de leitura de runas antigas. Morgana lançou um feitiço de luz, mas falhou no teste de runas. Ela será aceita na guilda",
            resposta: 1,
        },
        {
            question: "Para cruzar a ponte encantada, um viajante deve ter em mãos uma moeda de ouro e ser capaz de responder ao enigma do guardião. O mago Alaric tem uma moeda de ouro, mas não sabe o enigma. Ele conseguirá atravessar a ponte?",
            resposta: 0,
        },

    ]

    const [currentQuestion, setCurrentQuestion] = useState(0)
    //@ts-ignore
    const [answer, setAnswer] = useState(0)
    const [resultImage, setResultImage] = useState<string | null>(null)

    function handleAnswer(selectedAnswer: number) {
        const isCorrect = selectedAnswer === questions[currentQuestion].resposta

        if (isCorrect) {
            setResultImage(correctImg)
            setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        } else {
            setResultImage(wrongImg)
            setCurrentQuestion(0)
        }


        setAnswer(selectedAnswer);
        if (currentQuestion < questions.length - 1) {
            setTimeout(() => {
                setResultImage(null); // Limpa a imagem ao avançar para a próxima pergunta
            }, 2500); // Espera 1 segundo antes de mudar para a próxima pergunta

        } else {
            setTimeout(() => {
                setResultImage(null); // Limpa a imagem de resultado antes de mostrar o alerta
                alert('Você completou o quiz!');
            }, 2500);
        }



    }

    if (isFinished) {
        return (
            <Container>
                <Background src={background} />
                <QuestionButton onClick={handlePergaminho}></QuestionButton>
                {onClicked && (
                    <div>
                        <Pergaminho src={pergaminho} />
                        <P>
                            <p>{questions[currentQuestion].question}</p>
                        </P>
                    </div>
                )}
                <section>
                    <CardContainer
                        flipped={flipped}
                        onMouseEnter={() => setFlipped(false)}
                        onMouseLeave={() => setFlipped(true)}
                        onClick={() => handleAnswer(0)}
                    >
                        <CardFront frontcard={carta1} />
                        <CardBack backcard={backcard} />
                    </CardContainer>
                    <CardContainer
                        flipped={flipped2}
                        onMouseEnter={() => setFlipped2(false)}
                        onMouseLeave={() => setFlipped2(true)}
                        onClick={() => handleAnswer(1)}
                    >
                        <CardFront frontcard={carta2} />
                        <CardBack backcard={backcard} />
                    </CardContainer>
                    <CardContainer
                        flipped={flipped3}
                        onMouseEnter={() => setFlipped3(false)}
                        onMouseLeave={() => setFlipped3(true)}
                        onClick={() => handleAnswer(2)}
                    >
                        <CardFront frontcard={carta3} />
                        <CardBack backcard={backcard} />
                    </CardContainer>
                </section>

                {resultImage && (
                    <AlertContainer>
                        <Background src={resultImage} />
                    </AlertContainer>
                )}
            </Container>

        )
    }


    return (
        <PrincipalContainer>
            <Image src={Tutorial[currentIndex]} />
            <SkipButton onClick={handleSkip}>Skip</SkipButton>
        </PrincipalContainer>
    )
}