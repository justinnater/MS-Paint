// import original module declarations
import "solid-styled-components";
import { DefaultTheme } from "solid-styled-components";

// and extend them!
declare module "solid-styled-components" {
    export interface DefaultTheme {
        colors: {
            primary: string;
            black: string;
        }
        button: {
            light: string;
            normal: string;
            dark: string;
        }
    }
}
