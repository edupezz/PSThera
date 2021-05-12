import styled from 'styled-components';

export const MenuContainer = styled.div.attrs(props => ({
  
  size: props.size || "100vw",
}))`
  width: ${props => props.size};
`;