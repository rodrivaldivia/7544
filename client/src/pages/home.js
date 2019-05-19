import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ProductCard from '../components/productCard';
import MenuAppBar from '../components/menuAppBar';
import config from '../config/config';

var product = {
	name: 'Nombre',
	code: '1',
	info: 'Desc',
	img: ['https://5.imimg.com/data5/RE/SD/MY-3773531/pharmaceutical-product-500x500.jpg',''],
	format: ['70ml'],
	activePrinciples: ['Guido'],
}

const server_url = config.server_url;

class Home extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			products: [product, product],
		}
	}

	getProducts(){
		fetch(server_url + '/product', {
			method: 'get',
			headers: {
				'Content-Type':'application/json',
				// 'Authorization': authToken.getToken(),
			}
		})
		.then(response => response.json())
		.then(data => {
			console.log(data);
			for (let i in data.products){
				console.log(data.products[i]);
			}
			this.setState({ 
				//products : data.products,
			});
		})
		.catch((err) => {
			console.log(err)
		});
	}

	componentDidMount(){
		this.getProducts();
	}

	render(){
		const { classes } = this.props;
		return(
			<div className={classes.container}>
				<MenuAppBar/>
				<div className={classes.products}>
				{
					this.state.products.map((product) => 
                    	<ProductCard key={product.code} product={product}/>
                    )
				}
				</div>
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
	},
	products: {
		display: 'flex',
		flexFlow: 'row wrap',
	},
});

export default  withStyles(styles)(Home);