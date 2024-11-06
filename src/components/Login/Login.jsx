import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import s from './Login.module.scss';

export const Login = () => {
    return (
        <section className={s.loginStyle}>
            <h2>Log ind som <span>admin</span></h2>
        <Box
            component="form"
            className={s.container} 
            noValidate
            autoComplete="off"
        >
            <TextField
                id="username"
                label="Brugernavn"
                variant="outlined"
                size="medium"
                className={s.inputField} 
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#34C759', 
                        },
                        '&:hover fieldset': {
                            borderColor: '#2E7D32', 
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#34C759', 
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: '#2E7D32', 
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: '#2E7D32', 
                    },
                }}
            />

            <TextField
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                className={s.inputField}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#34C759', 
                        },
                        '&:hover fieldset': {
                            borderColor: '#2E7D32', 
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#34C759',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: '#2E7D32', 
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: '#2E7D32', 
                    },
                }}
            />

            <Button
                variant="contained"
                className={s.signInButton}
                sx={{
                    marginTop: 2,
                    padding: '10px 20px',
                    fontWeight: 'bold',
                }}
            >
                LOG IND
            </Button>
        </Box>
        </section>
    );
};