// src/reducers/productSlice.ts
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import type { Product } from '../../types/product.type'

interface ProductState {
  products: Product[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
}

// Async Thunk Action: Fetch Products
export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetch',
  async () => {
    const response = await fetch('/fake-products.json')
    const data: Product[] = await response.json()
    return data
  },
)

const productSlice = createSlice({
  name: 'products',
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.products = action.payload
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = 'failed'
      })
  },
  initialState: { products: [], status: 'idle' } as ProductState,
  reducers: {
    updateProduct: (
      state,
      action: PayloadAction<{
        id: number
        price: number
        quantity: number
        status: string
      }>,
    ) => {
      const { id, price, quantity, status } = action.payload
      const product = state.products.find((p) => p.id === id)
      if (product) {
        product.price = price
        product.quantity = quantity
        product.status = status
      }
    },
    updateProductStatus: (
      state,
      action: PayloadAction<{ id: number; status: string }>,
    ) => {
      const { id, status } = action.payload
      const product = state.products.find((p) => p.id === id)
      if (product) {
        product.status = status
      }
    },
  },
})

export const { updateProduct, updateProductStatus } = productSlice.actions
export default productSlice.reducer
