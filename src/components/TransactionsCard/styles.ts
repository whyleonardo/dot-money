import styled from 'styled-components'

export const Card = styled.div`
  background: var(--shape);
  padding: 1.5rem 1.5rem;
  border-radius: 0.5rem;
  transition: 0.5s;
  margin-bottom: 1rem;

  header {
    display: flex;
    flex-direction: column;

    span {
      font-size: 1.5rem;
      color: var(--text-title);

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
  div {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;

    color: var(--text-body);
  }
`
