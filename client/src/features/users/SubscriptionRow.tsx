import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Chip,
  MenuItem,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { useUpdateSubscriptionMutation } from "../../app/api";
import type { Subscription } from "../../types";

interface Props {
  userId: string;
  subscription: Subscription;
}

const subscriptionTypes: Subscription["type"][] = ["Pro", "Standard", "Deluxe"];

export function SubscriptionRow({ userId, subscription }: Props) {
  const [licensePlate, setLicensePlate] = useState(subscription.licensePlate);
  const [type, setType] = useState(subscription.type);

  const [updateSubscription, { isLoading, isError }] =
    useUpdateSubscriptionMutation();

  useEffect(() => {
    setLicensePlate(subscription.licensePlate);
    setType(subscription.type);
  }, [subscription]);

  const isCancelled = subscription.status === "Cancelled";
  const isDirty =
    licensePlate !== subscription.licensePlate || type !== subscription.type;

  async function handleSave() {
    await updateSubscription({
      userId,
      subId: subscription.id,
      body: { licensePlate, type },
    });
  }

  async function handleCancel() {
    await updateSubscription({
      userId,
      subId: subscription.id,
      body: { status: "Cancelled" },
    });
  }

  return (
    <Paper variant="outlined" sx={{ p: 2, opacity: isCancelled ? 0.6 : 1 }}>
      <Stack
        direction="row"
        spacing={2}
        sx={{ alignItems: "center", flexWrap: "wrap" }}
      >
        <TextField
          label="License Plate"
          value={licensePlate}
          onChange={(e) => setLicensePlate(e.target.value)}
          size="small"
          disabled={isCancelled}
        />
        <TextField
          select
          label="Type"
          value={type}
          onChange={(e) => setType(e.target.value as Subscription["type"])}
          size="small"
          disabled={isCancelled}
          sx={{ minWidth: 130 }}
        >
          {subscriptionTypes.map((t) => (
            <MenuItem key={t} value={t}>
              {t}
            </MenuItem>
          ))}
        </TextField>
        <Chip
          label={subscription.status}
          color={isCancelled ? "default" : "success"}
          size="small"
        />
        {!isCancelled && (
          <Box sx={{ display: "flex", gap: 1, ml: "auto" }}>
            <Button
              variant="outlined"
              size="small"
              onClick={handleSave}
              disabled={!isDirty || isLoading}
            >
              Save
            </Button>
            <Button
              variant="outlined"
              size="small"
              color="error"
              onClick={handleCancel}
              disabled={isLoading}
            >
              Cancel
            </Button>
          </Box>
        )}
      </Stack>
      {isError && (
        <Alert severity="error" sx={{ mt: 1 }}>
          Failed to update subscription.
        </Alert>
      )}
    </Paper>
  );
}
