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
    neumorphic: {
        // boxShadow: `-5px -5px 10px ${theme.palette.grey["700"]},
        //  5px 5px 10px ${theme.palette.grey["900"]}`,
        boxShadow: `-10px -10px 20px ${theme.palette.grey["700"]}, 
             10px 10px 20px ${theme.palette.grey["900"]}`,
        borderRadius: theme.shape.borderRadiusLg,
        backgroundColor: theme.palette.grey["800"],
    },
    pageWrapper: {
        backgroundColor: theme.palette.grey["800"],
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        // backgroundColor: theme.palette.background.paper,
        backgroundColor: theme.palette.grey["900"],
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

const projects = [
    {
        title: "Community Calendar",
        description: "React application for finding local events",
        image: `http://wstrellis-images.s3.amazonaws.com/ws-portfolio-images/community-calendar/home__16x9.sm.jpg`,
    },
]

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
                            Hi! Welcome to my portfolio site!
                        </Typography>
                    </Container>
                </section>

                {/* Project Cards*/}
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {projects.map((p, ind) => (
                            <Grid item key={ind} xs={12} sm={6} md={4}>
                                <div className={classes.neumorphic}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={p.image}
                                        title={`Image of ${p.title}`}
                                    ></CardMedia>
                                    <CardContent
                                        className={classes.cardContent}
                                    >
                                        <Typography
                                            gutterBottom
                                            variant="h6"
                                            component="h2"
                                        >
                                            {p.title}
                                        </Typography>
                                        <Typography>{p.description}</Typography>
                                    </CardContent>
                                    <CardActions
                                        className={classes.cardActions}
                                    >
                                        <Button
                                            variant="contained"
                                            size="small"
                                            color="primary"
                                        >
                                            View
                                        </Button>
                                    </CardActions>
                                </div>
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
