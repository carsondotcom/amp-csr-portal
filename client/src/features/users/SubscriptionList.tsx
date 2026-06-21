import { Box, Divider, Stack, Typography } from '@mui/material';
import { SubscriptionRow } from './SubscriptionRow';
import { AddSubscriptionForm } from './AddSubscriptionForm';
import type { User } from '../../types';

interface Props {
  user: User;
}

export function SubscriptionList({ user }: Props) {
  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
        Subscriptions
      </Typography>
      <Stack spacing={1.5}>
        {user.subscriptions.map((sub) => (
          <SubscriptionRow key={sub.id} userId={user.id} subscription={sub} />
        ))}
      </Stack>
      <Divider sx={{ my: 3 }} />
      <AddSubscriptionForm userId={user.id} />
    </Box>
  );
}
