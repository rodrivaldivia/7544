import React from 'react';
import PropTypes from 'prop-types';
import ProductModal from './productModal'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

class ProductCard extends React.Component {
  constructor(props){
    super(props);
    this.state = { show: false };
    console.log(props.product)
  }

  closeDialog(){
    this.setState({ show: false });
  }

  openDialog = () => {
    this.setState({show: true})
  }

  render(){
    const { classes } = this.props;
    const { product } = this.props;
    return (
      <div>
        <Card className={classes.card} onClick={this.openDialog}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Pharma Prod"
              className={classes.media}
              height="140"
              src="https://5.imimg.com/data5/RE/SD/MY-3773531/pharmaceutical-product-500x500.jpg"
              title="Producto Farmaceutico"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
              <Typography component="p">
                {product.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <ProductModal open={this.state.show} product={this.props.product} handleClose={this.closeDialog.bind(this)}/>
      </div>
  );
  }  
}

const styles = theme => ({
  card: {
    maxWidth: 345,
    margin: 20,
    width: 300,
    [theme.breakpoints.down('sm')]: {
        width: '95%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
  },
  media: {
    objectFit: 'cover',
  },
});

export default withStyles(styles)(ProductCard);