import CloseIcon from '@mui/icons-material/Close'
import DoneIcon from '@mui/icons-material/Done'
import PrintIcon from '@mui/icons-material/Print'
import {
  Card,
  Chip,
  CircularProgress,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import { Suspense, useState, lazy } from 'react'

import AvacodoImg from '../Assets/avocado-hass.jpg'
import SearchWrapper from '../features/SearchWrapper'
import { useAppDispatch } from '../hooks/redux'
import { updateProductStatus } from '../redux/slices/productSlice'
import type { Product } from '../types/product.type'

const StatusModal = lazy(async () => import('./StatusModal'))
const EditDialog = lazy(async () => import('./EditDialog'))

interface IProps {
  products: Product[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
}

const OrdersTable = ({ products, status }: IProps) => {
  const dispatch = useAppDispatch()
  const [orderInfo, setOrderInfo] = useState<Product>()
  const [selectedOrder, setSelectedOrder] = useState<number | null>(null)
  const [orderStatus, setOrderStatus] = useState('')
  const [open, setOpen] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)

  const handleCloseModal = () => {
    setOpen(false)
    setSelectedOrder(null)
  }
  const handleCloseEdit = () => {
    setOpenEdit(false)
    setOrderInfo(undefined)
  }

  const handleStatus = (id: number) => {
    setSelectedOrder(id)
    setOpen(true)
  }

  const handleStatusChange = () => {
    if (!selectedOrder || !orderStatus) return

    dispatch(
      updateProductStatus({
        id: selectedOrder,
        status: orderStatus,
      }),
    )

    setSelectedOrder(null)
    setOrderStatus('')
    setOpen(false)
  }

  const handleApprove = (id: number, status: string) => {
    if (!id || !status) return

    dispatch(
      updateProductStatus({
        id,
        status,
      }),
    )
  }

  return (
    <>
      <Card className=" w-full rounded-xl p-6">
        <Grid container>
          <Grid
            item
            xs={12}
            className="mb-4"
            container
            justifyContent="space-between"
          >
            <Grid item xs={3}>
              <SearchWrapper
                placeholder="Search"
                handleSearch={() => console.log('searching...')}
              />
            </Grid>
            <Grid item>
              <Stack direction="row" spacing={1}>
                <Chip
                  color="primary"
                  label="Add Item"
                  onClick={() => alert('clicked')}
                />
                <IconButton>
                  <PrintIcon />
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            className="px-4"
            justifyContent={'space-between'}
          >
            <Grid item xs={1}>
              <Typography className="text-gray-400 text-sm"></Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography className="text-gray-400 text-sm">
                Product Name
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography className="text-gray-400 text-sm">Brand</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography className="text-gray-400 text-sm">Price</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography className="text-gray-400 text-sm">
                Quantity
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography className="text-gray-400 text-sm">Total</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography className="text-gray-400 text-sm">Status</Typography>
            </Grid>
            <Grid item xs={2} />
          </Grid>

          <Grid item xs={12} className="my-2">
            <Divider />
          </Grid>

          {status !== 'succeeded' ? (
            <CircularProgress color="inherit" />
          ) : (
            <Grid
              item
              xs={12}
              className="overflow-scroll no-scrollbar"
              sx={{ height: '60vh' }}
            >
              {products.map((item) => (
                <>
                  <Grid
                    item
                    key={item.id}
                    container
                    alignItems="center"
                    className="px-4 overflow-scroll"
                    justifyContent={'space-between'}
                  >
                    <Grid item xs={1} className="my-2">
                      <img width={40} height={40} src={AvacodoImg} alt="" />
                    </Grid>
                    <Grid item xs={2}>
                      <Typography className="text-sm">{item.name}</Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <Typography className="text-sm">{item.brand}</Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <Typography className="text-sm">${item.price}</Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <Typography className=" text-sm">
                        {item.quantity}
                      </Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <Typography className=" text-sm">
                        ${(item.price * item.quantity).toFixed(2)}
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      {item.status ? (
                        <Chip
                          color={
                            item.status === 'Approved'
                              ? 'success'
                              : item.status === 'Missing'
                              ? 'warning'
                              : 'error'
                          }
                          label={item.status}
                          variant="filled"
                        />
                      ) : null}
                    </Grid>
                    <Grid item xs={2}>
                      <Stack direction="row" alignItems={'center'} spacing={1}>
                        <IconButton onClick={() => handleStatus(item.id)}>
                          <CloseIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => {
                            handleApprove(item.id, 'Approved')
                          }}
                        >
                          <DoneIcon />
                        </IconButton>
                        <Chip
                          color="primary"
                          variant={'outlined'}
                          label="Edit"
                          onClick={() => {
                            setOrderInfo(item)
                            setOpenEdit(true)
                          }}
                        />
                      </Stack>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className="my-2">
                    <Divider />
                  </Grid>
                </>
              ))}
            </Grid>
          )}
        </Grid>
      </Card>
      {/* status modal */}
      <Suspense fallback={status === 'succeeded' ? <CircularProgress /> : null}>
        <StatusModal
          orderStatus={orderStatus}
          open={open}
          handleClose={handleCloseModal}
          handleStatusChange={handleStatusChange}
          setOrderStatus={setOrderStatus}
        />
        <EditDialog
          order={orderInfo}
          open={openEdit}
          handleClose={handleCloseEdit}
        />
      </Suspense>
    </>
  )
}

export default OrdersTable
