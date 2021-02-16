import { Container, Typography } from '@material-ui/core'
import React from 'react'

function Contenido() {
    return (
        <Container>
<Typography variant='h2' component='h1'>Bienvenid@ a Info Pelis</Typography>
<br/>
<Typography variant='h5' component='h5'> Descripcion:</Typography>
<br/>

<Typography variant='p' component='p'> 
Esta es una aplicacion web que se comunica con una api (http://www.omdbapi.com/) de peliculas
                para mostrar los resultados de la busqueda por titulo. Pudiendo ademas ver el detalle de la pelicula,
                añadir a favoritas y quitar de favoritas.
</Typography>
<br/>

<Typography variant='h5' component='h5'>  Objetivo:</Typography>
<br/>

<Typography variant='p' component='p'> 
Demostrar un breve funcionamiento de una aplicacion web, desarrolladada con tecnologias modernas
</Typography> 
<br/>

<Typography variant='h5' component='h5'> Desarrollada con:</Typography>
<br/>

<Typography variant='ul' component='ul'>
<Typography variant='li' component='li'> React</Typography>
<Typography variant='li' component='li'>Redux</Typography>
<Typography variant='li' component='li'>Material ui</Typography>

</Typography>

      
        </Container>
    )
}

export default Contenido
