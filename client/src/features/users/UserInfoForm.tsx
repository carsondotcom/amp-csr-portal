import { useEffect, useState } from 'react';
import { Alert, Box, Button, MenuItem, Stack, TextField, Typography } from '@mui/material';
import { useUpdateUserMutation } from '../../app/api';
import type { User } from '../../types';

interface Props {
  user: User;
}

const accountStatusOptions: User['accountStatus'][] = ['Active', 'Overdue', 'Inactive'];

export function UserInfoForm({ user }: Props) {
  const [name, setName] = useState(user.name);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [email, setEmail] = useState(user.email);
  const [accountStatus, setAccountStatus] = useState(user.accountStatus);

  const [updateUser, { isLoading, isError, isSuccess }] = useUpdateUserMutation();

  useEffect(() => {
    setName(user.name);
    setPhoneNumber(user.phoneNumber);
    setEmail(user.email);
    setAccountStatus(user.accountStatus);
  }, [user]);

  const isDirty =
    name !== user.name ||
    phoneNumber !== user.phoneNumber ||
    email !== user.email ||
    accountStatus !== user.accountStatus;

  function handleCancel() {
    setName(user.name);
    setPhoneNumber(user.phoneNumber);
    setEmail(user.email);
    setAccountStatus(user.accountStatus);
  }

  async function handleSave() {
    await updateUser({ id: user.id, body: { name, phoneNumber, email, accountStatus } });
  }

  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
        Account Information
      </Typography>
      <Stack spacing={2}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          size="small"
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          size="small"
        />
        <TextField
          label="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          size="small"
        />
        <TextField
          select
          label="Account Status"
          value={accountStatus}
          onChange={(e) => setAccountStatus(e.target.value as User['accountStatus'])}
          size="small"
        >
          {accountStatusOptions.map((status) => (
            <MenuItem key={status} value={status}>{status}</MenuItem>
          ))}
        </TextField>
        {isError && <Alert severity="error">Failed to save changes.</Alert>}
        {isSuccess && <Alert severity="success">Changes saved.</Alert>}
        <Stack direction="row" spacing={1}>
          <Button variant="contained" onClick={handleSave} disabled={!isDirty || isLoading}>
            {isLoading ? 'Saving...' : 'Save'}
          </Button>
          <Button onClick={handleCancel} disabled={!isDirty}>
            Cancel
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
