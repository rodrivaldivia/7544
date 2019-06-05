import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import config from '../config/config';
const server_url = config.server_url;

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    objectFit: 'cover',
  },
  buttonDelete:{
    color: 'tomato'
  }
};

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500],
  },
}))(props => {
  const { children, classes, onClose } = props;
  return (
      <MuiDialogTitle disableTypography className={classes.root}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit,
  },
}))(MuiDialogActions);


class ProductModal extends React.Component {
  deleteProduct(){
    fetch(server_url + '/product/' + this.props.product.id, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      this.props.handleClose();
    })
    .catch(err => {
      console.error(err);
    });
  } 
  render(){
    const { classes } = this.props;
    return (
        <Dialog
          onClose={this.props.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.props.open}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.props.handleClose}>
            Producto: {this.props.product.name}
          </DialogTitle>
          <DialogContent>
            <Typography variant="h4" gutterBottom>
             Principios activos: {this.props.product.activePrinciples}
           </Typography>
           <Typography variant="body1" >
             {this.props.product.info}
           </Typography>
           <Typography variant="overline">
             {this.props.product.format}
           </Typography>
           <Typography variant="button">
             {this.props.product.code}
           </Typography>
           {/*<List className={classes.root}>
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
           </List>*/}
          </DialogContent>
          <DialogActions>
            <Button href={'/editar/' + this.props.product.id } color="secondary">
              Editar
            </Button>
            <Button onClick={this.deleteProduct.bind(this)} className={classes.buttonDelete}>
              Borrar
            </Button>
          </DialogActions>
        </Dialog>
  );

  }  
}
          // <Typography gutterBottom variant="h5" component="h2">
          //   Product
          // </Typography>
          // <Typography component="p">
          //   Lorem Ipsum algo algo
          // </Typography>
          // <List className={classes.root}>
          //   <ListItem>
          //     <Avatar>
          //       <ImageIcon />
          //     </Avatar>
          //     <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          //   </ListItem>
          //   <ListItem>
          //     <Avatar>
          //       <WorkIcon />
          //     </Avatar>
          //     <ListItemText primary="Work" secondary="Jan 7, 2014" />
          //   </ListItem>
          //   <ListItem>
          //     <Avatar>
          //       <BeachAccessIcon />
          //     </Avatar>
          //     <ListItemText primary="Vacation" secondary="July 20, 2014" />
          //   </ListItem>
          // </List>


ProductModal.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(ProductModal);