import * as Styled from './Preview.styled';
import { activeColor, secondaryColor, setActiveColor, setSecondaryColor } from '../State';

export const Preview = () => {
    return (
        <Styled.Container onClick={() => {
            const active = activeColor();
            setActiveColor(secondaryColor());
            setSecondaryColor(active);
        }}>
            <Styled.Block x={12} y={13} color={secondaryColor()} />
            <Styled.Block x={5} y={5} color={activeColor()} />
        </Styled.Container>
    );
}
