import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import s from './Login.module.scss';

export const Login = () => {


    return (
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            className={s.BoxStyle}

        >

            <TextField
            sx={{
                color: 'success.main',borderRadius: '8px'}}
                id="username"
                label="Brugernavn"
                variant="outlined"
                size="medium"
                className={s.TextFieldStyle}
            />


            <TextField
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                className={s.TextFieldStyle}
            />
            <Button className={s.ButtonStyle} variant="contained">LOG IND</Button>
        </Box>
    )
}