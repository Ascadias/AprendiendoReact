import React from 'react';
import TextField from '@material-ui/core/TextField'
import AccountCircle from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Logo from './/Logo';

class Login extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Logo/>
                <form className="LoginForm" noValidate autoComplete="off">
                    <Grid container alignItems="flex-end">
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                id="UserTextField"
                                label="User"
                                type="text"
                                variant="filled"
                            />
                        </Grid>
                        <Grid item>
                            <AccountCircle/>
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                id="PasswordTextField"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                variant="filled"
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="Secondary"
                                onClick={() => { alert('Cancelar') }}
                                >
                                    Cancelar
                            </Button>
                            <Button
                                variant="contained"
                                color="Primary"
                                onClick={() => { alert('Entrar') }}
                                >
                                    Entrar
                            </Button>
                            <Button
                                variant="contained"
                                onClick={() => { alert('Registrarse') }}
                                >
                                    Registrarse
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </React.Fragment>
        )
    }
}

export default Login;