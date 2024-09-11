function DemographicInfo() {
  return (
    <div className="profile-card__demographic">
      <img className="profile-card__picture" src="\assets\image-profile.jpg" alt="Image Profile" />
      <p>
        <span className="profile-card__name">Victor Crest</span>
        <span className="profile-card__age">26</span>
      </p>
      <p className="profile-card__city">London</p>
    </div>
  )
}

export default DemographicInfo;
