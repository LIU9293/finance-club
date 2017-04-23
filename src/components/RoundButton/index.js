/**
 * @flow
 */
import styled from 'styled-components';

type RoundButtonProps = {
  block?: boolean,
  primary?: boolean,
  color: string,
}

const RoundButton = styled.button`
  display: ${(props: RoundButtonProps) => props.block ? 'block' : 'inline-block'};
  text-align: center;
  height: 56px;
  padding: 0 28px;
  margin: 20px 0;
  color: ${(props: RoundButtonProps) => props.primary ? 'white' : props.color};
  backgroundColor: ${(props: RoundButtonProps) => !props.primary ? 'white' : props.color};
  transition: all 0.3s ease;
  border-radius: 28px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.2rem;
  line-height: 1.2;
  letter-spacing: 0.1em;

  &:hover {
    box-shadow: ${(props: RoundButtonProps) => props.primary ? '0 0 8px 0 rgba(134, 142, 150, 0.8)' : 'none'};
    outline: none;
  }

  &:focus {
    outline: none;
  }
`;

RoundButton.defaultProps = {
  color: 'rgb(92, 124, 250)',
}

export default RoundButton;
