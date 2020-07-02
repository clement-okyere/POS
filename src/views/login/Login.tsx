import React from 'react'
import './style/Login.css'
import { Button } from '../../components/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'

export const LoginPage: React.FC<{}> = () => {
  return (
    <div className="container">
      <div className="sidepic_container"></div>
      <div className="login_container">
        <div className="login_box">
          <form>
            <h2 className="brand_name">Store Express</h2>
            <div className="login_items">
              <div className="login_item">
                <span className="icon_border">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <input name="username" placeholder="username or email" />
              </div>
              <div className="login_item">
                <span className="icon_border">
                  <FontAwesomeIcon icon={faLock} />
                </span>
                <input name="password" placeholder="password" />
              </div>

              <div className="login_submit">
                <Button className="login_btn" type="submit">
                  LOGIN
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
