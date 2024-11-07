import React, { useState } from 'react'
import { Button, TextField, Container, Box, Typography } from '@mui/material'
import s from '../Admin_Login_Page/AdminLoginPage.module.scss'
import { useNavigate } from 'react-router-dom'


export const AdminLoginPage = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  //const navigate = useNavigate()
  //const {login} = useUser()// Get the login function from context
 
  const handleSubmit= async (e) => {
    e.preventDefault()
    setError(null)

    if (!user || !password) {
      setError('Udfyld både brugernavn og adgangskode.');
      return
    }

    try {
      // Send a POST request to the backend with the login details
      const response = await fetch('/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ user, password }),
      });
    if (!response.ok){
      throw new Error('Login mislykkedes. Prøv igen.')
    }


      if (response.ok) {
        const data = await response.json();
        login(data.token) // Save token in UserContext
        navigate('/statistics'); 
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Login mislykkedes. Prøv igen.');
      }
    } catch (err) {
      setError('Der opstod en fejl. Prøv igen senere.');
    }
  }

  return (
    <Container maxWidth="m" className={s.container}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding={3}
        style={{ backgroundColor: '#ECFFED', marginTop: '50px' }}
      >
        <h2 style={{ color: '#2e7d32', textAlign: 'center', fontFamily: 'Segoe UI, sans-serif', fontSize: '40px', fontWeight: 600 }}>
          Log ind som&nbsp;
          <span style={{ fontFamily: 'Segoe UI, sans-serif', fontSize: '40px', fontWeight: 700, lineHeight: '40px' }}>
            admin
          </span>
        </h2>
        <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TextField
            label="Brugernavn"
            id="outlined-required"
            variant="outlined"
            margin="normal"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            sx={{
              width: '240px',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#34C759',
                },
                '&:hover fieldset': {
                  borderColor: '#34C759',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#34C759',
                },
              },
            }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              width: '240px',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#34C759',
                },
                '&:hover fieldset': {
                  borderColor: '#34C759',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#34C759',
                },
              },
            }}
          />
          {error && (
            <Typography color="error" variant="body2" style={{ marginTop: 8 }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            style={{
              backgroundColor: '#2e7d32',
              color: 'white',
              marginTop: '16px',
              width: '100px',
            }}
            sx={{
              '&:hover': {
                backgroundColor: '#1b4e35',
              },
            }}
          >
            LOG IND
          </Button>
        </form>
      </Box>
    </Container>
  );
};
