import React from 'react'
import PropTypes from 'prop-types'
import {Text} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import s from './styles'

const ListSection = ({title}) => {
  return (
    <LinearGradient colors={['#2c9ef8', '#f44fb5','#000','red']} style={s.gradient}>
      <Text style={s.text}>{title}</Text>
    </LinearGradient>
  )
}

ListSection.propTypes = {
  title: PropTypes.string
}

export default ListSection
