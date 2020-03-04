import React from "react"
import clsx from "clsx"

import GithubIcon from "Github.icon"

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
        boxShadow: `-7px -7px 15px 7px ${theme.palette.primary.light}, 
             7px 7px 15px 7px ${theme.palette.primary.dark}`,
        // boxShadow: `-10px -10px 20px 10px ${theme.palette.primary.light},
        //  10px 10px 20px 10px ${theme.palette.primary.dark}`,
        borderRadius: theme.shape.borderRadiusLg,
        backgroundColor: theme.palette.primary,
    },
    flexColumn: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
    },
    pageWrapper: {
        backgroundColor: theme.palette.primary.main,
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
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
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.grey["50"],
    },
    cardActions: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.grey["50"],
        borderRadius: ` 0 0 ${theme.shape.borderRadiusLg} ${theme.shape.borderRadiusLg} `,
        justifyContent: "space-between",
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    githubLink: {
        display: "inline-flex",
    },
})) // end useStyles

const projects = [
    {
        title: "Community Calendar",
        description: "Find events in your local community",
        image: `https://wstrellis-images.s3.amazonaws.com/ws-portfolio-images/community-calendar/home__16x9.sm.jpg`,
        linkUrl: "https://www.ourcommunitycal.com/",
        repo: "https://github.com/Lambda-School-Labs/community-calendar-fe",
    },
    {
        title: "Saltiest Hacker News",
        description: "The saltiest comments on Hacker News",
        image: `https://wstrellis-images.s3.amazonaws.com/ws-portfolio-images/saltiest-hacker/saltiest-hacker__16x9.sm.jpg`,
        linkUrl: "https://frontend.saltiest-hacker-news-trolls-2.now.sh/",
        repo: "https://github.com/Saltiest-Hacker-News-Trolls-2/backend",
    },
    {
        title: "Life GPA",
        description: "Keep track of your good and bad habits",
        image: `https://wstrellis-images.s3.amazonaws.com/ws-portfolio-images/lgpa/main-screen__16x9.sm.jpg`,
        linkUrl: "https://life-gpa.now.sh/",
        repo: "https://github.com/lifegpa-bw/lifegpa-frontend",
    },
    {
        title: "International Rural School Resource",
        description: "Connect rural schools to supportive organizations",
        image: `https://wstrellis-images.s3.amazonaws.com/ws-portfolio-images/rural-school/rural-login__16x9.sm.jpg`,
        linkUrl: "https://admiring-lewin-69d4df.netlify.com/",
        repo: null,
    },
    {
        title: "NASA APOD",
        description: "View photos from NASA",
        image: `https://wstrellis-images.s3.amazonaws.com/ws-portfolio-images/apod/apod__16x9.sm.jpg`,
        linkUrl: "https://apod-wstrellis.netlify.com/",
        repo: "https://github.com/WStrellis/apod-app",
    },
]

function Home() {
    const {neumorphic, flexColumn, ...classes} = useStyles()

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
                    <Grid container spacing={6}>
                        {projects.map((p, ind) => (
                            <Grid item key={ind} xs={12} sm={6} md={4}>
                                <div className={clsx(neumorphic, flexColumn)}>
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
                                            href={p.linkUrl}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            title={p.linkUrl}
                                        >
                                            View
                                        </Button>
                                        {p.repo && (
                                            <a
                                                className={classes.githubLink}
                                                href={p.repo}
                                                title={p.repo}
                                                rel="noreferrer noopener"
                                                target="_blank"
                                            >
                                                <GithubIcon />
                                            </a>
                                        )}
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
