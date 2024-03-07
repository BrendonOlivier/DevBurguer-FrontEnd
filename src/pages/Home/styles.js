import styled from 'styled-components'          // Sempre importamos a biblioteca 


// Pra usarmos os componentes, precisamos por o export antes, para exportarmos.
// Forma padrão de estilizar um componente, e sempre usamos o `` em vez do {}
export const Container = styled.div`    
    background: black;
    background-size: cover;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;

`
export const Imagem = styled.img`    
    width: 250px;
    margin-top: 10px;
    
`


export const ContainerItems = styled.div`    
    display: flex;
  
    flex-direction: column;
    margin-top: 10px;
    
    
`
export const H2 = styled.h2`
    font-size: 30px;
    font-weight: bold;
    color: white;
    margin-bottom: 20px;
`

export const InputLabel = styled.p`    
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    color: white;
    margin-left: 15px;
   

`


export const Input = styled.input`    
    border-radius: 10px;
    box-shadow: 0px 0px 4px white;
    border: none;
    background-color: #47474C;
    margin-bottom: 20px;
    outline: none;

    width: 250px;
    height: 40px;
    font-size: 15px;
    font-weight: 300;
    padding-left: 10px;
`


export const Button = styled.button`    
    background-color: #d93856;
    color: white;
    border: none;
    width: 220px;
    height: 40px;
    margin-top: 35px;
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

export const ContainerOrders = styled.div`
    



`