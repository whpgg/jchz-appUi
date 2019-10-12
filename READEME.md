# 君晟 ui 轮子 - 君晟部分移动端轮子

[![Build Status](https://www.travis-ci.org/whpgg/jchz-appUi.svg?branch=master)](https://www.travis-ci.org/whpgg/jchz-appUi)

## 介绍

vue 造的部分轮子希望对你有些用

## 开始使用

1. 安装
   使用本框架前，请在 css 中开启 border-box
    ```
    *,*::before,*::after{box-sizing:border-box;}
    ```
    你还需要设置默认颜色变量
    ```
      *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      }
      :root {
      --button-height: 32px;
      --font-size: 14px;
      --button-bg: #ffffff;
      --button-active-bg: #eeeeee;
      --border-radius: 4px;
      --color: #333;
      --border-color: #999;
      --border-color-hover: #666666;
      }
      #app {
      margin: 20px;
      }
      body {
      font-size: var(--font-size);
      }
2. 安装
    ```
    npm i jchzui -S
    ```