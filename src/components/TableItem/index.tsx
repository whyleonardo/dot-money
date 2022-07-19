import { TBody } from './styles'

interface TableItemProps {
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

export const TableItem = ({
  title,
  type,
  category,
  amount,
  createdAt
}: TableItemProps) => {
  return (
    <TBody>
      <tr>
        <td>{title}</td>
        <td className={type}>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(amount)}
        </td>
        <td>{category}</td>
        <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(createdAt))}</td>
      </tr>
    </TBody>
  )
}
