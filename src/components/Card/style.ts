import styled from 'styled-components'

export const Container = styled.div`
  background: var(--shape);
  width: 21rem;
  padding: 1.5rem 1rem;
  border-radius: 0.5rem;
  transition: 0.5s;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 5rem;
    font-weight: 500;
    font-size: 2rem;
    line-height: 3rem;
  }

  &.highlight-background {
    background: var(--green);
    color: var(--shape);
  }

  &.highlight-red {
    background: var(--red);
    color: var(--shape);
  }
`
