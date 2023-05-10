import { ReactNode } from 'react'

import { StyledButton } from './styles'
import { CSS } from '@stitches/react'

interface ButtonProps {
  children: ReactNode
  css?: CSS
  onClick?: () => void
}

export const Button = ({ children, css, onClick }: ButtonProps) => (
  <StyledButton css={css} onClick={onClick}>
    {children}
  </StyledButton>
)
