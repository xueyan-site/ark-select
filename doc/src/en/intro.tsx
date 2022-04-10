import React, { useState } from 'react'
import { Select } from 'xueyan-react-select'

const options = [
  {
    label: '我的',
    value: 1
  },
  {
    label: '嘻嘻$$$>>>>>',
    value: 2,
    disabled: true
  },
  {
    label: '这是一个发达省份的撒范德萨发大发的啥发的啥',
    value: 3
  }
]

export default function Main() {
  const [value, setValue] = useState<number|undefined>(3)
  return (
    <div>
      <Select 
        value={value} 
        options={options} 
        onChange={value => setValue(value)}
        allowClear={true}
        style={{ width: '200px' }}
      />
      <Select 
        value={value} 
        options={options} 
        disabled={true}
        onChange={value => setValue(value)}
        style={{ width: '200px', marginLeft: '16px' }}
      />
    </div>
  )
}
