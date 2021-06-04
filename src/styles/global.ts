import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root{//variavel
    --background:#f0f2f5;
    --red:#E62E4D;
    --blue:#5429CC;

    --blue-light:#6933ff;

    --text-title:#363F5F;
    --text-body:#969CB3;
    --shape:#FFFFFF;

}


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

html{
    @media (max-width:1080px){//usuario com tela de no maximo //15px
        font-size: 93.75%;
    }

    @media (max-width:720px){//usuario com tela de no maximo //14px
        font-size: 93.75%;
    }
}

//REM -1rem = tamanho do font size 16px
body{
    background:var(---background);
    -webkit-font-smoothing:antialiased;
}

body, input, textarea,button{
font-family: 'Poppins', sans-serif;
font-weight: 400;
}

h1,h2,h3,h4,h5, strong{
    font-weight: 600;
}
button{
    cursor: pointer;
}

[disabled]{
opacity: 0.6;
cursor: not-allowed;
}
`