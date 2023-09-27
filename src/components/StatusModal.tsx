import CloseIcon from '@mui/icons-material/Close'
import { Box, Button, Grid, IconButton, Stack } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Modal from '@mui/material/Modal'
import type { SelectChangeEvent } from '@mui/material/Select'
import Select from '@mui/material/Select'
import Typography from '@mui/material/Typography'
import React from 'react'

const style = {
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  left: '50%',
  pb: 3,
  position: 'absolute' as const,
  pt: 2,
  px: 4,
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
}
interface IProps {
  handleClose: () => void
  handleStatusChange: () => void
  open: boolean
  orderStatus: string
  setOrderStatus: React.Dispatch<React.SetStateAction<string>>
}

const STATUS = ['Missing', 'Missing - Urgent']

export default function StatusModal({
  handleClose,
  handleStatusChange,
  open,
  orderStatus,
  setOrderStatus,
}: IProps) {
  const handleChange = (event: SelectChangeEvent) => {
    setOrderStatus(event.target.value as string)
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style }}>
        <Grid container>
          <Grid item xs={12}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent={'space-between'}
            >
              <Typography className="font-bold" variant="h6" component="h2">
                Missing Status
              </Typography>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Stack>
          </Grid>
          <Grid item className="mb-2">
            <Typography id="modal-modal-description" className="my-2">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Grid>

          <Grid item xs={12} className="mb-2">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={orderStatus}
                label="Age"
                onChange={handleChange}
              >
                {STATUS.map((status) => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Stack
              direction={'row'}
              alignItems={'center'}
              spacing={1}
              justifyContent={'flex-end'}
            >
              <Button
                size="small"
                className="rounded-lg text-sm"
                variant="outlined"
                onClick={handleClose}
              >
                No
              </Button>
              <Button
                disabled={!orderStatus}
                size="small"
                className="rounded-lg text-sm"
                variant="outlined"
                onClick={handleStatusChange}
              >
                Yes
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  )
}
