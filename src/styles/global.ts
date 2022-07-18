import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

@keyframes modal-open {
  0% {
    transform: translateY(500px) ;
  }

  100% {
    transform: translateY(0) ;
  }
}

  :root {
    /* COLORS */
    --background: #f0f2f5;
    --red: #e52e4d;
    --green: #33cc95;

    --blue: #5429cc;
    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;
    --input-background: #e7e9ee;
    --shape: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: none; /* For Firefox */

  }

  html {
      @media (max-width: 1080px) {
        font-size: 93.75%;
      }

      @media (max-width: 720px) {
        font-size: 87.5%;
      }
  }

  body, 
  input, 
  textarea,
  button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  input {
    outline: none;
  }

  h1,h2,
  h3,h4,
  h5,h6,
  strong {
    font-weight: 600;
    }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

::-webkit-scrollbar {
  display: none;  
}


.react-modal-overlay {
  display: flex;
  align-items: end;
  /* justify-content: end; */
  
  position: fixed;
  top: 0;
  bottom: 0;
  background: rgba(0,0,0, 0.5);
}
.react-modal-content {
  width: 100%;
  padding: 1rem;
  background: var(--shape);
  border-radius: 1rem 1rem 0 0;
  animation: modal-open .5s ease-in-out ;
}

 /* MEDIA QUERIES */
 @media (min-width: 768px) { 
   .react-modal-overlay {
     display: flex;
     align-items: center;
     justify-content: center;
     
     position: fixed;
     top: 0;
     bottom: 0;
     left: 0;
     right: 0;
    }
    
    .react-modal-content {
      max-width: 576px;
      padding: 3rem;
      border-radius: 0.25rem;
      position: relative; 
    } 

  }
`
