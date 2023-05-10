import { ReactElement } from 'react'
import { Table } from '../../components/Table'
import { Title } from '../../components/Title'
import { LineFormConteiner } from '../Home/styles'
import { Container } from '../Simulation/styles'
import { ItemFormConteiner, StyledButton } from './styles'
import { CaretRight } from '@phosphor-icons/react'

interface TableItem {
  id: number
  GGV: string
  AgVendas: string
  OtlBruto: string
  Conversao: string
  Detail: ReactElement
}
interface TableHeaders {
  header: string
  acessor: keyof TableItem
}

export interface HistoricContextType {
  headers: TableHeaders[]
  data: TableItem[]
}

export function Historic() {
  const data: TableItem[] = [
    {
      id: 1,
      GGV: 'GGV1 - Key Account',
      AgVendas: 'Magazine Luiza',
      OtlBruto: '58422',
      Conversao: '498898572',
      Detail: (
        <StyledButton>
          <CaretRight size={30} />
        </StyledButton>
      ),
    },
    {
      id: 2,
      GGV: 'GGV2 - Key Account',
      AgVendas: 'Magazine Luiza',
      OtlBruto: '58422',
      Conversao: '498898572',
      Detail: (
        <StyledButton>
          <CaretRight size={30} />
        </StyledButton>
      ),
    },
    {
      id: 3,
      GGV: 'GGV3 - Key Account',
      AgVendas: 'Magazine Luiza',
      OtlBruto: '58422',
      Conversao: '498898572',
      Detail: (
        <StyledButton>
          <CaretRight size={30} />
        </StyledButton>
      ),
    },
  ]
  const headers: TableHeaders[] = [
    { header: 'GGV', acessor: 'GGV' },
    { header: 'Agencia de Vendas', acessor: 'AgVendas' },
    { header: 'OTL Bruto', acessor: 'OtlBruto' },
    { header: 'Conversao', acessor: 'Conversao' },
    { header: 'Detalhes', acessor: 'Detail' },
  ]

  return (
    <Container>
      <LineFormConteiner>
        <ItemFormConteiner>
          <Title>Histórico</Title>
        </ItemFormConteiner>
      </LineFormConteiner>
      <LineFormConteiner>
        <Table data={data} headers={headers}></Table>
      </LineFormConteiner>
    </Container>
  )
}
