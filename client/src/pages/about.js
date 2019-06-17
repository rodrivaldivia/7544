import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

class About extends React.Component{

	render(){
		const { classes } = this.props;
		return (
			<Paper className={classes.paper}>
			<Typography component="h1" variant="h4" align="left">
				La Compañía
			</Typography>
			<Typography component="p" variant="p" color="secondary" align="left" gutterBottom>
				La Compañía es una empresa dedicada al servicio de la salud desde hace más de 90 años. A partir de ese momento, inicia un proceso de expansión ininterrumpida que continúa hasta el día de hoy.
Su actividad principal consiste en la comercialización y distribución de especialidades medicinales, productos médicos, cosméticos y alimentos. En la actualidad, se ubica como una de las empresas líderes del rubro, en el ámbito de la República Argentina. Se destaca por brindar un trato profesional y personalizado, ejerciendo un rol social y asegurando la disponibilidad de artículos en farmacias, sanatorios y agentes de la salud habilitados.
			</Typography>
			<Typography component="h1" variant="h6" align="left">
				Misión
			</Typography>
			<Typography component="p" variant="p" color="primary" align="left" gutterBottom>
Comercializar y distribuir eficientemente los productos a través de un servicio personalizado y profesional y en total compromiso con el desarrollo social y ambiental.
			</Typography>
			<Typography component="h1" variant="h6" align="left">
				Visión
			</Typography>
			<Typography component="p" variant="p" color="secondary" align="left" gutterBottom>
Ser sinónimo de excelencia en soluciones logísticas para el mercado de la salud y principal socio estratégico para nuestros clientes. Ser ejemplo de compromiso social y ambiental.			</Typography>
			</Paper>
		);
	}
}

const styles = theme => ({
	paper: {
	    margin: 'auto',
	    marginTop: theme.spacing.unit * 16,
	    width: '50%',
	    minWidth: '300px',
	    display: 'flex',
	    flexDirection: 'column',
	    // alignItems: 'center',
	    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
	},
});

export default  withStyles(styles)(About);