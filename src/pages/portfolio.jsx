import React, { useRef, useState, useLayoutEffect } from "react"
import Img from "gatsby-image"
import SEO from "../components/SEO/SEO"
import Layout from "../components/Layout/Layout"

//MUI
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

// Styles
import "../styles/page-styles/portfolio.module.scss"

const useStyles = makeStyles({
  card: {},
  root: {
    width: "100%",
    display: "block",
    textAlign: "inherit",
    "&:hover": {
      backgroundColor: "#fff !important",
    },
  },
})

function PortfolioPage(props) {
  const classes = useStyles()
  const projectCard = useRef()
  let [imgSize, setImgSize] = useState([0, 0])

  // useLayoutEffect(()=> {

  // },[projectCard.current.clientWidth])
  return (
    <Layout>
      <SEO />
      <Grid container spacing={8} justify="center">
        <Grid item xs={12} lg={6}>
          <Card ref={projectCard}>
            <CardMedia
              component="img"
              alt="Home screen of Quizzness app"
              src="https://wstrellis-images.s3.amazonaws.com/ws-portfolio-images/portfolio/quizzness_home.jpg"
              title="Home screen of Quizzness app"
              height="225"
              width="300"
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                Quizzness
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                This is an app for taking random quizzes.
              </Typography>
            </CardContent>
            <CardActionArea className={classes.root}>
              <CardActions>
                <Button
                  href="https://quizzness.wstrellis.now.sh"
                  component="a"
                  target="_blank"
                  rel="noreferer noopener"
                  title="quizzness.wstrellis.now.sh"
                  variant="contained"
                >
                  View
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default PortfolioPage
