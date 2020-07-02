import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'

interface IProps {
  className: string
  type?: 'button' | 'submit' | 'reset'
  loading?: boolean
}

export const Button: React.FC<IProps> = ({ className, loading = true, type, children }) => {
  return (
    <React.Fragment>
      <button className={className} type={type}>
        {loading && (
          <span>
            <FontAwesomeIcon icon={faLock} />
          </span>
        )}
        {children}
      </button>
    </React.Fragment>
  )
}
