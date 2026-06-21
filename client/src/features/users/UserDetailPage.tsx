import { useParams, useNavigate } from 'react-router-dom';
import { Alert, Button, CircularProgress, Container, Divider, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useGetUserQuery } from '../../app/api';
import { UserInfoForm } from './UserInfoForm';
import { SubscriptionList } from './SubscriptionList';
import { PaymentHistory } from './PaymentHistory';

export function UserDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: user, isLoading, isError } = useGetUserQuery(id!);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Button startIcon={<ArrowBack />} onClick={() => navigate('/')} sx={{ mb: 2 }}>
        Back to accounts
      </Button>
      {isLoading && <CircularProgress />}
      {isError && <Alert severity="error">Failed to load user.</Alert>}
      {user && (
        <>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
            {user.name}
          </Typography>
          <UserInfoForm user={user} />
          <Divider sx={{ my: 4 }} />
          <SubscriptionList user={user} />
          <Divider sx={{ my: 4 }} />
          <PaymentHistory payments={user.payments} />
        </>
      )}
    </Container>
  );
}
