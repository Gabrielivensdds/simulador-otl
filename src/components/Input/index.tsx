import { ReactNode, useState } from 'react'
import { StyledInput } from './styles'

interface InputProps {
  children?: ReactNode
  placeholder?: string
}

export function Input({ children, placeholder }: InputProps) {
  const [value, setValue] = useState('')

  function handleSetValue(value: string) {
    setValue(value)
  }

  return (
    <StyledInput
      type="text"
      value={value}
      onChange={(e) => handleSetValue(e.target.value)}
      placeholder={placeholder}
    >
      {children}
    </StyledInput>
  )
}
