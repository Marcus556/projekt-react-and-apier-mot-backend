import React from 'react'
import './delete-account.styles.scss'

export default function DeleteAccount({deleteAccount, toggleDeleteAccount}) {

  return (
    <div className='delete-account'>
      <h4>Do you want to delete your account?</h4>
      <ul className='delete-account-buttons'>
        <li className='delete-account-buttons-item'><span onClick={deleteAccount}>Yes!</span></li>
        <li className='delete-account-buttons-item'><span onClick={toggleDeleteAccount}>No!</span></li>
      </ul>
    </div>
  )
}
