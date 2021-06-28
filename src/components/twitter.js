import * as React from "react"
import {Timeline} from "react-twitter-widgets"

const RecentTweet = () => (
  <>
   <div className="tweet" >
    <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'summersidechoir'
      }}
        options={{
          height: '10',
          // width: '200',
          tweetLimit: '1'
      }}
    />
    </div>
  </>
 )
  

export default RecentTweet