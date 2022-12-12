import React from "react";
import { Container } from "@mui/material";
type Props = {};

export default function Profile(props: Props) {
  return (
    <Container maxWidth="xl">
      <h3 className="text-success fw-bold">Profile</h3>
      <div className='row'>
        <div className='col-4'>
          <img src="https://i.pravatar.cc" alt="avatar" className='rounded-circle' width={200} height={200} />
        </div>
        <div className='col-8'>
          <form>
            <div className='row'>
              <div className='col-6'>
                <div className='form-group'>
                  <p>Email</p>
                  <input className='form-control' name="email" />
                </div>
                <div className='form-group'>
                  <p>Phone</p>
                  <input className='form-control' name="phone"/>
                </div>
              </div>
              <div className='col-6'>
                <div className='form-group'>
                  <p>Name</p>
                  <input className='form-control' name="name" />
                </div>
                <div className='form-group'>
                  <p>Password</p>
                  <input className='form-control' name="password" type="password"  />
                </div>
                <div className='form-group d-flex'>
                  <div className='w-75'>
                    <p>Gender</p>
                    <input name="gender" type="radio" /> Male
                    <input  name="gender" type="radio" /> Female
                  </div>
                  <div className='text-right w-25'>
                    <button type='submit' className='btn btn-primary mt-3'>Update</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}
