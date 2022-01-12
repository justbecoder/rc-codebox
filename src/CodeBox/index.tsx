/**
 * @file: 验证码输入框
 * @author: huxiaoshuai
 * @Date: 2021-12-20 17:46:36
 * @LastEditors: huxiaoshuai
 * @LastEditTime: 2022-01-12 19:51:57
 */

import React, { useRef, useEffect } from 'react';
import './index.less';

interface CodeBoxProps {
  /**
   * @description 验证码的位数
   * @default 6
   */
  len?: number;
  /**
   * @description 验证码改变时的callback
   */
  onChange?: (code: string) => void;

  /**
   * @description 自定义类名
   *
   */
  className?: string;

  /**
   * @description 是否自动获取焦点
   * @default true
   */
  autoFocus?: boolean;
}

export function CodeBox(props: CodeBoxProps) {
  const { len = 6, onChange, className = '', autoFocus = true } = props;

  // 输入框数组
  const inputArr = new Array(len).fill('');

  // 输入框ref
  const inputRefs = useRef<any>([]);

  /**
   * @method getRef
   * @description 获取input的ref
   */
  const getRef = (dom: any) => {
    if (inputRefs?.current?.length === len) {
      return;
    }
    inputRefs.current.push(dom);
  };

  /**
   * @method onInputKeyDown
   * @method 处理input的删除事件
   * @param e 事件
   * @param index number input输入框对应的索引
   */
  const onInputKeyDown = (e: any, index: number) => {
    switch (e.key) {
      case 'Backspace':
        if (index > 0 && !e.target.value) {
          const currentInputRef = inputRefs.current[index];
          currentInputRef.value = '';
          const prevInputRef = inputRefs.current[index - 1];
          prevInputRef.focus();
          // prevInputRef.select();
          e.preventDefault();
        }
        break;
    }
  };

  /**
   * @method onInputValueChange
   * @description 当输入的验证码发生变化时
   * @param index number input输入框对应的索引
   */
  const onInputValueChange = (index: number, e: any) => {
    let code = '';
    inputRefs.current?.forEach((ref: any) => {
      if (ref?.value) {
        code += ref?.value;
      } else {
        code += ' ';
      }
    });

    // 判断是删除操作
    if (index > 0 && !e.target.value) {
      const prevInputRef = inputRefs.current[index - 1];
      prevInputRef.focus();
    }

    // 判断是写入操作
    if (index < len - 1 && e.target.value) {
      const nextInputRef = inputRefs.current[index + 1];
      nextInputRef.focus();
    }

    onChange && onChange(code);
  };

  const getInputClassName = (index: number) => {
    const currentInputRef = inputRefs.current[index];
    const value = currentInputRef?.value;
    const defaultClassName = 'code-box-input';

    return value ? defaultClassName + ' has-string' : defaultClassName;
  };

  useEffect(() => {
    if (autoFocus) {
      inputRefs?.current[0].focus();
    }
  }, [autoFocus]);

  return (
    <div className={className ? `code-box ${className}` : 'code-box'}>
      {inputArr.map((v, index) => {
        return (
          <input
            ref={getRef}
            maxLength={1}
            className={getInputClassName(index)}
            key={index}
            type="text"
            onFocus={() => {
              inputRefs.current[index].select();
            }}
            onKeyDown={(e) => {
              onInputKeyDown(e, index);
            }}
            onChange={(e) => {
              onInputValueChange(index, e);
            }}
          />
        );
      })}
    </div>
  );
}

export default CodeBox;
