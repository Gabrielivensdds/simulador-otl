import { styled } from '../../styles'

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  maxWidth: '1190px',
  width: '1190px',
  margin: '0 auto',
  backgroundColor: '$white',
  paddingLeft: '50px',
  paddingRight: '50px',
  border: '1px solid #DCDCDC',
  borderRadius: '4px',
  overflow: 'hidden',
})
export const ExpandableDiv = styled('div', {
  variants: {
    expanded: {
      true: {
        transition: '6s',
        transitionTimingFunction: 'ease-out',
        maxHeight: '100rem',
      },
      false: {
        maxHeight: '6rem',
      },
    },
  },
})

export const StyledButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '6px 14px',
  backgroundColor: '$white',
  color: '$gray500',
  fontWeight: '700',
  fontSize: '14px',
  borderRadius: '4px',
  border: 'none',
  outline: 'none',
  '& svg': {
    transform: 'rotate(0deg)',
    transition: 'transform 0.5s',
    transitionTimingFunction: 'ease-in-out',
  },
  variants: {
    collapsed: {
      true: {
        '& svg': {
          transform: 'rotate(180deg)',
        },
      },
    },
  },
})

export const ItemFormConteiner = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '14px',
  justifyContent: 'center',
})

export const LineFormConteiner = styled('div', {
  display: 'flex',
  width: '100%',

  margin: '15px',
})
