import React, { useEffect } from 'react';
import { Box, Button } from '@chakra-ui/react';
import Container from '../components/Container';

function HomePage() {
  useEffect(() => {
    // Inicialização da data layer versão 2
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'pageLoad',
      ecommerce: {
        currencyCode: 'BRL', // Define a moeda como Real Brasileiro
        items: []
      }
    });

    // Verifique se a inicialização foi bem-sucedida
    console.log('Data layer inicializada:', window.dataLayer);
  }, []);

  // Função para simular a compra de um produto
  const handlePurchase = (productName, productPrice) => {
    // Gera um ID único para a transação baseado no timestamp
    const transactionId = `T${new Date().getTime()}`;
    
    console.log(`Iniciando compra: ${productName}, preço: ${productPrice}, ID da transação: ${transactionId}`); // Adicione isso para depuração

    window.dataLayer.push({
      event: 'purchase',
      ecommerce: {
        transaction_id: transactionId, // ID da transação único
        affiliation: 'Online Store',
        value: productPrice, // Receita da transação
        tax: 1.29,
        shipping: 5.00,
        currency: 'BRL',
        coupon: 'SUMMER_SALE',
        items: [{
          item_name: productName,
          item_id: `P${Math.random()}`, // ID do item único
          price: productPrice,
          item_brand: 'BrandName',
          item_category: 'Category',
          item_variant: 'Variant',
          quantity: 1
        }]
      }
    });

    // Verifique se o evento foi enviado corretamente
    console.log('Data layer após compra:', window.dataLayer);

    alert(`Compra do produto ${productName} realizada com sucesso!`);
  };

  return (
    <Box minH="100vh">
      <Container>
        <Button onClick={() => handlePurchase('Produto 1', 100)} colorScheme="blue" m={4}>
          Compra Produto 1
        </Button>
      </Container>
      <Container>
        <Button onClick={() => handlePurchase('Produto 2', 200)} colorScheme="green" m={4}>
          Comprar Produto 2
        </Button>
      </Container>
    </Box>
  );
}

export default HomePage;
