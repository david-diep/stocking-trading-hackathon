import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import stocks from './stocks.json'
import { List, ListItem, Button, ListItemSecondaryAction, ListItemText } from '@material-ui/core';

export default function BuyingPage() {
let stockList = []
  for(let i=0; i<stocks.length; i++){
  stockList.push(
    <ListItem>
      <ListItemText
        primary={stocks[i].name}
        secondary={stocks[i].cost}
      />
      <ListItemSecondaryAction>
        <Button variant="contained" color="primary">Buy</Button>
      </ListItemSecondaryAction>
    </ListItem>
 )}

  return (
    <>
      <Container>
        <Box my={4}>
          <h1>Buying</h1>
        </Box>

        <List >
          {stockList}
        </List>

      </Container>

        

    </>
  );
}
