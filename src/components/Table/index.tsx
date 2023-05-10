import {
  ItemFormConteiner,
  StyledTable,
  TableBody,
  TableData,
  TableHeader,
  TableHeaderCell,
  TableRows,
  TableRowsHeader,
  Wrapper,
} from './styles'
import { HistoricContextType } from '../../pages/Historic'
import { Text } from '../Text'

export function Table({ data, headers }: HistoricContextType) {
  if (data.length === 0 || headers.length === 0) {
    return (
      <ItemFormConteiner>
        <Text> Sem Historico no momento.</Text>
      </ItemFormConteiner>
    )
  }

  return (
    <Wrapper>
      <StyledTable>
        <TableHeader>
          {headers && (
            <TableRowsHeader>
              {headers.map((item) => (
                <TableHeaderCell key={item.header}>
                  {item.header}
                </TableHeaderCell>
              ))}
            </TableRowsHeader>
          )}
        </TableHeader>
        <TableBody>
          {data &&
            data.map((item) => (
              <TableRows key={item.id}>
                {headers.map((header) => (
                  <TableData key={header.acessor}>
                    {item[header.acessor]}
                  </TableData>
                ))}
              </TableRows>
            ))}
        </TableBody>
      </StyledTable>
    </Wrapper>
  )
}
