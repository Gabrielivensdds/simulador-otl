import { styled } from '../../styles'

export const Container = styled('form', {
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'start',
  flexDirection: 'column',
  gap: '1rem',
  maxWidth: '1190px',
  margin: '0 auto',
})

export const ItemFormConteiner = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '14px',
})

export const LineFormConteiner = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  marginTop: '25px',
  marginBottom: '25px',
})

export const StyledButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$white',
  margin: 'auto',
  color: '$gray500',
  fontWeight: '700',
  fontSize: '14px',
  border: 'none',
  outline: 'none',
})
