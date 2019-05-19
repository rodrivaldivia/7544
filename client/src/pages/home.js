import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ProductCard from '../components/productCard';

var product = {
	name: 'Nombre',
	code: '1',
	info: 'Desc',
	img: ['https://5.imimg.com/data5/RE/SD/MY-3773531/pharmaceutical-product-500x500.jpg',''],
	format: ['70ml'],
	activePrinciples: ['Guido'],
}

class Home extends React.Component{

	render(){
		const { classes } = this.props;
		return(
			<div className={classes.container}>
				<Typography component="h2" variant="display2" gutterBottom>
					Productos Farmaceuticos
				</Typography>
				<ProductCard product={product}/>
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
	container: {
		margin: '1rem',
	}
});

export default  withStyles(styles)(Home);