import React, { useState } from 'react'
import { Article, Segment } from 'xueyan-react-markdown'
import { Playground } from 'xueyan-react-playground'
import { Select, BoxSelect, CapsuleSelect } from 'ark-select'

const MARK1 = `
选择组件库
`

const CODE1 = `
import React, { useState } from 'react'
import { Select } from 'ark-select'

const options = [
  {
    label: '选项一',
    value: 1
  },
  {
    label: '选项二',
    value: 2,
    disabled: true
  },
  {
    label: '选项三选项三选项三选项三选项三选项三选项三选项三',
    value: 3,
  },
  {
    label: '选项四',
    value: 4
  }
]

export default function Example() {
  const [value, setValue] = useState<number|undefined>(3)
  return (
    <Select 
      value={value}
      options={options} 
      onClear={() => setValue(undefined)}
      onChange={value => setValue(value)}
      style={{ width: '200px' }}
    />
  )
}
`

const CODE2 = `
import React, { useState } from 'react'
import { BoxSelect } from 'ark-select'

const options = [
  {
    label: '选项一',
    value: 1
  },
  {
    label: '选项二',
    value: 2,
    disabled: true
  },
  {
    label: '选项三选项三选项三选项三选项三选项三选项三选项三',
    value: 3,
  },
  {
    label: '选项四',
    value: 4
  }
]

export default function Example() {
  const [value, setValue] = useState<number|undefined>(3)
  return (
    <BoxSelect 
      value={value}
      options={options}
      onChange={value => setValue(value)}
      vertical={true}
      style={{ width: '200px' }}
    />
  )
}
`

const CODE3 = `
import React, { useState } from 'react'
import { CapsuleSelect } from 'ark-select'

const options = [
  {
    label: '选项一',
    value: 1
  },
  {
    label: '选项二',
    value: 2,
    disabled: true
  },
  {
    label: '选项三选项三选项三选项三选项三选项三选项三选项三',
    value: 3,
  },
  {
    label: '选项四',
    value: 4
  }
]

export default function Example() {
  const [value, setValue] = useState<number|undefined>(3)
  return (
    <CapsuleSelect 
      value={value}
      options={options}
      onChange={value => setValue(value)}
      style={{ width: '200px' }}
      vertical={true}
    />
  )
}
`

export default function Main() {
  const scope = { React, useState, Select, BoxSelect, CapsuleSelect }
  return (
    <Article>
      <Segment>{MARK1}</Segment>
      <Segment>## 普通选择器</Segment>
      <Playground scope={scope}>{CODE1}</Playground>
      <Segment>## 盒子式选择器</Segment>
      <Playground scope={scope}>{CODE2}</Playground>
      <Segment>## 胶囊式选择器</Segment>
      <Playground scope={scope}>{CODE3}</Playground>
    </Article>
  )
}
