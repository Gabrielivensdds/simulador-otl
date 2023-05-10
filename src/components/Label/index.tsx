import { StyledLabel } from './styles'
import { ReactNode } from 'react'

interface LabelProps {
  children: ReactNode
  htmlFor: string
}
export function Label({ children, htmlFor }: LabelProps) {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>
}
