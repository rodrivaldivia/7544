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
import MenuAppBar from '../components/menuAppBar';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import CloudUploadOutlineIcon from '@material-ui/icons/CloudUpload';
import Divider from '@material-ui/core/Divider';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
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


class AddProductModal extends React.Component {

  	constructor(props){
		super(props);
		this.state = {
			name: '',
			code: '',
			info: '',
			img: [],
			format: [],
			activePrinciples: [],
		}
	}


	componentDidMount(){
		if(this.props.product){
			const { product } = this.props
			let imageLinks = []
			this.setState({
				name: product.name,
				code: product.code,
				info: product.info,
				img: product.images,
				format: product.formats,
				activePrinciples: ['Ninguno']
			})
			console.log(product)
		}
	}
	
	handleInputChange = (event) => {
		const { value, name } = event.target;
		this.setState({
		  [name]: value
		});
	}

	handleInputListChange = idx => (event) => {
		const { value, name } = event.target;
	    const newInput = this.state[name].map((value, sidx) => {
	      if (idx !== sidx) return value;
	      return event.target.value;
    	});
		this.setState({ [name]: newInput });
	};

	handleAddList = name => (event) => {
		let newList = this.state[name];
		newList.push('');
		this.setState({
		  [name]: newList
		});
	};

	handleRemoveList = (idx, name) => (event) => {
		this.setState({
		  [name]: this.state[name].filter((s, sidx) => idx !== sidx)
		});
	};
	
	onSubmit = (event) => {
		event.preventDefault();
		let product = {
		    name: this.state.name,
			code: this.state.code,
			info: this.state.info,
			img:  this.state.img,
			format: this.state.format,
			activePrinciples: this.state.activePrinciples,
		};
		console.log(product);
		fetch(server_url + '/product', {
		  method: 'post',
		  headers: {
		    'Content-Type': 'application/json'
		  },
		  body: JSON.stringify(product),
		})
		.then(res => res.json())
		.then(res => {
		  console.log(res,123);
		  this.props.onAdd(res)
		})
		.catch(err => {
		  console.error(err);
		});
		this.props.handleClose()
	}
  render(){
    const { classes } = this.props;
    return (
        <Dialog
          onClose={this.props.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.props.open}
        >
          <DialogContent>
					<Avatar className={classes.avatar}>
						<CloudUploadOutlineIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Subir un producto
					</Typography>
					<form className={classes.form} onSubmit={this.onSubmit}>
			            <FormControl margin="normal" required fullWidth>
			              <InputLabel htmlFor="text">Nombre</InputLabel>
			              <Input id="name"
			              name="name"
			              autoComplete='off'
			              onChange={this.handleInputChange}
			              value={this.state.name}
			              autoFocus />
			            </FormControl>
			            <FormControl margin="normal" required fullWidth>
			              <InputLabel htmlFor="text">Codigo</InputLabel>
			              <Input name="code"
			              type="code"
			              autoComplete='off'
			              id="code"
			              onChange={this.handleInputChange}
			              value={this.state.code}
			              />
			            </FormControl>
			            <div className={classes.list}>
				            {this.state.format.map((format, idx) => (
					          	<FormControl margin="normal">
					          	<div className="listInput">
				              		<InputLabel htmlFor="text">Formato {idx + 1}</InputLabel>
						            <InputBase
						              className={classes.inputInList}
						              name="format"
						              autoComplete='off'
						              placeholder={`Formato ${idx + 1}`}
						              value={format}
						              onChange={this.handleInputListChange(idx)}
						            />
						            <IconButton className={classes.iconButton}
						              type="button"
						              onClick={this.handleRemoveList(idx,'format')}
						              className="small"
						            >
								        <RemoveCircleIcon />
								    </IconButton>
					          	</div>
					        	</FormControl>
					        ))}
					        <Button
					          type="button"
					          fullWidth
					          variant="outlined"
					          color="secondary"
					          onClick={this.handleAddList('format')}
					          className="small"
					        >
					          Agregar Formato
					        </Button>
			            </div>

			            <div className={classes.list}>
				            {this.state.img.map((img, idx) => (
					          	<FormControl margin="normal">
					          	<div className="listInput">
				              		<InputLabel htmlFor="text">Imagen {idx + 1}</InputLabel>
						            <InputBase
						              className={classes.inputInList}
						              name="img"
						              autoComplete='off'
						              placeholder={`Imagen ${idx + 1}`}
						              value={img}
						              onChange={this.handleInputListChange(idx)}
						            />
						            <IconButton className={classes.iconButton}
						              type="button"
						              onClick={this.handleRemoveList(idx, 'img')}
						              className="small"
						            >
								        <RemoveCircleIcon />
								    </IconButton>
					          	</div>
					        	</FormControl>
					        ))}
					        <Button
					          type="button"
					          fullWidth
					          variant="outlined"
					          color="secondary"
					          onClick={this.handleAddList('img')}
					          className="small"
					        >
					          Agregar Imagen
					        </Button>
			            </div>

			            <div className={classes.list}>
				            {this.state.activePrinciples.map((img, idx) => (
					          	<FormControl margin="normal">
					          	<div className="listInput">
				              		<InputLabel htmlFor="text">Principio activo {idx + 1}</InputLabel>
						            <InputBase
						              className={classes.inputInList}
						              name="activePrinciples"
						              autoComplete='off'
						              placeholder={`Principio activo ${idx + 1}`}
						              value={img}
						              onChange={this.handleInputListChange(idx)}
						            />
						            <IconButton className={classes.iconButton}
						              type="button"
						              onClick={this.handleRemoveList(idx, 'activePrinciples')}
						              className="small"
						            >
								        <RemoveCircleIcon />
								    </IconButton>
					          	</div>
					        	</FormControl>
					        ))}
					        <Button
					          type="button"
					          fullWidth
					          variant="outlined"
					          color="secondary"
					          onClick={this.handleAddList('activePrinciples')}
					          className="small"
					        >
					          Agregar Principio Activo
					        </Button>
			            </div>

			            <FormControl margin="normal" required fullWidth>
			              <InputLabel htmlFor="textarea">Descripción</InputLabel>
			              <Input name="info"
			              type="info"
			              autoComplete='off'
			              multiline={true} 
			              id="info"
			              onChange={this.handleInputChange}
			              />
			            </FormControl>

			            <Button
			              type="submit"
			              fullWidth
			              variant="contained"
			              color="primary"
			              className={classes.submit}
			            >
			              Subir
			            </Button>
			        </form>
          </DialogContent>
        </Dialog>
  );

  }  
}



AddProductModal.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(AddProductModal);