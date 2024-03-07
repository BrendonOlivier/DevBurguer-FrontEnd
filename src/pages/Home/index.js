// Todo projeto, deletamos tudo no inicio, para enfim começar do 0 :
// Toda página que utilizarmos "react", devemos importa-lo antes!
// Sempre componentes "react" com LETRA MAIUSCULA

import React, { useState, useRef } from 'react';      // import react.
import axios from 'axios'                             // import axios, biblioteca pra se comunicar com o BackEnd
import Burguer from '../../assets/burguer0.jpg'
import { useNavigate } from 'react-router-dom'
import { Container, Imagem, ContainerItems, InputLabel, H2, Input, Button } from './styles.js';      // importando os componentes React do CSS

// Hoje em dia todo componente "react", criamos como uma função !
// JSX = Misturamos códigos HTML com JavaScript e CSS também.

const App = () => {     // Aqui que iremos introduzir a nossa aplicação FrontEnd !!!
  // ESTADO ==> VARIÁVEL
  const [orders, setOrders] = useState([])
  const navigate = useNavigate()
  const inputOrders = useRef()
  const inputName = useRef()

  const Pedido = 'Faça seu pedido!'


  async function addNewUser() {
    const {data: newOrder} = await axios.post("http://localhost:3002/orders", { // Estamos pegando apenas os componentes do Data do nosso BackEnd
    application: inputOrders.current.value,
    clientName: inputName.current.value,

    })
   

    setOrders([ ...orders,  newOrder])

    navigate("/pedidos")
  }



  return (
    <Container>
      <Imagem alt='imagem-hamburguer-logo' src={Burguer} />

      <ContainerItems>

        <H2>{Pedido}</H2>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrders} placeholder='Faça seu pedido' />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputName} placeholder='My name is...' />
        <Button onClick={addNewUser}>Fazer Pedido</Button>

      </ContainerItems>



    </Container>

  )
}

export default App


















