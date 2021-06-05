
import styled from 'styled-components'


export const Container = styled.div`
    display: grid; //colunas Iitens do mesmo tamanho
    grid-template-columns: repeat(3,1fr);//tres colunas de tamanhos iguais
    gap: 2rem; //espacamento entre cada item do grid
    margin-top: -10rem;

    div{
        background: var(--shape);
        padding: 1rem 3rem;
        border-radius: 10px;
        color: var(--text-tile);
        &.total{
        background-color: green;
        color:#fff;
    }

    
    

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong{
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        line-height: 3rem;
        font-weight: 500;
    }

    
    }
`