import { Logo } from '../Logo'
import { Button, Container, Content } from './styles'

export const Header = () => {
  return (
    <Container>
      <Content>
        <Logo />
        <Button type="button">Nova Transação</Button>
      </Content>
    </Container>
  )
}
