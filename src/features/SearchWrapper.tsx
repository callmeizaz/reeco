import SearchIcon from '@mui/icons-material/Search'
import { InputBase } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'

const Search = styled('div')(() => ({
  '&:hover': {
    backgroundColor: '#F2F2F2',
  },
  backgroundColor: '#FFFFFF',
  border: '1px solid #E0E0E0',
  borderRadius: 10,
  marginLeft: 0,
  position: 'relative',
  width: '100%',
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  padding: theme.spacing(0, 2),
  pointerEvents: 'none',
  position: 'absolute',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    '&:focus': {
      border: 'none !important',
    },
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },

  color: 'inherit',
  width: '100%',
}))

interface IProps {
  handleSearch: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
  placeholder: string
}

const SearchWrapper = ({ handleSearch, placeholder }: IProps) => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon className="text-gray-400" />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={placeholder}
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleSearch}
      />
    </Search>
  )
}

export default SearchWrapper
