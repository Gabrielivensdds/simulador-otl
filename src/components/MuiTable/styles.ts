import {
  TableContainer,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Button,
  TableRow,
} from '@mui/material'
import { styled } from '../../styles'

const colors = {
  gray100: '#f5f5f5',
  gray200: '#ebebeb',
  gray300: '#d6d6d6',
  gray500: '#777777',
  blue500: '#2196f3',
}

export const TableContainerWrapper = styled(TableContainer, {
  backgroundColor: colors.gray100,
})

export const StyledToolbar = styled(Toolbar, {
  display: 'flex',
  justifyContent: 'space-between',
})

export const Title = styled(Typography, {
  flex: '1',
  fontWeight: '600',
})

export const SearchContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  border: `1px solid ${colors.gray300}`,
  borderRadius: '4px',
  padding: '4px',
})

export const SearchInput = styled(InputBase, {
  border: 'none',
  '& input': {
    minWidth: '100px',
    padding: '4px 8px',
  },
})

export const ClearButton = styled(IconButton, {
  color: colors.gray500,
})
export const StyledButton = styled(Button, {
  margin: '5px',
  display: 'flex',
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

export const ChangeStyle = {
  margin: '5px',
  display: 'flex',
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
}

export const StyledTableRow = styled(TableRow, {
  backgroundColor: '$yellow100',
  color: '$white',
})
