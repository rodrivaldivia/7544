import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    objectFit: 'cover',
  },
};

function ProductCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
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
            Product
          </Typography>
          <Typography component="p">
            Lorem Ipsum algo algo
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCard);