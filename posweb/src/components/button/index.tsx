import React from 'react'
import MatButton from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles, Theme, createStyles } from '@material-ui/core'
import { green } from '@material-ui/core/colors'

interface IProps {
  className: string
  type?: 'button' | 'submit' | 'reset'
  loading?: boolean
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
    },
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative',
    },
    buttonSuccess: {
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700],
      },
    },
    fabProgress: {
      color: green[500],
      position: 'absolute',
      top: -6,
      left: -6,
      zIndex: 1,
    },
    buttonProgress: {
      color: green[500],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
  })
)

export const Button: React.FC<IProps> = ({ className, loading = true, type, children }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <MatButton variant="contained" color="primary" className={className} type={type}>
          {/* {loading && (
            <span style={{ marginRight: '5px' }}>
              <FontAwesomeIcon icon={faSpinner} />
            </span>
          )} */}

          {children}
        </MatButton>
        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
      </div>
    </div>
  )
}
