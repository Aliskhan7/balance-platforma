import React, { useState } from 'react'
import loginStyle from '../static/css/loginStyle.css'
import logo from '../static/images/logo.svg'
import banner from '../static/images/banner.png'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Alert } from '@material-ui/lab';
import Button from '@material-ui/core/Button';
import { NavLink, Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startLogin } from '../redux/actions';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  modalInput: {
    width: '360px',
    marginBottom: '50px'
  },

  paper: {
    marginTop: theme.spacing(7),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    margin: theme.spacing(0, 0, 2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: '#FF5028',
    borderRadius: '4px'
  },
}));
function LogIn (props){
      const classes = useStyles();

      const dispatch = useDispatch();

      const error = useSelector((state) => state.auth.error);
      const loading = useSelector((state) => state.auth.loadingLogin);

      const [login, setLogin] = useState('');
      const [password, setPassword] = useState('');
      const [showPassword, setShowPassword] = useState(false);

      const handleShowPassword = () => {
        return setShowPassword(!showPassword);
      };

      let history = useHistory();

      const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLogin(login, password, history));
      };
        return(
            <div className='containerLogin'>
                <div className='headerLogin'>
                    <img className='logo' src={logo} alt='logo' />
                    <div className='navbar'>
                        <a className='link' href='#'>О компании</a>
                        <a className='link' href='#'>Продукты</a>
                        <a className='link' href='#'>Карьера</a>
                    </div>
                </div>
                <div className='contentLogin'>
                    <div className='banner'>
                        <img className='banner-img' src={banner} alt='banner' />
                    </div>
                    <div className='login-form'>
                        <p className='form-title'>Войдите в аккаунт</p>
                      <Box>
                        <Container component="main" className={classes.modalAuth} maxWidth="xs">
                          <Box className={classes.paper}>
                            <form className={classes.form} noValidate>
                              <TextField
                                className={classes.modalInput}
                                variant="outlined"
                                margin="normal"
                                id="email"
                                label="Логин"
                                autoFocus
                                value={login}
                                onChange={(e) => setLogin(e.target.value)}
                              />
                              <FormControl
                                variant="outlined"
                              >
                                <InputLabel htmlFor="outlined-adornment-password">
                                  Пароль
                                </InputLabel>
                                <OutlinedInput
                                  className={classes.modalInput}
                                  label="Password"
                                  autoFocus
                                  id="outlined-adornment-password"
                                  type={showPassword ? 'text' : 'password'}
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                  endAdornment={
                                    <InputAdornment position="end">
                                      <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleShowPassword}
                                      >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                      </IconButton>
                                    </InputAdornment>
                                  }
                                />
                              </FormControl>
                              {error && <Alert severity="error">Неверный логин или пароль</Alert>}
                              <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={handleLogin}
                                disabled={loading}
                              >
                                Войти
                              </Button>
                            </form>
                          </Box>
                        </Container>
                      </Box>
                    </div>
                </div>
            </div>
        )
    }


export default LogIn;