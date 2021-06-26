import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Calendar = () => {
  return (
    <Layout>
      <SEO title="Calendar" />
      <h1>Calendar</h1>
      <p>Keep track of upcoming rehearsals, concerts and events!</p>
      <div>
      <iframe 
      src="https://www.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;height=400&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=sumchoir%40gmail.com&amp;color=%232952A3&amp;ctz=America%2FHalifax"
      width="98%" 
      height="300" 
      frameborder="0" 
      scrolling="no" >

      </iframe>
      </div>
    </Layout>
  )
}

export default Calendar