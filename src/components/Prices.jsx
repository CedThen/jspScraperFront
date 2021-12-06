import React from 'react'
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
} from '@chakra-ui/react'
import { toFixed } from '../services/helperFx'

const decimalPlaces = 2

const Prices = ({ data, onRowClick }) => {
  const { runeprices, createdAt } = data[0]
  const { runeprices: prevRuneprices } = data[1]

  return (
    <Box w="40vw" display="flex" alignItems="center" justifyContent="center" p="5px">
      <Table variant="striped" colorScheme="red">
        <TableCaption>Last updated at {createdAt}</TableCaption>
        <Thead>
          <Tr>
            <Th>Rune</Th>
            <Th>Bid Avg</Th>
            <Th>Ask Avg</Th>
            <Th># Posts in last hr</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.keys(runeprices).map(rune => {
            let bidColor = runeprices[rune].bidAvg > prevRuneprices[rune].bidAvg ? 'green' : 'red'
            let askColor = runeprices[rune].askAvg > prevRuneprices[rune].askAvg ? 'green' : 'red'
            return (
              <Tr onClick={() => onRowClick(rune)}>
                <Th>{rune}</Th>
                <Th isNumeric color={bidColor}>{toFixed(runeprices[rune].bidAvg, decimalPlaces)}fg</Th>
                <Th isNumeric color={askColor}>{toFixed(runeprices[rune].askAvg, decimalPlaces)}fg</Th>
                <Th isNumeric>{runeprices[rune].count}</Th>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </Box>
  )
}

export default Prices