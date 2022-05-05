import React, { useState } from 'react'
import { Select } from 'xueyan-react-select'
import { SwitchTheme } from 'xueyan-react-style'

const options = [
  {
    label: '选项一',
    value: 1,
    disabled: true
  },
  {
    label: '选项二',
    value: 8,
    disabled: true
  },
  {
    label: '选项三',
    value: 2
  },
  {
    label: '选项三选项三选项三选项三选项三选项三选项三选项三',
    value: 6,
    disabled: true
  },
  {
    label: '选项四',
    value: 3,
    disabled: true
  },
  {
    label: '选项五',
    value: 4,
    disabled: true
  },
  {
    label: '选项六',
    value: 5,
    disabled: true
  },
  {
    label: '选项七',
    value: 7
  },
  {
    label: '选项八',
    value: 8
  },
  {
    label: '选项九',
    value: 9
  }
]

const options1 = [
  {
    label: '选项一',
    value: 1
  }
]

export default function Main() {
  const [value, setValue] = useState<number|undefined>(3)
  const [value1, setValue1] = useState<number>()
  return (
    <div style={{ background: 'var(--base)' }}>
      <SwitchTheme/>
      <Select 
        value={value1}
        options={options1} 
        onChange={value => setValue1(value)}
        onClear={() => setValue1(undefined)}
        placeholder="请输入"
        style={{ width: '200px', marginTop: '16px' }}
      />
      <br/>
      <Select 
        value={value} 
        options={options} 
        onChange={value => setValue(value)}
        onClear={() => setValue(undefined)}
        style={{ width: '200px', marginTop: '16px' }}
      />
      <br/>
      <Select 
        value={value} 
        options={options} 
        disabled={true}
        onChange={value => setValue(value)}
        style={{ width: '200px', marginTop: '16px' }}
      />
    </div>
  )
}
