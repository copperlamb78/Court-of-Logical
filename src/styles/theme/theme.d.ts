import "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,
        colors: {
            black: string,
            white: string,
        }
    }
}