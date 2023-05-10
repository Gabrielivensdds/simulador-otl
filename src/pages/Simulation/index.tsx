import { PlayCircle } from '@phosphor-icons/react'
import { useForm, Controller, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { Button } from '../../components/Button'
import { CheckBox } from '../../components/Checkbox'
import { Input } from '../../components/Input'
import { Label } from '../../components/Label'
import { RadioGroup } from '../../components/RadioGroup'
import { Text } from '../../components/Text'
import {
  CheckItemConteiner,
  CheckLineConteiner,
  Container,
  ItemFormConteiner,
  LineFormConteiner,
} from './styles'
import { ExpandableCard } from '../../components/ExpandableCard'
import { EditableTable } from '../../components/EditableTable'

const ParamSimFormValidationSchema = zod.object({
  CBConvRem: zod.boolean(),
  CBBloqQual: zod.boolean(),
  CBNO2B2B: zod.boolean(),
  CBNO2D2C: zod.boolean(),
  CBCartBloq: zod.boolean(),
  CBOTLReM: zod.boolean(),
  RGUseCapLog: zod.boolean(),
  RGUseConvLTR: zod.boolean(),
  RGUseCutOff: zod.boolean(),
})

type CreateSimulationData = zod.infer<typeof ParamSimFormValidationSchema>

export interface TableItem {
  id: string
  Conversao: string
  AgVendas: string
  SomaTotal: string
  [key: string]: any
}

interface TableHeaders {
  header: string
  acessor: keyof TableItem
}

export interface SimulationContextType {
  data: TableItem[]
  headers: TableHeaders[]
}

const data: TableItem[] = [
  {
    id: '1',
    Conversao: '2.158',
    AgVendas: 'Magazine Luiza',
    SomaTotal: '58422',
  },
  {
    id: '2',
    Conversao: '2.158',
    AgVendas: 'Magazine Luiza',
    SomaTotal: '58422',
  },
  {
    id: '3',
    Conversao: '2.158',
    AgVendas: 'Magazine Luiza',
    SomaTotal: '58422',
  },
]

const headers: TableHeaders[] = [
  { header: 'Conversão', acessor: 'Conversao' },
  { header: 'Agencia de Vendas', acessor: 'AgVendas' },
  { header: 'Soma Total', acessor: 'SomaTotal' },
]

const optionsLog = [
  { value: false, label: 'Não', id: '1' },
  { value: true, label: 'Sim', id: '2' },
]

const optionsLTR = [
  { value: false, label: 'Não', id: '3' },
  { value: true, label: 'Sim', id: '4' },
]

const optionsCut = [
  { value: false, label: 'Não', id: '5' },
  { value: true, label: 'Sim', id: '6' },
]

export function Simulation() {
  const handleCreateSimulation = (data: CreateSimulationData) => {
    console.log(data)
  }

  const newSimulation = useForm<CreateSimulationData>({
    defaultValues: {
      CBConvRem: false,
      CBBloqQual: false,
      CBNO2B2B: false,
      CBNO2D2C: false,
      CBCartBloq: false,
      CBOTLReM: false,
      RGUseCapLog: false,
      RGUseConvLTR: false,
      RGUseCutOff: false,
    },
    resolver: zodResolver(ParamSimFormValidationSchema),
  })

  const { handleSubmit, control, formState } = newSimulation
  console.log(formState.errors)
  console.log(headers)

  return (
    <FormProvider {...newSimulation}>
      <Container onSubmit={handleSubmit(handleCreateSimulation)}>
        <LineFormConteiner>
          <ItemFormConteiner>
            <Text>ID da simulação</Text>
            <Input></Input>
          </ItemFormConteiner>
        </LineFormConteiner>
        <ExpandableCard title="Balizadores">
          <CheckLineConteiner>
            <CheckItemConteiner>
              <Controller
                name="CBConvRem"
                control={control}
                render={({ field }) => (
                  <CheckBox id="d1" onValueChange={field.onChange} />
                )}
              />
              <Label htmlFor="d1">Conversão de Remessa</Label>
            </CheckItemConteiner>
            <CheckItemConteiner>
              <Controller
                name="CBBloqQual"
                control={control}
                render={({ field }) => (
                  <CheckBox id="d2" onValueChange={field.onChange} />
                )}
              />
              <Label htmlFor="d2">Bloqueio de Qualidade</Label>
            </CheckItemConteiner>
            <CheckItemConteiner>
              <Controller
                name="CBNO2B2B"
                control={control}
                render={({ field }) => (
                  <CheckBox id="d3" onValueChange={field.onChange} />
                )}
              />
              <Label htmlFor="d3">NO2 B2B</Label>
            </CheckItemConteiner>
          </CheckLineConteiner>
          <CheckLineConteiner>
            <CheckItemConteiner>
              <Controller
                name="CBNO2D2C"
                control={control}
                render={({ field }) => (
                  <CheckBox id="d4" onValueChange={field.onChange} />
                )}
              />
              <Label htmlFor="d4">NO2 D2C</Label>
            </CheckItemConteiner>
            <CheckItemConteiner>
              <Controller
                name="CBCartBloq"
                control={control}
                render={({ field }) => (
                  <CheckBox id="d5" onValueChange={field.onChange} />
                )}
              />
              <Label htmlFor="d5">Carteira Bloqueada</Label>
            </CheckItemConteiner>
            <CheckItemConteiner>
              <Controller
                name="CBOTLReM"
                control={control}
                render={({ field }) => (
                  <CheckBox id="d6" onValueChange={field.onChange} />
                )}
              />
              <Label htmlFor="d6">OTL Real e MAX</Label>
            </CheckItemConteiner>
          </CheckLineConteiner>
          <LineFormConteiner>
            <ItemFormConteiner>
              <Text>Capacidade de Logística</Text>
              <Controller
                name="RGUseCapLog"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    options={optionsLog}
                    onChange={field.onChange}
                  ></RadioGroup>
                )}
              />
            </ItemFormConteiner>
            <ItemFormConteiner>
              <Text>Conversão LTR</Text>
              <Controller
                name="RGUseConvLTR"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    options={optionsLTR}
                    onChange={field.onChange}
                  ></RadioGroup>
                )}
              />
            </ItemFormConteiner>
            <ItemFormConteiner>
              <Text>Cut-Off</Text>
              <Controller
                name="RGUseConvLTR"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    options={optionsCut}
                    onChange={field.onChange}
                  ></RadioGroup>
                )}
              />
            </ItemFormConteiner>
          </LineFormConteiner>
        </ExpandableCard>
        <ExpandableCard title="Conversão de Remessa">
          <EditableTable data={data} headers={headers}></EditableTable>
        </ExpandableCard>
        <ExpandableCard title="test">
          <div></div>
        </ExpandableCard>
        <Button css={{ alignSelf: 'end' }}>
          <PlayCircle size={22} />
          <span>Iniciar Simulação</span>
        </Button>
      </Container>
    </FormProvider>
  )
}
