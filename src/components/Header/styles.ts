import styled from 'styled-components'

export const Container = styled.header`
  padding-top: 1.5rem;
  width: 100%;
  background: var(--blue);
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 90%;
  margin: 0 auto;
  padding-bottom: 12rem;
`

export const Button = styled.button`
  color: var(--blue-light);
  font-weight: 500;
  background-color: var(--shape);
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  transition: all 0.3s;

  &:hover {
    color: var(--shape);
    background-color: var(--blue-light);
    box-shadow: 0px 0px 0px 2px var(--shape) inset;
  }
`
