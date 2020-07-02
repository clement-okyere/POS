import React from 'react'
import clsx from 'clsx'
import './style/Login.css'
import { Button } from '../../components/button'
import {
  TextField,
  InputAdornment,
  makeStyles,
  Theme,
  createStyles,
  InputLabel,
  Input,
  IconButton,
} from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
import PasswordCircle from '@material-ui/icons/Lock'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

interface State {
  password: string
  showPassword: boolean
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
    textField: {
      width: '25ch',
    },
  })
)

export const LoginPage: React.FC<{}> = () => {
  const classes = useStyles()
  const [values, setValues] = React.useState<State>({
    password: '',
    showPassword: false,
  })

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
    <div className="container">
      <div className="sidepic_container"></div>
      <div className="login_container">
        <div className="login_box">
          <form>
            <h2 className="brand_name">Store Express</h2>
            <div className="login_items">
              <div className="login_item">
                <TextField
                  className={clsx(classes.margin, classes.textField)}
                  id="username"
                  label="Username"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="login_item">
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                  className={clsx(classes.margin, classes.textField)}
                  id="standard-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  startAdornment={
                    <InputAdornment position="start">
                      <PasswordCircle />
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
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
