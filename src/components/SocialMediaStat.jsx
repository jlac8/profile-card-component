import PropTypes from 'prop-types'

function SocialMediaStat(props) {
  return(
    <div>
      <div>{props.number}</div>
      <div>{props.stat}</div>
    </div>
  )
}

SocialMediaStat.propTypes = {
  number: PropTypes.string.isRequired,
  stat: PropTypes.string.isRequired,
};

export default SocialMediaStat
