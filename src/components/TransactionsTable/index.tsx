import { Container } from './style'

export const TransactionsTable = () => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento Web</td>
            <td className="deposit">12 mil</td>
            <td>Desenvolvimento</td>
            <td>20/02/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- 1 mil</td>
            <td>Casa</td>
            <td>17/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
