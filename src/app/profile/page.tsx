import _ from "lodash";
import React from "react";
import { Box, Stack, TextField, Typography } from "@mui/material";

const Profile: React.FC = () => {
    return (
        <Box>
            <Stack flexDirection={"row"} gap={2} justifyContent={"space-between"} alignContent={"center"}>
                {/* Account info */}
                <Box>
                    <Typography>
                        Account Info
                    </Typography>

                    <TextField
                        label="Email"
                        type="email"
                        name="email"
                    />

                    <TextField
                        label="Name"
                        type="text"
                        name="name"
                    />

                    <TextField
                        label="Password"
                        type="password"
                        name="password"
                    />


                    <TextField
                        label="Phone"
                        type="text"
                        name="phone"
                    />
                </Box>

                {/* Change password */}
                <Box>
                    <Typography>
                        Change Password
                    </Typography>
                </Box>
            </Stack>
        </Box>
    )
}

export default Profile;