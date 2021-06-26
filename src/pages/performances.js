import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Performances = () => {
  return (
    <Layout>
      <SEO title="Performances" />
      <h1>2021 Performances</h1>
      <h3 style={{fontStyle: "italic"}}>Spring Concerts</h3>
      <p>(Term cancelled due to Covid-19)</p>
      <h3 style={{fontStyle: "italic"}}>Christmas Concerts</h3>
      <p>We hope we will be able to do something for Christmas 2021. Please check back!</p>
      <p>Date TBA - Trinity United Church, Summerside PE (<a href="https://goo.gl/maps/nuzN7oMkWLG2">map</a>)</p>

      <div>
        <iframe
          width = "100%"
          height = "400px"
          loading = "lazy"
          src="https://www.youtube.com/embed/niIwmOOsxNs"
          title="videoTitle"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
        <p>See more videos of the choir on <a href="https://www.youtube.com/user/SummersideChoirPEI/">our YouTube page!</a></p>

      </div>

      
      <h2>Past Performances</h2>
      <div style={{maxWidth: `750px`}}>
      <StaticImage src="../images/concertposterchristmas2019.jpg" alt="2019 Christmas Concert Poster" width="180" />
      <StaticImage src="../images/concertposterspring2019.jpg" alt="2019 Spring Concert Poster" width="180" />
      <StaticImage src="../images/concertposterchristmas2018.jpg" alt="2018 Christmas Concert Poster" width="180" />
      <StaticImage src="../images/concertposterspring2018.jpg" alt="2018 Spring Concert Poster" width="180" />
      <StaticImage src="../images/concertposterchristmas2017.jpg" alt="2017 Christmas Concert Poster" width="180" />
      <StaticImage src="../images/concertposterspring2017.jpg" alt="2017 Spring Concert Poster" width="180" />
      <StaticImage src="../images/concertposterchristmas2016.jpg" alt="2016 Christmas Concert Poster" width="180" />
      <StaticImage src="../images/concertposterspring2016.jpg" alt="2016 Spring Concert Poster" width="180" />
      <StaticImage src="../images/concertposterchristmas2015.jpg" alt="2015 Christmas Concert Poster" width="180" />
      <StaticImage src="../images/concertposterspring2015.jpg" alt="2015 Spring Concert Poster" width="180" />
      <StaticImage src="../images/concertposterchristmas2014.jpg" alt="2014 Christmas Concert Poster" width="180" />
      <StaticImage src="../images/concertposterspring2013.jpg" alt="2013 Spring Concert Poster" width="180" />
      </div>
    
    </Layout>
  )
}

export default Performances