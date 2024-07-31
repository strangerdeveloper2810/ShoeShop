"use client"
import _ from "lodash"
import * as React from 'react';
import { useFormik } from 'formik';
import { useMutation } from '@tanstack/react-query';
import { Avatar, Button, CssBaseline, TextField, Link, Paper, Box, Grid, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { validationSchema } from './validation/validation';
import Notification from '@/Components/Snackbar';
import { UserLogin } from '@/types/User';
import { NotificationMethods } from "@/types/Notification";
import { httpForNextServer } from "@/utils/setting"
import { useAppContext } from "../context/AppProvider";

const Login: React.FC = () => {
  const notificationRef = React.useRef<NotificationMethods | null>(null);
  const { setAccessToken } = useAppContext();
  const mutation = useMutation(async (userData: UserLogin) => await httpForNextServer.post("/api/auth/login", userData), {
    onSuccess: async (data: any) => {
      const accessToken = _.get(data, "data.accessToken", "");
      if (notificationRef.current) {
        setAccessToken(accessToken);
        notificationRef.current.showNotification(_.get(data, "data.message", ""), 'success');
        window.location.href = "/home";
      }
    },
    onError: (error: any) => {
      if (notificationRef.current) {
        if (error.response && error.response.data && error.response.data.message) {
          // Sử dụng thông báo từ API response
          notificationRef.current.showNotification(error.response.data.message, 'error');
        } else {
          // Sử dụng thông báo mặc định nếu không có thông báo từ API
          notificationRef.current.showNotification('Login Failed, please try again.', 'error');
        }
      }
      console.error('Registration failed:', error);
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formikBag.handleSubmit(event);
  };

  const formikBag = useFormik<UserLogin>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      mutation.mutate(values);
    },
  });

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formikBag.values.email}
              onBlur={formikBag.handleBlur}
              onChange={formikBag.handleChange}
            />
            {formikBag.errors.email && (
              <div style={{ color: "red" }}>
                {formikBag.errors.email}
              </div>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formikBag.values.password}
              onBlur={formikBag.handleBlur}
              onChange={formikBag.handleChange}
            />
            {formikBag.errors.password && (
              <div style={{ color: "red" }}>
                {formikBag.errors.password}
              </div>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href={"/register"} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Notification
          ref={notificationRef as React.RefObject<NotificationMethods>}
          open={false}
          onClose={() => { }}
          message=""
          severity="success"
        />
      </Grid>
    </Grid>
  );
}
export default Login;
