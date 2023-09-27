import { Card, Divider, Grid, Stack, Typography } from '@mui/material'

const OrderDetails = () => {
  return (
    <Card className="p-4 rounded-lg">
      <Grid
        container
        className="h-16"
        alignItems="center"
        justifyContent={'space-between'}
      >
        <Grid item xs={2}>
          <Stack direction="column">
            <Typography className="text-xs font-bold text-gray-400">
              Supplier
            </Typography>
            <Typography className="text-sm">Lorem ipsum dolor sit.</Typography>
          </Stack>
        </Grid>
        <Divider orientation="vertical" className="h-16" />
        <Grid item xs={2}>
          <Stack direction="column">
            <Typography className="text-xs font-bold text-gray-400">
              Supplier
            </Typography>
            <Typography className="text-sm">Lorem ipsum dolor sit.</Typography>
          </Stack>
        </Grid>
        <Divider orientation="vertical" className="h-16" />

        <Grid item xs={2}>
          <Stack direction="column">
            <Typography className="text-xs font-bold text-gray-400">
              Supplier
            </Typography>
            <Typography className="text-sm">Lorem ipsum dolor sit.</Typography>
          </Stack>
        </Grid>
        <Divider orientation="vertical" className="h-16" />

        <Grid item xs={2}>
          <Stack direction="column">
            <Typography className="text-xs font-bold text-gray-400">
              Supplier
            </Typography>
            <Typography className="text-sm">Lorem ipsum dolor sit.</Typography>
          </Stack>
        </Grid>
        <Divider orientation="vertical" className="h-16" />

        <Grid item xs={2}>
          <Stack direction="column">
            <Typography className="text-xs font-bold text-gray-400">
              Supplier
            </Typography>
            <Typography className="text-sm">Lorem ipsum dolor sit.</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  )
}

export default OrderDetails
