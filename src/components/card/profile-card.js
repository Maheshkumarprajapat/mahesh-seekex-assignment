import React from 'react'
import './profile-card.css'
const ProfileCard = ({ item }) => {
  const { title, img, color } = item;
  return (
    <div className='profile-card'>
      <div className='profile-card-img' style={{ background: `#${color}` }}>
        <img src={img} alt="" />
      </div>
      <h5>{title}</h5>
    </div>
  )
}

export default ProfileCard
