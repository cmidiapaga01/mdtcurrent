import React, { useEffect } from 'react';
import { Box, Button } from '@chakra-ui/react';
import Container from '../components/Container';

function ContactPage() {
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
  }, []);

  // Função para simular a compra de um produto
  const handlePurchase = (productName, productPrice) => {
    window.dataLayer.push({
      event: 'purchase',
      ecommerce: {
        transaction_id: 'T12345', // ID da transação
        affiliation: 'Online Store',
        value: productPrice, // Receita da transação
        tax: 1.29,
        shipping: 5.00,
        currency: 'BRL',
        coupon: 'SUMMER_SALE',
        items: [{
          item_name: productName,
          item_id: 'P12345',
          price: productPrice,
          item_brand: 'BrandName',
          item_category: 'Category',
          item_variant: 'Variant',
          quantity: 1
        }]
      }
    });
    alert(`Compra do produto ${productName} realizada com sucesso!`);
  };

  return (
    <Box minH="100vh">
      <Container>
        <Button onClick={() => handlePurchase('Produto 1', 100)} colorScheme="blue" m={4}>
          Comprar Produto 1
        </Button>
        <Button onClick={() => handlePurchase('Produto 2', 200)} colorScheme="green" m={4}>
          Comprar Produto 2
        </Button>
      </Container>
    </Box>
  );
}

export default ContactPage;
