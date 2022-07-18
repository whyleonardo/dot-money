import styled from 'styled-components'
import { darken, transparentize } from 'polished'

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
  }

  input {
    padding: 0 1.5rem;
    width: 100%;
    height: 4rem;
    border: 1px solid #d7d7d7;
    margin-top: 1rem;
    font-weight: 400;
    font-size: 1rem;
    border-radius: 0.25rem;
    background: var(--input-background);

    &::placeholder {
      color: var(--text-body);
    }
  }

  button[type='submit'] {
    width: 100%;
    padding: 0 1.5rem;
    margin-top: 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    transition: 0.5s;

    &:hover {
      filter: brightness(0.9);
    }

    &:disabled {
      filter: brightness(0.6);
    }
  }
`

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  transition: 0.5s;
  color: var(--text-body);

  &:hover {
    transform: scale(1.2);
  }

  @media (min-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
    margin: 1.5rem;
  }
`

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin-top: 1rem;
`

interface RadioBoxProps {
  isActive: boolean
  activeColor: 'green' | 'red'
}

const colors = {
  green: '#33cc95',
  red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  border: 2px solid #d7d7d7;
  transition: 0.2s;

  background: ${({ isActive, activeColor }) =>
    isActive ? transparentize(0.8, colors[activeColor]) : 'transparent'};

  span {
    font-size: 1rem;
    color: var(--text-title);
  }

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
