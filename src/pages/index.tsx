import React from 'react'
import Icon from '../components/profile/ProfileIcon'
import Contents from '../components/profile/ProfileContents'

const ProfileIcon = () => {
  return (
    <div>
      <Icon />
    </div>
  )
}

const ProfileContents = () => {
  return (
    <div>
      <Contents />
    </div>
  )
}

const Profile = () => {
  return (
    <div className="flex flex-wrap items-center justify-center flex-col sm:flex-row">
      <ProfileIcon />
      <ProfileContents />
    </div>
  )
}

export default Profile
