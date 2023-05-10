import { useState } from 'react'
import {
  House,
  CaretLeft,
  ArrowsCounterClockwise,
  ChartLineUp,
} from '@phosphor-icons/react'

import {
  ContainerSidebar,
  Header,
  SubHeader,
  ToggleButton,
  Title,
  LogoContainer,
  NavList,
  StyledNavLink,
} from './styles'

import logo from '../../assets/img/wp.svg'

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true)
  function handleOpen() {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <ContainerSidebar collapsed={isCollapsed}>
      <Header collapsed={isCollapsed}>
        <LogoContainer>
          <img src={logo} alt="" />
        </LogoContainer>
        {!isCollapsed && <Title>Whirlpool - ABI</Title>}
      </Header>
      <SubHeader collapsed={isCollapsed}>
        {!isCollapsed && <Title>MENU</Title>}
        <ToggleButton onClick={handleOpen} collapsed={isCollapsed}>
          <CaretLeft size={14} />
        </ToggleButton>
      </SubHeader>
      <NavList>
        <li>
          <StyledNavLink to="/" collapsed={isCollapsed}>
            <House size={22} />
            {!isCollapsed && <span>Home</span>}
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/Simulation" collapsed={isCollapsed}>
            <ArrowsCounterClockwise size={22} />
            {!isCollapsed && <span>Simulação</span>}
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/Historic" collapsed={isCollapsed}>
            <ChartLineUp size={22} />
            {!isCollapsed && <span>Histórico</span>}
          </StyledNavLink>
        </li>
      </NavList>
    </ContainerSidebar>
  )
}
