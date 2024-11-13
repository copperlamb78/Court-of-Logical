import { Container, Image1, Image2, LinkNav, PrincipalContainer } from "./style";

import play from '../../assets/play.png'
import settings from '../../assets/settings.png'

import background from '../../assets/background.png'

export function Home() {
    return (
        <PrincipalContainer>
            <Container urlImg={background}>
                <LinkNav to={'/play'}>
                    <Image1 src={play} />
                </LinkNav>
                <LinkNav to={'/settings'}>
                    <Image2 src={settings} />
                </LinkNav>
            </Container>
        </PrincipalContainer>
        
    )
}