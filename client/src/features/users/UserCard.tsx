import {
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import type { User } from "../../types";

interface Props {
  user: User;
}

const statusColor: Record<
  User["accountStatus"],
  "success" | "error" | "default"
> = {
  Active: "success",
  Overdue: "error",
  Inactive: "default",
};

export function UserCard({ user }: Props) {
  const navigate = useNavigate();
  const activeCount = user.subscriptions.filter(
    (s) => s.status === "Active",
  ).length;

  return (
    <Card variant="outlined">
      <CardActionArea onClick={() => navigate(`/users/${user.id}`)}>
        <CardContent>
          <Stack
            direction="row"
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              mb: 0.5,
            }}
          >
            <Typography sx={{ fontWeight: 600 }}>{user.name}</Typography>
            <Chip
              label={user.accountStatus}
              color={statusColor[user.accountStatus]}
              size="small"
            />
          </Stack>
          <Stack direction="row" spacing={3}>
            <Typography variant="body2" color="text.secondary">
              {user.email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.phoneNumber}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {activeCount} active subscription{activeCount !== 1 ? "s" : ""}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
