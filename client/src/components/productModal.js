import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    objectFit: 'cover',
  },
};

function ProductModal(props) {
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
          <List className={classes.root}>
            <ListItem>
              <Avatar>
                <ImageIcon />
              </Avatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
            <ListItem>
              <Avatar>
                <WorkIcon />
              </Avatar>
              <ListItemText primary="Work" secondary="Jan 7, 2014" />
            </ListItem>
            <ListItem>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
              <ListItemText primary="Vacation" secondary="July 20, 2014" />
            </ListItem>
          </List>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

ProductModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductModal);