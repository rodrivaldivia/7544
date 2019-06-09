import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import AddBox from '@material-ui/icons/AddBox';
import ProductCard from '../components/productCard';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import config from '../config/config';

const server_url = config.server_url;
class Backoffice extends Component{
	constructor(props){
		super(props);
		this.state = {
			products: [],
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
			console.log(this.state.products);
			console.log(data.products[0]);
			// var newprod = {name: data.products[0].name}
			// data.products.push(product)
			this.setState({ 
				products : data.products,
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
		return(
			<div style={styles.mainCointainer}>
				<Card>
					<CardContent>
						<div style={styles.cardHeader}>
							<Typography variant="h3">
								Bienvenido al backoffice
							</Typography>
							<IconButton href="/subir">
								<AddBox color="primary"/>
							</IconButton>
						</div>
						<div style={styles.cardBody}>	
						{
							this.state.products.map((product, i) =>
								<div key={i}>
		                    		<ProductCard editable={true} product={product}/>
		                    	</div>
		                    )
						}
						</div>
					</CardContent>
				</Card>
			</div>
		)
	}
}

const styles = {
	mainCointainer:{
		marginTop: 80
	},
	cardBody:{
		display: 'flex',
		flexFlow: 'row wrap',
	},
	cardHeader:{
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
}
export default Backoffice;