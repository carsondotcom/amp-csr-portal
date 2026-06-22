import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useAddSubscriptionMutation } from "../../app/api";
import type { Subscription } from "../../types";

interface Props {
  userId: string;
}

const subscriptionTypes: Subscription["type"][] = ["Pro", "Standard", "Deluxe"];

export function AddSubscriptionForm({ userId }: Props) {
  const [licensePlate, setLicensePlate] = useState("");
  const [type, setType] = useState<Subscription["type"]>("Standard");

  const [addSubscription, { isLoading, isError }] =
    useAddSubscriptionMutation();

  async function handleAdd() {
    await addSubscription({ userId, body: { licensePlate, type } });
    setLicensePlate("");
    setType("Standard");
  }

  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
        Add Subscription
      </Typography>
      <Stack
        direction="row"
        sx={{ spacing: 2, alignItems: "center", flexWrap: "wrap" }}
      >
        <TextField
          label="License Plate"
          value={licensePlate}
          onChange={(e) => setLicensePlate(e.target.value)}
          size="small"
        />
        <TextField
          select
          label="Type"
          value={type}
          onChange={(e) => setType(e.target.value as Subscription["type"])}
          size="small"
          sx={{ minWidth: 130 }}
        >
          {subscriptionTypes.map((t) => (
            <MenuItem key={t} value={t}>
              {t}
            </MenuItem>
          ))}
        </TextField>
        <Button
          variant="contained"
          onClick={handleAdd}
          disabled={!licensePlate || isLoading}
        >
          {isLoading ? "Adding..." : "Add"}
        </Button>
      </Stack>
      {isError && (
        <Alert severity="error" sx={{ mt: 1 }}>
          Failed to add subscription.
        </Alert>
      )}
    </Box>
  );
}
