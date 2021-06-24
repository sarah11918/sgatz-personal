import * as React from "react"
import {Timeline} from "react-twitter-widgets"

const RecentTweet = () => (
  <>
   <div style={{width: `80%`, marginTop: `2em`}}>
    <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'summersidechoir'
      }}
        options={{
          // height: '200',
          // width: '200',
          tweetLimit: '1'
      }}
    />
    </div>
  </>
 )
  

export default RecentTweet