import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`

export const TableContainer = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;
`
export const MobileContainer = styled.div`
  margin-top: 2rem;
  margin-inline: auto;
  width: 90%;

  @media (min-width: 768px) {
    display: none;
    width: 22rem;
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  margin-bottom: 1rem;

  span {
    color: var(--text-title);
    font-weight: 400;
  }

  p {
    color: var(--text-body);
  }
`
