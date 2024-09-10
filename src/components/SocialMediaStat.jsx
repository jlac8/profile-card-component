import PropTypes from 'prop-types'

function SocialMediaStat(props) {
  return(
    <div className='profile-card__stat'>
      <div className='profile-card__stat-number'>{props.number}</div>
      <div className='profile-card__stat-type'>{props.stat}</div>
    </div>
  )
}

SocialMediaStat.propTypes = {
  number: PropTypes.string.isRequired,
  stat: PropTypes.string.isRequired,
};

export default SocialMediaStat
