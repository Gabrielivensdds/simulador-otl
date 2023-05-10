import { styled } from '../../styles'

export const Wrapper = styled('div', {
  marginBottom: '15px',
  border: '1px solid $gray300',
  borderBottom: '0',
  width: '100%',
  backgroundColor: '$white',
  display: 'block',
})

export const ItemFormConteiner = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '14px',
  marginTop: '100%',
})

export const StyledTable = styled('table', {
  display: 'table',
  width: '100%',
  borderCollapse: 'collapse',
  borderSpacing: 0,
})

export const TableHeader = styled('thead', {
  backgroundColor: '$yellow100',
  display: 'table-header-group',
  borderRadius: '4px',
})

export const TableRowsHeader = styled('tr', {
  color: '$white',
  display: 'table-row',
  textAlign: 'center',
})

export const TableHeaderCell = styled('th', {
  backgroundColor: '$yellow100',
  display: 'table-cell',
  padding: '16px',
  fontSize: '14px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
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

export const TableData = styled('td', {
  lineHeight: 1.43,
  display: 'table-cell',
  verticalAlign: 'inherit',
  borderBottom: '1px solid $gray100',
  textAlign: 'center',
  padding: '16px',
})
