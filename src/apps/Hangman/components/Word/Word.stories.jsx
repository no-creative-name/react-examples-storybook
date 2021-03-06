import { storiesOf } from '@storybook/react'
import React from 'react'

import { Word } from '.'

storiesOf('apps/Hangman/components/Word', module)
  .add('_o__e', () => <Word letters={[null, 'o', null, null, 'e']} />)
  .add('s_r__di_i_', () => (
    <Word letters={['s', null, 'r', null, null, 'd', 'i', null, 'i', null]} />
  ))
