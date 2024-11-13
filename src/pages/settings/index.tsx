

import background from "../../assets/settingsback.png"
import { Container, PrincipalContainer } from "../home/style"
import { BackButton } from "./style"

export function Settings() {
    return (
        <PrincipalContainer>
            <Container urlImg={background}>
                <BackButton to={"/"}>    
                    Return
                </BackButton>
            </Container>
        </PrincipalContainer>
    )
}