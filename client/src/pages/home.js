import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

class Home extends React.Component{

	render(){
		const { classes } = this.props;
		return(
			<div>
				<Typography component="h2" variant="display4" gutterBottom>
					Title
				</Typography>
				<div className={classes.test}>
				TEST
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
	}
});

export default  withStyles(styles)(Home);