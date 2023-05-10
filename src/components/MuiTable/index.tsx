import {
  ChangeStyle,
  ClearButton,
  SearchContainer,
  SearchInput,
  StyledButton,
  StyledTableRow,
  StyledToolbar,
  TableContainerWrapper,
  Title,
} from './styles'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { useState } from 'react'

export function MuiTable() {
  const data = [
    {
      id: 1,
      GGV: 'GGV1 - Key Account',
      AgVendas: 'Magazine Luiza',
      OtlBruto: '58422',
      Conversao: '498898572',
    },
    {
      id: 2,
      GGV: 'GGV1 - Key Account',
      AgVendas: 'Magazine Luiza',
      OtlBruto: '58422',
      Conversao: '498898572',
    },
    {
      id: 3,
      GGV: 'GGV1 - Key Account',
      AgVendas: 'Magazine Luiza',
      OtlBruto: '58422',
      Conversao: '498898572',
    },
  ]

  const [searchValue, setSearchValue] = useState('')
  const [isEditable, setIsEditable] = useState(false)
  const [TableData, SetTableData] = useState(data)

  const handleGGVChange = (index: any, newGGV: string) => {
    const newData = [...data]
    newData[index].GGV = newGGV
    SetTableData(newData)
  }

  const handleAgVendasChange = (index: any, newAgVendas: any) => {
    const newData = [...data]
    newData[index].AgVendas = newAgVendas
    SetTableData(newData)
  }

  const handleOtlBrutoChange = (index: any, newOtlBruto: any) => {
    const newData = [...data]
    newData[index].OtlBruto = newOtlBruto
    SetTableData(newData)
  }

  const handleConversaoChange = (index: any, newConversao: any) => {
    const newData = [...data]
    newData[index].Conversao = newConversao
    SetTableData(newData)
  }

  const filterData = TableData.filter((row) =>
    row.GGV.toLowerCase().includes(searchValue.toLowerCase()),
  )

  const onSearchInputChange = (event) => {
    setSearchValue(event.target.value)
  }

  const clearSearch = () => {
    setSearchValue('')
  }

  return (
    <TableContainerWrapper>
      <StyledToolbar>
        <Title variant="h6"> Table Table Table Teste</Title>
        <SearchContainer>
          <SearchInput
            placeholder="Search"
            value={searchValue}
            onChange={onSearchInputChange}
          />
          {searchValue && (
            <ClearButton onClick={clearSearch}>
              <Typography>Limpar</Typography>
            </ClearButton>
          )}
        </SearchContainer>

        {!isEditable && (
          <StyledButton
            onClick={() => setIsEditable(!isEditable)}
            style={ChangeStyle as {}}
          >
            <span>Edit</span>
          </StyledButton>
        )}
        {isEditable && (
          <StyledButton
            onClick={() => setIsEditable(!isEditable)}
            style={ChangeStyle as {}}
          >
            Cancel
          </StyledButton>
        )}
        {isEditable && (
          <StyledButton
            onClick={() => setIsEditable(!isEditable)}
            style={ChangeStyle as {}}
          >
            Save
          </StyledButton>
        )}
      </StyledToolbar>
      <Table aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            <TableCell
              align="center"
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              GGV
            </TableCell>
            <TableCell
              align="center"
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              AgVendas
            </TableCell>
            <TableCell
              align="center"
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              OtlBruto
            </TableCell>
            <TableCell
              align="center"
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              Conversao
            </TableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {filterData.map((row) => (
            <TableRow key={row.id}>
              <TableCell
                align="center"
                contentEditable={isEditable}
                onChange={(e) => handleGGVChange(row, e.target.value)}
              >
                {row.GGV}
              </TableCell>
              <TableCell align="center" contentEditable={isEditable}>
                {row.AgVendas}
              </TableCell>
              <TableCell align="center" contentEditable={isEditable}>
                {row.OtlBruto}
              </TableCell>
              <TableCell align="center" contentEditable={isEditable}>
                {row.Conversao}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainerWrapper>
  )
}
