<template>
  <div id="views" class="w_100 h_100">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
    html, body{
        width: 100%;
        height: 100%;
        font-family: "microsoft yahei", 'Avenir', Helvetica, Arial, sans-serif;
        color: #222;
    }
    /*清除浏览器默认样式�*/
    fieldset,
    img,
    input,
    button {
        border: none;
        padding: 0;
        margin: 0;
        outline-style: none;
        background-color: transparent;
        font-family: "microsoft yahei";
    }
    input {
        padding-top: 0;
        padding-bottom: 0;
        vertical-align: middle;
        border: 0;
        outline: none;
    }
    input:required:invalid {
        box-shadow: none;
        -moz-box-shadow: none;
    }
    input:focus {
        outline: none;
    }
    s,
    i,
    em {
        font-style: normal;
        text-decoration: none;
        font-size: 12px;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: 100%;
        font-weight: 500;
    }
    /* 统一上标和下标 */
    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }
    sup {
        top: -0.5em;
    }
    a:hover {
        /* 显示下划线 */
        /* text-decoration:underline; */
        outline: none;
    }
    ins,
    a {
        text-decoration: none;
        color: #000;
    }
    sub {
        bottom: -0.25em;
    }
    /* 清除浮动 */
    .clearfix:before,
    .clearfix:after {
        content: "";
        display: table;
    }
    .clearfix:after {
        clear: both;
        overflow: hidden;
    }
    .clearfix {
        zoom: 1;
        /* for ie6 & ie7 */
    }
    .clear {
        clear: both;
        display: block;
        font-size: 0;
        height: 0;
        line-height: 0;
        overflow: hidden;
    }
    /* 商城公共样式 */
    .fl {
        float: left;
    }

    .fr {
        float: right;
    }
    .hide {
        display: none;
    }
    .block {
        display: block;
    }
    .dispaly_inline {
        display: inline-block;
        vertical-align: middle;
    }
    .tl {
        text-align: left;
    }
    .tc {
        text-align: center;
    }
    .tr {
        text-align: right;
    }
    .w_100{
        width: 100%;
    }
    .h_100{
        height: 100%;
    }
    .ft_14 {
        font-size: 14px;
    }
    .ft_16 {
        font-size: 16px;
    }
    .ft_18 {
        font-size: 18px;
    }
    .ft_20 {
        font-size: 20px;
    }
    .ft_24 {
        font-size: 24px;
    }
    .ft_n {
        font-weight: 500;
    }
    .ft_w {
        font-weight: 700;
    }
    .c666 {
        color: #666;
    }
    .c999 {
        color: #999;
    }
    .ccc {
        color: #ccc;
    }
    .fff {
        color: #fff;
    }
</style>
