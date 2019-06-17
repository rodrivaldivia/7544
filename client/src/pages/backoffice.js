import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import AddBox from '@material-ui/icons/AddBox';
import TabNav from '../components/tabNav';
import AddPrincipleModal from '../components/addPrincipleModal';
import SearchAppBar from '../components/searchAppBar';
import ProductCard from '../components/productCard';
import PrincipleCard from '../components/principleCard';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import AddProductModal from '../components/addProductModal';
import config from '../config/config';

const server_url = config.server_url;
class Backoffice extends Component{
	constructor(props){
		super(props);
		this.state = {
			tabs:[{
				label: 'Productos',
				renderer: this.renderProductsBackoffice.bind(this)
			},{
				label: 'Principios Activos',
				renderer: this.renderActivePrinciplesBackoffice.bind(this)
			}],
			products: [],
			activePrinciples: [],
			search: '',
			addProductShow:false,
			addPrincipleShow:false,
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
			// var newprod = {name: data.products[0].name}
			// data.products.push(product)
			console.log(data.products)
			this.setState({ 
				products : data.products,
			});
		})
		.catch((err) => {
			console.log(err)
		});
	}


	getActivePrinciples(){
		fetch(server_url + '/principles', {
			method: 'get',
			headers: {
				'Content-Type':'application/json',
				// 'Authorization': authToken.getToken(),
			}
		})
		.then(response => {
			return response.json()
		})
		.then(data => {
			// var newprod = {name: data.products[0].name}
			// data.products.push(product
			console.log(data.principles)
			this.setState({ 
				activePrinciples : data.principles,
			});
		})
		.catch((err) => {
			console.log(err)
		});
	}

	handleProductAdd(product){
		let newList = this.state.products
		newList.unshift(product)
		this.setState({ products : newList})
	}
	handlePrincipleAdd(principle){
		let newList = this.state.activePrinciples
		newList.unshift(principle)
		console.log(newList)
		this.setState({ activePrinciples : newList})
	}
	componentDidMount(){
		this.getProducts();
		this.getActivePrinciples();
	}

	closeProductDialog(){
    	this.setState({ addProductShow: false });
	}
	closePrincipleDialog(){
    	this.setState({ addPrincipleShow: false });
	}
	handleTextChange= name => event => {
	    this.setState({ [name] : event.target.value });
	};

	onPrincipleDelete(deletedPrinciple){
		let newPrinciples = []
		this.state.activePrinciples.forEach(principle => {
			if(deletedPrinciple.id !=principle.id)
				newPrinciples.push(principle)
		})
		this.setState({activePrinciples: newPrinciples})
	}


	onProductDelete(deletedProduct){
		let newProducts = []
		this.state.products.forEach(product => {
			if(deletedProduct.id !=product.id)
				newProducts.push(product)
		})
		this.setState({products: newProducts})
	}


	renderProductsBackoffice(){
		return(
			<div>
			<div style={styles.cardHeader}>
							<Typography variant="h3">
								Productos
							</Typography>
							<IconButton onClick={() => this.setState({addProductShow: true})}>
								<AddBox color="primary"/>
							</IconButton>
						</div>
						<div style={styles.cardBody}>	
						{
							this.state.products.map((product, i) =>{
								if(product.name.toLowerCase().includes(this.state.search.toLowerCase()))
								return(
									<div key={i}>
			                    		<ProductCard editable={true} onDelete={this.onProductDelete.bind(this)} product={product} />
			                    	</div>
								)

							})
						}
			</div>
			<AddProductModal open={this.state.addProductShow} onAdd={this.handleProductAdd.bind(this)} handleClose={this.closeProductDialog.bind(this)}/>
			</div>
		)
	}

	renderActivePrinciplesBackoffice(){
		return(
			<div>
			<div style={styles.cardHeader}>
							<Typography variant="h3">
								Principios Activos
							</Typography>
							<IconButton onClick={() => this.setState({addPrincipleShow: true})}>
								<AddBox color="primary"/>
							</IconButton>
						</div>
						<div style={styles.cardBody}>	
						{
							this.state.activePrinciples.map((principle, i) =>{
								if(principle.name.toLowerCase().includes(this.state.search.toLowerCase()))
								return(
									<div>
			                    		<PrincipleCard principle={principle} onDelete={this.onPrincipleDelete.bind(this)}/>
			                    	</div>
								)

							})
						}
			</div>
			<AddPrincipleModal open={this.state.addPrincipleShow} onAdd={this.handlePrincipleAdd.bind(this)} handleClose={this.closePrincipleDialog.bind(this)}/>
			</div>
		)
	}


	render(){
		return(
			<div style={styles.mainCointainer}>
				<TabNav tabs={this.state.tabs}/>

				<SearchAppBar stateKey="search" search={this.state.search} onTextChange={this.handleTextChange.bind(this)}/>
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