import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import {  ListItem, Button, ListItemSecondaryAction, ListItemText, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux'
import { stockOwnedChange } from '../redux/actions/stocksActions'

const useStyles = makeStyles((theme) => ({
  buyButton: {
    marginTop: '4px'
  },
  quantityField: {
    marginRight: '10px'
  },
  stockText: {
    marginRight: '10px'
  }
}));

export default function StockPurchaseListItem(props){
  const stock = props.stock;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0)

  const max =  Math.floor(props.money/stock.price)
  function handlePurchase(){
    if(quantity*stock.price <=props.money){
      dispatch(stockOwnedChange(stock.id, quantity + stock.owned));
    }

  }

  return(
    <>
      <ListItem
        key={stock.id}>

        <ListItemText
          className={classes.stockText}
          primary={stock.name}
          secondary={'$' + stock.price} />
        <Tooltip placement="left" title="Amount to purchase" aria-label="Amount to purchase">
          <TextField required
            onChange={event => { setQuantity(parseInt(event.target.value)) }}
            style={{width:'20%'}}
            InputProps={{
              inputProps: {
                max: max, min: 1
              }
            }}
            id={stock.id}
            label="Quantity"
            variant="outlined"
            type="number"
            className={classes.quantityField} />
          </Tooltip>

        <Button
          className={classes.buyButton}
          variant="contained"
          color="primary"
        onClick={() => handlePurchase()}
          >Buy</Button>
      </ListItem>
    </>
  )
}
