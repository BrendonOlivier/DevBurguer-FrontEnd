// Todo projeto, deletamos tudo no inicio, para enfim começar do 0 :
// Toda página que utilizarmos "react", devemos importa-lo antes!
// Sempre componentes "react" com LETRA MAIUSCULA

import React, { useState, useEffect } from 'react';      // import react.
import axios from 'axios'                             // import axios, biblioteca pra se comunicar com o BackEnd
import { useNavigate } from 'react-router-dom'
import BurguerOrder from '../../assets/burger1.png'
import Trash from '../../assets/lixo.png'
import { Container, Imagem, ContainerItems, H2, Button, Order, DivGeral, DivPara } from './styles.js';      // importando os componentes React do CSS

// Hoje em dia todo componente "react", criamos como uma função !
// JSX = Misturamos códigos HTML com JavaScript e CSS também.

const Oorders = () => {     // Aqui que iremos introduzir a nossa aplicação FrontEnd !!!
  // ESTADO ==> VARIÁVEL
  const [orders, setOrders] = useState([])
  const navigate = useNavigate()


  useEffect(() => {
    async function fetchOrders() {
      const { data: newOrders } = await axios.get("http://localhost:3002/orders");

      setOrders(newOrders);

    }
    fetchOrders()

  }, [])

  async function deleteOrder(orderID) {
    await axios.delete(`http://localhost:3002/orders/${orderID}`)
    const delOrder = orders.filter((order) => order.id !== orderID);

    setOrders(delOrder);
  }

  function goBackPage() {
    navigate("/");
  }

  return (
    <Container>
      <Imagem alt='imagem-hamburguer-logo' src={BurguerOrder} />

      <ContainerItems>
        <H2>Pedidos</H2>
        <ul>
          {orders.map((order) => (
            <Order key={order.id}>
              <DivGeral>
                <button onClick={() => deleteOrder(order.id)}>
                  <img src={Trash} alt='lata-de-lixo' />
                </button>
                <DivPara>
                  <p>{order.application}</p> <p>{order.clientName}</p>
                </DivPara>
              </DivGeral>
            </Order>
          ))}
        </ul>
        <Button onClick={goBackPage}>Voltar</Button>

      </ContainerItems>

    </Container>

  )
}

export default Oorders


















