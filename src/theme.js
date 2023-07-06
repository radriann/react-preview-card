/* eslint-disable quotes */
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    primary: {
      'dark-cyan': 'hsl(212, 21%, 14%)',
      'custom-cream': 'hsl(30, 38%, 92%)'
    },
    neutral: {
      'very-dark-blue': 'hsl(212, 21%, 14%)',
      'dark-grayish-blue': 'hsl(228, 12%, 48%)'
    }
  },
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Fraunces', sans-serif`
  }
})
