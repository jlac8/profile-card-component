import PropTypes from 'prop-types'

function SocialMediaStat({number, stat}) {
  return(
    <div className='profile-card__stat'>
      <div className='profile-card__stat-number'>{number}</div>
      <div className='profile-card__stat-type'>{stat}</div>
    </div>
  )
}

SocialMediaStat.propTypes = {
  number: PropTypes.string.isRequired,
  stat: PropTypes.string.isRequired,
};

export default SocialMediaStat
