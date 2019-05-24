import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuAppBar from '../components/menuAppBar';
import config from '../config/config';

var product = {
	name: 'Nombre',
	code: '1a5-32f3-54ff5',
	info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	img: ['https://5.imimg.com/data5/RE/SD/MY-3773531/pharmaceutical-product-500x500.jpg',''],
	format: ['70ml'],
	activePrinciples: ['Guido'],
}

const server_url = config.server_url;

class AltaProductos extends React.Component{

	constructor(props){
		super(props);
	}

	componentDidMount(){
	}

	render(){
		const { classes } = this.props;
		return(
			<div className={classes.container}>
				<MenuAppBar/>
			</div>
		)
	}
}

const styles = theme => ({
	test: {
		backgroundColor: '#fff',
		color: '#a2a',
		margin: 'auto',
		marginTop: '300px',
		width: '50%',
		height: '40px',
	},
});

export default  withStyles(styles)(AltaProductos);