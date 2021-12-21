---
title: 验证码输入框
---

## 验证码输入框

移动端验证码输入框，支持自定义验证码位数。

## DEMO

```tsx
import React, { useState } from 'react';
import { CodeBox } from 'rc-codebox';

export default () => {
  const [code, setCode] = useState('');
  const onChange = (code) => {
    setCode(code);
  };

  return (
    <div>
      <h3>现在输入的code是：{code}</h3>
      <CodeBox className="demo" onChange={onChange}></CodeBox>
    </div>
  );
};
```

<API></API>
