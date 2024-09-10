import SocialMediaStat from "./SocialMediaStat"

function SocialMediaInfo() {
  return(
    <footer className="profile-card__social-media">
      <SocialMediaStat number='80K' stat='Followers'/>
      <SocialMediaStat number='803K' stat='Likes'/>
      <SocialMediaStat number='1.4K' stat='Photos'/>
    </footer>
  )
}

export default SocialMediaInfo
