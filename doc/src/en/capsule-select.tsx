import React, { useState } from 'react'
import { CapsuleSelect } from 'xueyan-react-select'
import { SwitchTheme } from 'xueyan-react-style'

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
    label: '选项88',
    value: 6,
    disabled: true
  },
  {
    label: '选项三选项三选项三选项三选项三选项三选项三选项三',
    value: 2,
    disabled: true
  },
  {
    label: '选项四',
    value: 3
  },
  {
    label: '选项五',
    value: 4
  }
]

export default function Main() {
  const [value, setValue] = useState<number|undefined>(3)
  return (
    <div style={{ background: 'var(--base)' }}>
      <SwitchTheme/>
      <CapsuleSelect 
        value={value}
        options={[options[0]]}
        onChange={value => setValue(value)}
        style={{ width: '200px', marginTop: '16px' }}
      />
      <CapsuleSelect 
        value={value} 
        options={options} 
        onChange={value => setValue(value)}
        style={{ marginTop: '16px' }}
      />
      <CapsuleSelect 
        value={value} 
        options={options} 
        disabled={true}
        onChange={value => setValue(value)}
        style={{ marginTop: '16px' }}
      />
      <CapsuleSelect 
        value={value} 
        options={options} 
        vertical={true}
        onChange={value => setValue(value)}
        style={{ width: '200px', marginTop: '16px' }}
      />
      <CapsuleSelect 
        value={value} 
        options={options} 
        disabled={true}
        vertical={true}
        onChange={value => setValue(value)}
        style={{ width: '200px', marginTop: '16px' }}
      />
    </div>
  )
}
