"use client"
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { validationSchema } from './validation/validation';
import { useFormik } from 'formik';
import { UserRegister } from '@/types/User';
import { useMutation } from '@tanstack/react-query';
import { UserServices } from '@/services/UserServices';
import Notification from '@/Components/Snackbar';
import {NotificationMethods} from "@/types/Notification"

const defaultTheme = createTheme();

const Register: React.FC = () => {
  const notificationRef = React.useRef<NotificationMethods | null>(null);

  const mutation = useMutation((userData: UserRegister) => UserServices.userRegister(userData), {
    onSuccess: () => {
      if (notificationRef.current) {
        notificationRef.current.showNotification('Register Successfully', 'success');
      }
    },
    onError: (error: any) => {
      if (notificationRef.current) {
        if (error.response && error.response.data && error.response.data.message) {
          // Sử dụng thông báo từ API response
          notificationRef.current.showNotification(error.response.data.message, 'error');
        } else {
          // Sử dụng thông báo mặc định nếu không có thông báo từ API
          notificationRef.current.showNotification('Register Failed, please try again.', 'error');
        }
      }
      console.error('Registration failed:', error);
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formikBag.handleSubmit(event);
  };

  const formikBag = useFormik<UserRegister>({
    initialValues: {
      email: '',
      password: '',
      name: '',
      gender: true,
      phone: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      mutation.mutate(values);
    },
  });

  return (
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form"  sx={{ mt: 3 }} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={6} md={12}>
                  <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value={formikBag.values.email}
                      onBlur={formikBag.handleBlur}
                      onChange={formikBag.handleChange}
                  />
                  {formikBag.errors.email && (
                      <div style={{color: "red"}}>
                        {formikBag.errors.email}
                      </div>
                  )}
                </Grid >

                <Grid item xs={6} md={12}>
                  <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      value={formikBag.values.password}
                      onBlur={formikBag.handleBlur}
                      onChange={formikBag.handleChange}
                  />
                  {formikBag.errors.password && (
                      <div style={{color: "red"}}>
                        {formikBag.errors.password}
                      </div>
                  )}
                </Grid  >

                <Grid item xs={6} md={12}>
                  <TextField
                      autoComplete="given-name"
                      name="name"
                      required
                      fullWidth
                      id="name"
                      label="Your Name"
                      autoFocus
                      value={formikBag.values.name}
                      onBlur={formikBag.handleBlur}
                      onChange={formikBag.handleChange}
                  />
                  {formikBag.errors.name && (
                      <div style={{color: "red"}}>
                        {formikBag.errors.name}
                      </div>
                  )}
                </Grid  >

                <Grid item xs={6} md={12} >
                  <TextField
                      autoComplete="given-phone"
                      name="phone"
                      required
                      fullWidth
                      id="phone"
                      label="Your phone"
                      autoFocus
                      value={formikBag.values.phone}
                      onBlur={formikBag.handleBlur}
                      onChange={formikBag.handleChange}
                  />
                  {formikBag.errors.phone && (
                      <div style={{color: "red"}}>
                        {formikBag.errors.phone}
                      </div>
                  )}
                </Grid>
              </Grid>
              <Button
                  type={"submit"}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href={"/login"}>
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Notification
              ref={notificationRef as React.RefObject<NotificationMethods>}
              open={false}
              onClose={() => {}}
              message=""
              severity="success"
          />
        </Container>
      </ThemeProvider>
  );
};

export default Register;
