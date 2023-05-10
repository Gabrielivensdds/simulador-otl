import { ButtonLink } from '../../components/ButtonLink'
import {
  ItemFormConteiner,
  LineFormConteiner,
  StyledFlex,
  TitleFormConteiner,
} from './styles'
import { Title } from '../../components/Title'
import Jira from '../../assets/img/Jira.svg'
import Bitbucket from '../../assets/img/BitBucket.svg'
import GCP from '../../assets/img/GCP.svg'
import ViaVarejo from '../../assets/img/ViaVarejo.svg'
import TaQi from '../../assets/img/TaQi.svg'
import Gazin from '../../assets/img/Gazin.svg'
import NovoMundo from '../../assets/img/NovoMundo.svg'
import foto from '../../assets/fototeste.png'
import { Text } from '../../components/Text'
import { Card } from '../../components/Card'

export function Home() {
  return (
    <StyledFlex>
      <TitleFormConteiner>
        <Title>Simulador Outlook - OTL</Title>
        <Title>
          O projeto tem como objetivo criar um modelo de dados para a análise do
          Outlook, através da integração de dados de Estoque e Sell Out dos
          mesmos. Acesse nossos links:
          <a href=""> https://google.com</a> .
        </Title>
      </TitleFormConteiner>
      <LineFormConteiner>
        <ItemFormConteiner>
          <ButtonLink css={{}}>
            <img src={Jira} alt="" />
            <span>Acessar Jira</span>
          </ButtonLink>
        </ItemFormConteiner>
        <ItemFormConteiner>
          <ButtonLink>
            <img src={Bitbucket} alt="" />
            <span>Acessar Bitbucket</span>
          </ButtonLink>
        </ItemFormConteiner>
        <ItemFormConteiner>
          <ButtonLink>
            <img src={GCP} alt="" />
            <span>Acessar GCP</span>
          </ButtonLink>
        </ItemFormConteiner>
      </LineFormConteiner>
      <TitleFormConteiner>
        <Title css={{ fontSize: '30px' }}>Automatizando Clientes</Title>
        <Text>
          O processo manual atualmente realizado parao Magalu será automatizado
          fornecendo sugestões de pedidos, posicionamento de carteira e um
          Dashboard com indicadores da operação do ABI, até o momento será
          escalonado para 4 clientes que são eles:
        </Text>
      </TitleFormConteiner>
      <LineFormConteiner>
        <img src={ViaVarejo} alt="" />
        <img src={TaQi} alt="" />
        <img src={Gazin} alt="" />
        <img src={NovoMundo} alt="" />
      </LineFormConteiner>
      <TitleFormConteiner css={{ marginTop: '50px' }}>
        <Title css={{ fontSize: '30px' }}>Equipe de Desenvolvimento</Title>
        <Text>
          Nossa equipe de desenvolvimento é formado por dois setores, que são
          eles Business e Technical:
        </Text>
        <Title css={{ fontSize: '24px' }}>Business:</Title>
      </TitleFormConteiner>
      <LineFormConteiner>
        <Card pictureSrc={foto} name="John Freyts" job="Frontend Developer" />
        <Card pictureSrc={foto} name="Joao Freitas" job="Frontend Developer" />
        <Card pictureSrc={foto} name="John Doe" job="Frontend Developer" />
        <Card pictureSrc={foto} name="John Doe" job="Frontend Developer" />
      </LineFormConteiner>
    </StyledFlex>
  )
}
