import styled from 'styled-components'          // Sempre importamos a biblioteca 


// Pra usarmos os componentes, precisamos por o export antes, para exportarmos.
// Forma padrão de estilizar um componente, e sempre usamos o `` em vez do {}
export const Container = styled.div `    
    background: black;
    background-size: cover;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;
    

`
export const Imagem = styled.img `    
    width: 150px;
    margin-top: 10px;
    
`


export const ContainerItems = styled.div `    
    display: flex;
    height: 100%;
    min-height: calc(100vh - 170px);
    flex-direction: column;
    margin-top: 10px;
    gap: 20px;
    
    
`
export const H2 = styled.h2 `
    font-size: 30px;
    font-weight: bold;
    color: white;
    margin-bottom: 20px;
    margin-left: 80px;
`

export const Order = styled.li `
    

`

export const DivGeral = styled.div `
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    background: red;
    background-color: #2C2C31;
    margin-bottom: 30px;
    width: 300px;
    height: 80px;
    border-radius: 10px;
    justify-content: space-around;
    

    button{
        background: none;
        border: none;
        cursor: pointer;
        padding-left: 10px;
        margin-top: 10px;
    }

`

export const DivPara = styled.div `
    display: flex;
    flex-direction: column;
    color: white;
    gap: 20px;  
    


`


export const Button = styled.button `    
    background-color:  #2C2C31;
    color: white;
    border: none;
    width: 300px;
    height: 60px;
    
    cursor: pointer;

// Quando quisemos aplicar um hover, actived, etc... usamos o &

&:hover {
    opacity: 0.7;
    color: black;
}

&:active {
    opacity: 0.4;
}
`

export const ContainerOrders = styled.div `
    



`