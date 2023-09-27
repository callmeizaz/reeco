import { Chip, Grid, Stack, Typography } from '@mui/material'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchProducts } from '../redux/slices/productSlice'
import type { RootState } from '../redux/store'

import Header from './Header'
import OrderDetails from './OrderDetails'
import OrdersTable from './OrdersTable'

const BreadCrumbs = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/" className="text-xs">
        Orders
      </Link>

      <Link className="text-xs" underline="hover" color="inherit" href="/">
        Order #12345
      </Link>
    </Breadcrumbs>
  )
}
const OrderComponent = () => {
  const dispatch = useAppDispatch()
  const products = useAppSelector((state: RootState) => state.products.products)
  const status = useAppSelector((state: RootState) => state.products.status)

  useEffect(() => {
    if (products.length) return
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <>
      <Header />
      {/* order Details */}

      <Grid container>
        <Grid item container>
          <Grid item xs={12} className="bg-white px-6 py-4">
            <Stack direction="column" spacing={1}>
              <BreadCrumbs />
              <Grid
                item
                container
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Grid item>
                  <Typography className="text-md font-bold">
                    Order #12345
                  </Typography>
                </Grid>
                <Grid item>
                  <Stack direction="row" spacing={1}>
                    <Chip
                      label="Back"
                      variant="outlined"
                      onClick={() => alert('clicked')}
                    />
                    <Chip
                      color="primary"
                      label="Approve Order"
                      onClick={() => alert('clicked')}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          </Grid>

          {/* order details */}
          <Grid item xs={12} className="px-6 py-4">
            <OrderDetails />
          </Grid>

          {/* Orders */}
          <Grid item xs={12} className="px-6 py-4">
            <OrdersTable products={products} status={status} />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default OrderComponent
