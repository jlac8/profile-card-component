import DemographicInfo from "./DemographicInfo"
import SocialMediaInfo from "./SocialMediaInfo"

function ProfileCard() {
  return (
    <section className="profile-card">
      <DemographicInfo/>
      <SocialMediaInfo/>
    </section>
  )
}

export default ProfileCard
