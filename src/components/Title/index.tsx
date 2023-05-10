import { CSS } from '@stitches/react'
import { ReactNode } from 'react'
import { StyledTitle } from './styles'

interface TitleProps {
  children: ReactNode
  css?: CSS
}

export const Title = ({ children, css }: TitleProps) => {
  return <StyledTitle css={css}>{children}</StyledTitle>
}
