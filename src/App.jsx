import React from 'react'
import { Typography, Button, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons'
import useStyles from './styles'

const cards = [1, 2, 3 , 4, 5, 6, 7, 8, 9]

const App = () => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <AppBar posotion="relative">
                <Toolbar>
                    <PhotoCamera classNme={classes.icon}/>
                    <Typography variant="h6">Photo Album</Typography>
                </Toolbar>
            </AppBar>
            <main style={{marginTop: '70px'}}>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant="h2" color="textPrimary" align="center" gutterBottom>Photo Album</Typography>
                        <Typography variant="h6" color="textSecondary" align="center" paragraph>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores incidunt, facilis repellendus corporis dolores quisquam?
                        </Typography>
                        <div classNme={classes.buttons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        see my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Secondry action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        component="img"
                                        height="150"
                                        image="https://source.unsplash.com/random"
                                        title="image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant="h5" gutterBottom>
                                            Heading
                                        </Typography>
                                        <Typography>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, enim? Sit aliquid reiciendis nisi tenetur.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">View</Button>
                                        <Button size="small" color="promary">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}

                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>Ahmed Radi 2022 &copy;</Typography>
                <Typography variant="subtitle2" color="textSecondry" align="center" gutterBottom>Email: <a href="mailto:ahmedradi743@gmail.com">ahmedradi743</a></Typography>
                <Typography variant="subtitle2" align="center" gutterBottom>Phone: <a href="tel:+201019278438">+201019278438</a></Typography>
            </footer>
        </>
    )
}

export default App;