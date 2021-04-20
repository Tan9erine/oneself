/* 自用 */
/* 动态引用css */
$("head").append("<link>");
console.log("aaaa")
　　css = $("head").children(":last");
　　css.attr({
　　　　rel: "stylesheet",
　　　　type: "text/css",
　　　　href: "https://cdn.jsdelivr.net/gh/Tan9erine/oneself/oneself.css"
　　});