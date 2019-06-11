import React from 'react';
import PropTypes from 'prop-types';
import ProductModal from './productModal'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Create from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';


class ProductCard extends React.Component {
  constructor(props){
    super(props);
    this.state = { show: false };
    if(props.product.Images.length)
      this.state.mainImage = props.product.Images[0].link
    else
      this.state.mainImage = "https://5.imimg.com/data5/RE/SD/MY-3773531/pharmaceutical-product-500x500.jpg"
  }
  closeDialog(){
    this.setState({ show: false });
  }

  openDialog = () => {
    this.setState({show: true})
  }


  render(){
    const { classes, product, editable } = this.props;
    return (
      <div>
        <Card className={classes.card} style={{position: 'relative'}} onClick={this.openDialog}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Pharma Prod"
              className={classes.media}
              height="140"
              src={this.state.mainImage}
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
  editButton : {
    position: 'absolute',
    top: 0,
    right: 0
  },
  media: {
    objectFit: 'cover',
  },
});

export default withStyles(styles)(ProductCard);