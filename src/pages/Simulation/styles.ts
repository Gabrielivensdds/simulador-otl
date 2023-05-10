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

export const CheckItemConteiner = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  gap: '14px',
  marginRight: '50px',
})

export const CheckLineConteiner = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  marginTop: '20px',
})

export const TitleFormConteiner = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
})

export const StepContainer = styled('div', {
  '&.p-steps': {
    fontSize: '1rem',
    paddingBottom: '1rem',
    textAlign: 'center',
    backgroundColor: 'red',
  },
  '&.p': {
    fontSize: '1rem',
    paddingBottom: '1rem',
    textAlign: 'center',
    backgroundColor: 'red',
    color: 'red',
  },

  '&.p-highlight .p-steps-number ': {
    backgroundColor: '#007ad9',
    color: 'red',
    borderColor: '#007ad9',
  },
})
