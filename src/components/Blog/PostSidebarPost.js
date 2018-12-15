import styled from 'styled-components'

const SidebarPost = styled.div`
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 1.25rem;
  display: ${props => (props.hide ? 'none' : 'block')};
`

export default SidebarPost
