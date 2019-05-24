import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ProductCard from '../components/productCard';
import MenuAppBar from '../components/menuAppBar';
import SearchAppBar from '../components/searchAppBar';
import config from '../config/config';

import Anime from 'react-anime';

var product = {
	name: 'Nombre',
	code: '1a5-32f3-54ff5',
	info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	img: ['https://5.imimg.com/data5/RE/SD/MY-3773531/pharmaceutical-product-500x500.jpg',''],
	format: ['70ml'],
	activePrinciples: ['Guido'],
}

const server_url = config.server_url;

class Home extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			products: [product, product, product,product, product, product,product, product, product,],
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
		let animeProps = {
	      opacity: [0, 1],
	      translateY: [-64, 0],
	      delay: (el, i) => i * 100
	    };
		const { classes } = this.props;
		return(
			<div className={classes.container}>
				<MenuAppBar/>
				<div className={classes.products}>
					<Anime {...animeProps}>
					{
						this.state.products.map((product, i) =>
							<div key={i}>
	                    		<ProductCard product={product}/>
	                    	</div>
	                    )
					}
					</Anime>
				</div>
				<SearchAppBar/>
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
		margin: 20,
	},
	products: {
		display: 'flex',
		flexFlow: 'row wrap',
		marginTop: '70px',
	},
});

export default  withStyles(styles)(Home);