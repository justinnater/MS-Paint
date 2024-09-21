import { ThemeType } from "./Theme";
import "solid-styled-components";

// Extend the DefaultTheme interface to match the inferred theme type
declare module "solid-styled-components" {
    export interface DefaultTheme extends ThemeType {}
}
