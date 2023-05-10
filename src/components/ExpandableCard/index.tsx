import { ArrowFatDown } from '@phosphor-icons/react'
import {
  Container,
  ExpandableDiv,
  ItemFormConteiner,
  LineFormConteiner,
  StyledButton,
} from './styles'
import { ReactNode, useState } from 'react'
import { Title } from '../Title'

interface ExpandableCardProps {
  children: ReactNode
  title: string
}

export function ExpandableCard({ children, title }: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  function handleExpand() {
    event?.preventDefault()
    setIsExpanded(!isExpanded)
  }

  return (
    <Container>
      <LineFormConteiner>
        <ItemFormConteiner>
          <Title>{title}</Title>
        </ItemFormConteiner>
        <ItemFormConteiner>
          <StyledButton
            onClick={handleExpand}
            css={{ alignSelf: 'end' }}
            collapsed={isExpanded}
          >
            <ArrowFatDown size={25} weight="fill" />
          </StyledButton>
        </ItemFormConteiner>
      </LineFormConteiner>
      <ExpandableDiv expanded={isExpanded}>
        {isExpanded && <div>{children}</div>}
      </ExpandableDiv>
    </Container>
  )
}
