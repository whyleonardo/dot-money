import styled from 'styled-components'

export const TBody = styled.tbody`
  td {
    padding: 1rem 2rem;
    border: 0;
    background: var(--shape);
    color: var(--text-body);

    &:first-child {
      border-radius: 0.5rem 0 0 0.5rem;
      color: var(--text-title);
    }

    &:last-child {
      border-radius: 0 0.5rem 0.5rem 0;
    }

    &.deposit {
      color: var(--green);
    }

    &.withdraw {
      color: var(--red);
    }
  }
`
