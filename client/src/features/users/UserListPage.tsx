import { useEffect, useState } from "react";
import {
  Alert,
  CircularProgress,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useGetUsersQuery } from "../../app/api";
import { UserCard } from "./UserCard";

export function UserListPage() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(timer);
  }, [search]);

  const {
    data: users,
    isLoading,
    isError,
  } = useGetUsersQuery(debouncedSearch || undefined);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
        Customer Accounts
      </Typography>
      <TextField
        fullWidth
        placeholder="Search by name, email, or phone..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        size="small"
        sx={{ mb: 2 }}
      />
      {isLoading && <CircularProgress />}
      {isError && <Alert severity="error">Failed to load users.</Alert>}
      <Stack spacing={1}>
        {users?.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </Stack>
    </Container>
  );
}
