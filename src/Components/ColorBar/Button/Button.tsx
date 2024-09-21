import * as Styled from './Button.styled';

// Button solid component with props color: string
export const Button = (props: { color: string; onClick: () => void }) => {
    return (
        <Styled.Container onClick={props.onClick} color={props.color} />
    );
}
