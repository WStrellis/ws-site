import React from "react"

// MUI
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Link from "@material-ui/core/Link"
import {makeStyles} from "@material-ui/core/styles"

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright"}&nbsp; &copy;&nbsp;
            <Link
                color="inherit"
                href="https://westleystrellis.com"
                title="https://westleystrellis.com"
            >
                Westley Strellis
            </Link>{" "}
            {new Date().getFullYear()}
        </Typography>
    )
} // end Copyright

const useStyles = makeStyles(theme => ({
    pageWrapper: {
        backgroundColor: theme.palette.grey["900"],
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    cardMedia: {
        paddingTop: "56.25%", // 16:9
        borderRadius: `${theme.shape.borderRadiusLg} ${theme.shape.borderRadiusLg} 0 0`,
    },
    cardContent: {
        flexGrow: 1,
        backgroundColor: theme.palette.grey["50"],
    },
    cardActions: {
        backgroundColor: theme.palette.grey["50"],
        borderRadius: ` 0 0 ${theme.shape.borderRadiusLg} ${theme.shape.borderRadiusLg} `,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
})) // end useStyles

const cards = [1, 2, 3, 4, 5, 6]

function Home() {
    const classes = useStyles()
    return (
        <>
            <main className={classes.pageWrapper}>
                {/* Hero*/}
                <section className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="textPrimary"
                            gutterBottom
                        >
                            Westley Strellis
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            color="textSecondary"
                            paragraph
                        >
                            Hi! Welcome my portfolio site!
                        </Typography>
                    </Container>
                </section>

                {/* Project Cards*/}
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map(card => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="blah"
                                ></CardMedia>
                                <CardContent className={classes.cardContent}>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        Project Title
                                    </Typography>
                                    <Typography>project description</Typography>
                                </CardContent>
                                <CardActions className={classes.cardActions}>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        color="primary"
                                    >
                                        View
                                    </Button>
                                </CardActions>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/** Footer */}
            <footer className={classes.footer}>
                <Copyright />
            </footer>
        </>
    )
}

export default Home
