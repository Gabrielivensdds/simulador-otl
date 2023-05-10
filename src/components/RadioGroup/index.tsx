import {
  Flex,
  Label,
  RadioGroupIndicator,
  RadioGroupItem,
  RadioGroupRoot,
} from './styles'

interface Option {
  id: string
  value: boolean
  label: string
}

interface RadioGroupProps {
  options: Option[]
  onChange: (selectedOptions: boolean) => void
}

export function RadioGroup({ options, onChange }: RadioGroupProps) {
  const handleValueChange = (value: string | boolean) => {
    if (typeof value === 'string') {
      onChange(value === 'true')
    } else {
      onChange(value)
    }
  }
  return (
    <RadioGroupRoot
      aria-label="View density"
      defaultValue={options[0].value.toString()}
      onValueChange={handleValueChange}
    >
      {options.map((option) => (
        <Flex key={option.id}>
          <RadioGroupItem value={option.value.toString()} id={option.id}>
            <RadioGroupIndicator />
          </RadioGroupItem>
          <Label htmlFor={option.id}>{option.label}</Label>
        </Flex>
      ))}
    </RadioGroupRoot>
  )
}
