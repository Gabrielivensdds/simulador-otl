import { styled } from '../../styles'

export const Wrapper = styled('div', {
  marginBottom: '15px',
  border: '1px solid $gray300',
  borderRadius: '4px',
  width: '100%',
  backgroundColor: '$gray50',
  display: 'block',
})

export const Header = styled('div', {
  position: 'relative',
  display: 'flex',
  minHeight: '64px',
  paddingLeft: '24px',
  paddingRight: '24px',
  boxSizing: 'border-box',
})

export const Button = styled('button', {
  display: 'flex',
  margin: '10px',
  boxSizing: 'border-box',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '6px 14px',
  backgroundColor: '$yellow100',
  color: '$white',
  borderColor: '$white',
  fontWeight: '700',
  fontSize: '14px',
  borderRadius: '4px',
  border: '2px solid',
  outline: 'none',
  gap: '10px',
  boxShadow:
    'rgba(17, 17, 26, 0.05) 0px 1px 0px,rgba(17, 17, 26, 0.1) 0px 0px 8px',
  '&:hover': {
    backgroundColor: '$white',
    color: '$yellow100',
    border: '2px solid',
    boxSizing: 'border-box',
    borderColor: '$yellow100',
    borderRadius: '4px',
  },
})

export const Table = styled('table', {
  display: 'table',
  width: '100%',
  borderCollapse: 'collapse',
  borderSpacing: 0,
})

export const EditableInput = styled('input', {
  textAlign: 'center',
  backgroundColor: '$gray50',
  border: '1px solid $gray50',
  borderRadius: '4px',
  color: '$gray500',
  fontSize: '14px',
  padding: '8px 12px',
  width: 'auto',
  minWidth: '50px',
  maxWidth: '200px',
  position: 'relative',
  '&::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },

  '&:focus': {
    backgroundColor: '$white',
    border: '1px solid $gray100',
    boxShadow: '0 0 0 1px $primary',
    outline: 'none',
  },
})

export const TableData = styled('td', {
  lineHeight: 1.43,
  display: 'table-cell',
  verticalAlign: 'inherit',
  borderBottom: '1px solid $gray100',
  textAlign: 'center',
  padding: '16px',
})

export const TableHeader = styled('thead', {
  backgroundColor: '$yellow100',
  display: 'table-header-group',
})

export const TableHeaderCell = styled('th', {
  backgroundColor: '$yellow100',
  display: 'table-cell',
  border: '0',
  padding: '16px',
  fontSize: '14px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  textAlign: 'center',
})
export const TableRowsHeader = styled('tr', {
  color: '$white',
  display: 'table-row',
  textAlign: 'center',
})

export const TableBody = styled('tbody', {
  display: 'table-row-group',
})

export const TableRows = styled('tr', {
  display: 'table-row',
  verticalAlign: 'middle',
  outline: '1px',
})
