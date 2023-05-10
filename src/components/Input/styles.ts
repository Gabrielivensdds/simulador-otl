import { styled } from '../../styles'

export const StyledInput = styled('input', {
  height: '2.875rem',
  margin: '10px',
  paddingLeft: '25px',
  paddingRight: '25px',
  backgroundColor: 'white',
  border: '1px solid $gray100',
  borderRadius: '4px',
  boxShadow: `0 0 0 0.5px #989797`,
  '&:focus': {
    outline: 'none',
    borderColor: '$lightblue',
  },
  '&::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
})
