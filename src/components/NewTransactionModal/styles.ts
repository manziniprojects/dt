import styled, { isStyledComponent } from 'styled-components'
import { darken } from 'polished'


export const Container = styled.form`

h2{
    color: var(--text);
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

input{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-size: 1rem;
    font-weight:400;

  &::placeholder{
      color: var(--text-body);
  }
  & + input {/*espacamento depois do primeiro input*/ 
      margin-top: 1rem;
  }
}

button[type='submit']{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top:1.5rem;
    font-weight: 600;

    transition: filter 0.2s;
    &:hover{
        filter: brightness(0.9);
    }
}



`;


export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid; /* dividir em colunas   */
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

    /*button{ foi colocado no RadioBox
        height: 4rem;
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;
        background: transparent;
        display: flex;

        align-items: center;
        justify-content: center;

        transition: border-color 0,2s;

        img{
            width: 20px;
            height: 20px;
        }

        &:hover{
            border-color: ${darken(0.1, '#d7d7d7')};
        }

        span{
            display: inline-block;
            margin-left: 1rem;
            font-size: 1rem;
            color: var(--text-title);
        }
    }*/

`;

interface RadioBoxProps{
    isActive:boolean;//cria propriedade
}

    export const RadioBox = styled.button<RadioBoxProps>`  //passa a propriedade
        height: 4rem;
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;

        background: ${(props)=>props.isActive ? '#ccc' : 'transparent'};
        //se a propriedade for ativa passa uma cor senao transparente

        display: flex;

        align-items: center;
        justify-content: center;

        transition: border-color 0,2s;

        img{
            width: 20px;
            height: 20px;
        }

        &:hover{
            border-color: ${darken(0.1, '#d7d7d7')};
        }

        span{
            display: inline-block;
            margin-left: 1rem;
            font-size: 1rem;
            color: var(--text-title);
        }


` ;