import * as Styled from "./App.styled";
import { TopBar } from "./Components/TopBar/TopBar.tsx";
import { ToolBar } from "./Components/ToolBar/ToolBar.tsx";
import { ColorBar } from "./Components/ColorBar/ColorBar.tsx";
import { HelpBar } from "./Components/HelpBar/HelpBar.tsx";
import { Workspace } from "./Components/Workspace/Workspace.tsx";
import { Dialog } from "./Components/Dialog/Dialog.tsx";

const App = () => {
    return (
        <Styled.Container>
            <TopBar />
            <Styled.SubContainer>
                <ToolBar />
                <Workspace />
            </Styled.SubContainer>
            <ColorBar />
            <HelpBar />
            <Dialog />
        </Styled.Container>
    );
}

export default App;
