import React, { useState } from 'react'
import { Select } from 'xueyan-react-select'

const options = [
  {
    label: '选项一',
    value: 1
  },
  {
    label: '选项二',
    value: 8
  },
  {
    label: '选项三',
    value: 2,
    disabled: true
  },
  {
    label: '选项三选项三选项三选项三选项三选项三选项三选项三',
    value: 6,
    disabled: true
  },
  {
    label: '选项四',
    value: 3
  },
  {
    label: '选项五',
    value: 4
  },
  {
    label: '选项六',
    value: 5
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

export default function Main() {
  const [value, setValue] = useState<number|undefined>(3)
  return (
    <div>
      <Select 
        options={options} 
        onChange={value => setValue(value)}
        allowClear={true}
        placeholder="请输入"
        style={{ width: '200px' }}
      />
      <br/>
      <Select 
        value={value} 
        options={options} 
        onChange={value => setValue(value)}
        allowClear={true}
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
