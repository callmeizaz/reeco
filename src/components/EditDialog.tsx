import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import RemoveIcon from '@mui/icons-material/Remove'
import {
  Chip,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
  styled,
} from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import type { TransitionProps } from '@mui/material/transitions'
import React, { useState, useEffect } from 'react'

import AvacodoImg from '../Assets/avocado-hass.jpg'
import { useAppDispatch } from '../hooks/redux'
import { updateProduct } from '../redux/slices/productSlice'
import type { Product } from '../types/product.type'

const REASON = [
  'Missing Product',
  'Quantity is not same',
  'Price is Not Same',
  'other',
]

interface IProps {
  handleClose: () => void
  open: boolean
  order: Product | undefined
}

const RoundedDialog = styled(Dialog)(() => ({
  '& .MuiPaper-root': {
    borderRadius: 20,
    padding: '15px 25px',
  },
}))

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function EditDialog({ handleClose, open, order }: IProps) {
  const [orderDetails, setOrderDetails] = useState({
    price: 0,
    quantity: 0,
    status: '',
  })
  const dispatch = useAppDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setOrderDetails((prev) => ({ ...prev, [name]: value }))
  }

  useEffect(() => {
    if (!order) return
    setOrderDetails({
      price: order?.price,
      quantity: order?.quantity,
      status: order?.status,
    })
  }, [order])

  const handleEdit = () => {
    if (!order) return
    dispatch(
      updateProduct({
        id: order.id,
        ...orderDetails,
      }),
    )

    handleClose()
  }

  return (
    <RoundedDialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      maxWidth={'sm'}
      fullWidth
      onClose={handleClose}
    >
      <DialogTitle>
        <Stack
          direction="row"
          alignItems={'center'}
          justifyContent={'flex-end'}
        >
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item xs={12}>
            <Typography className="font-bold text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum,
              hic.
            </Typography>
          </Grid>
          <Grid item xs={12} className={'mb-2 '}>
            <Typography className="text-gray-400 text-sm">
              Lorem ipsum
            </Typography>
          </Grid>

          <Grid item container justifyContent={'space-evenly'} className="mb-4">
            <Grid item xs={2}>
              <img src={AvacodoImg} alt="" />
            </Grid>

            <Grid item xs={8} container>
              <Grid
                item
                container
                direction="row"
                alignItems={'center'}
                className="mb-4"
                justifyContent={'space-between'}
              >
                <Grid item xs={2}>
                  <Typography className="text-sm">Price ($)</Typography>
                </Grid>
                <Grid item>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <TextField
                      value={orderDetails?.price}
                      onChange={handleChange}
                      name="price"
                      InputProps={{
                        sx: {
                          '& input:focus': {
                            border: 'none', // Remove border on focus

                            boxShadow: 'none', // Remove box shadow on focus
                            outline: 'none', // Remove outline on focus
                          },

                          height: 40,
                          width: 100,
                        },
                      }}
                      size="small"
                      variant="outlined"
                    />
                    <Typography className="text-sm">Price ($)</Typography>
                  </Stack>
                </Grid>
              </Grid>
              <Grid
                item
                className="mb-4"
                container
                direction="row"
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                <Grid item xs={2}>
                  <Typography className="text-sm">Quantity</Typography>
                </Grid>
                <Grid item>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <IconButton
                        size="small"
                        onClick={() => {
                          setOrderDetails((prev) => ({
                            ...prev,
                            quantity: orderDetails?.quantity! - 1,
                          }))
                        }}
                        sx={{
                          '&:hover': {
                            backgroundColor: 'green',
                            color: 'white',
                          },
                          backgroundColor: 'green',
                          color: 'white',
                        }}
                      >
                        <RemoveIcon className="text-sm" />
                      </IconButton>
                      <TextField
                        value={orderDetails?.quantity}
                        onChange={handleChange}
                        name="quantity"
                        InputProps={{
                          sx: {
                            '& input:focus': {
                              border: 'none', // Remove border on focus

                              boxShadow: 'none', // Remove box shadow on focus
                              outline: 'none', // Remove outline on focus
                            },

                            height: 40,
                            width: 100,
                          },
                        }}
                        size="small"
                        variant="outlined"
                      />
                      <IconButton
                        size="small"
                        sx={{
                          '&:hover': {
                            backgroundColor: 'green',
                            color: 'white',
                          },
                          backgroundColor: 'green',
                          color: 'white',
                        }}
                        onClick={() => {
                          setOrderDetails((prev) => ({
                            ...prev,
                            quantity: orderDetails.quantity + 1,
                          }))
                        }}
                      >
                        <AddIcon className="text-sm" />
                      </IconButton>
                    </Stack>

                    <Typography className="text-sm">6</Typography>
                  </Stack>
                </Grid>
              </Grid>
              <Grid
                item
                container
                className="mb-4"
                direction="row"
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                <Grid item xs={2}>
                  <Typography className="text-sm">Total ($)</Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography className="text-sm">
                    $
                    {(orderDetails?.quantity! * orderDetails?.price!).toFixed(
                      2,
                    )}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item container className="mb-4">
            <Stack>
              <Typography
                display="inline-block"
                className="mb-2 font-bold text-sm "
              >
                Choose reason
                <Typography
                  display="inline-block"
                  className="mb-2 ml-2 text-sm text-gray"
                >
                  (optional)
                </Typography>
              </Typography>

              <Stack direction="row" spacing={1} alignItems="center">
                {REASON.map((val) => (
                  <Chip label={val} variant="outlined" />
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          className="rounded-full text-sm"
          variant="outlined"
          color="primary"
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          className="rounded-full text-sm"
          variant="contained"
          onClick={handleEdit}
        >
          Edit
        </Button>
      </DialogActions>
    </RoundedDialog>
  )
}
