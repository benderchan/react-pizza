(this["webpackJsonppizza-react"]=this["webpackJsonppizza-react"]||[]).push([[0],{25:function(e,t,c){},72:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c.n(i),s=c(18),r=c.n(s),a=(c(25),c(14)),o=c(36),l=c(3),j=c.p+"static/media/pizza-logo.56ac8703.svg",d=c(11),b=c(10),h=c(1),u=function(){var e=Object(b.c)((function(e){var t=e.cart;return{totalPrice:t.totalPrice,itemsCount:t.itemsCount}})),t=e.totalPrice,c=e.itemsCount;return Object(h.jsx)("div",{className:"header",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(d.b,{to:"/",children:Object(h.jsxs)("div",{className:"header__logo",children:[Object(h.jsx)("img",{width:"38",src:j,alt:"Pizza logo"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"React Pizza"}),Object(h.jsx)("p",{children:"\u0441\u0430\u043c\u0430\u044f \u0432\u043a\u0443\u0441\u043d\u0430\u044f \u043f\u0438\u0446\u0446\u0430 \u0432\u043e \u0432\u0441\u0435\u043b\u0435\u043d\u043d\u043e\u0439"})]})]})}),Object(h.jsx)("div",{className:"header__cart",children:Object(h.jsx)(d.b,{className:"button button--cart",to:"/cart",children:Object(h.jsxs)(m,{classname:"button--cart",children:[Object(h.jsxs)("span",{children:[t," \u20bd"]}),Object(h.jsx)("div",{className:"button__delimiter"}),Object(h.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(h.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(h.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(h.jsx)("span",{children:c})]})})})]})})},O=n.a.memo((function(e){var t=e.onCategoryClick,c=e.categories,i=e.activeCategory;return Object(h.jsx)("div",{className:"categories",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{onClick:function(){return t(null)},className:null===i?"active":"",children:"\u0412\u0441\u0435"}),c&&c.map((function(e,c){return Object(h.jsx)("li",{onClick:function(){return t(c)},className:i===c?"active":"",children:e},"".concat(e,"_").concat(c))}))]})})})),x=c(17),p=c.n(x),m=function(e){var t=e.classname,c=e.outline,i=e.children,n=e.onClick;return Object(h.jsx)("button",{onClick:n,className:p()("button",t,{"button--outline":c}),children:i})},C=n.a.memo((function(e){var t=e.sortItems,c=e.sortBy,n=e.onSortClick;Object(i.useEffect)((function(){document.body.addEventListener("click",r)}),[]);var s=Object(i.useRef)(),r=function(e){(e.path||e.composedPath&&e.composedPath()).includes(s.current)||d(!1)},o=Object(i.useState)(!1),l=Object(a.a)(o,2),j=l[0],d=l[1],b=t.find((function(e){return e.type===c})).name;return Object(h.jsxs)("div",{ref:s,className:"sort",children:[Object(h.jsxs)("div",{className:"sort__label",children:[Object(h.jsx)("svg",{width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:j?"rotate":"",children:Object(h.jsx)("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z",fill:"#2C2C2C"})}),Object(h.jsx)("b",{children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e:"}),Object(h.jsx)("span",{onClick:function(){d(!j)},children:b})]}),j&&Object(h.jsx)("div",{className:"sort__popup",children:Object(h.jsx)("ul",{children:t.map((function(e,t){return Object(h.jsx)("li",{onClick:function(){return t=e.type,n(t),void d(!1);var t},className:t===c?"active":"",children:e.name},t)}))})})]})}));C.defaultProps={item:[]};var v=C;function f(e){var t=e.id,c=e.name,n=e.price,s=e.imageUrl,r=e.sizes,o=e.types,l=e.dispatch,j=e.cartItemsCount,d=["\u0442\u043e\u043d\u043a\u043e\u0435","\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0435"],b=[26,30,40],u=Object(i.useState)(0),O=Object(a.a)(u,2),x=O[0],C=O[1],v=Object(i.useState)(o[0]),f=Object(a.a)(v,2),g=f[0],y=f[1];return Object(h.jsxs)("div",{className:"pizza-block",children:[Object(h.jsx)("img",{className:"pizza-block__image",src:s,alt:"Pizza"}),Object(h.jsx)("h4",{className:"pizza-block__title",children:c}),Object(h.jsxs)("div",{className:"pizza-block__selector",children:[Object(h.jsx)("ul",{children:d.map((function(e,t){return Object(h.jsx)("li",{className:p()({active:t===g,disabled:!o.includes(t)}),onClick:function(){return function(e){y(e)}(t)},children:e},e)}))}),Object(h.jsx)("ul",{children:b.map((function(e,t){return Object(h.jsxs)("li",{onClick:function(){return function(e){C(e)}(t)},className:p()({active:t===x,disabled:!r.includes(e)}),children:[e," \u0441\u043c."]},t)}))})]}),Object(h.jsxs)("div",{className:"pizza-block__bottom",children:[Object(h.jsxs)("div",{className:"pizza-block__price",children:["\u043e\u0442 ",n," \u20bd"]}),Object(h.jsxs)(m,{onClick:function(){var e={id:t,name:c,imageUrl:s,price:n,size:b[x],type:d[g]};l(e)},classname:"button--add",outline:!0,children:[Object(h.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("path",{d:"M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z",fill:"white"})}),Object(h.jsx)("span",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),j&&Object(h.jsx)("i",{children:j})]})]})]})}f.defaultProps={types:[]};var g=f,y=c(38);var _=function(){return Object(h.jsxs)(y.a,{className:"pizza-block",speed:2,width:280,height:457,viewBox:"0 0 280 457",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(h.jsx)("rect",{x:"338",y:"548",rx:"3",ry:"3",width:"88",height:"6"}),Object(h.jsx)("rect",{x:"286",y:"521",rx:"3",ry:"3",width:"52",height:"6"}),Object(h.jsx)("rect",{x:"360",y:"526",rx:"3",ry:"3",width:"410",height:"6"}),Object(h.jsx)("rect",{x:"212",y:"532",rx:"3",ry:"3",width:"380",height:"6"}),Object(h.jsx)("rect",{x:"185",y:"520",rx:"3",ry:"3",width:"178",height:"6"}),Object(h.jsx)("circle",{cx:"472",cy:"535",r:"20"}),Object(h.jsx)("circle",{cx:"130",cy:"130",r:"130"}),Object(h.jsx)("rect",{x:"170",y:"319",rx:"0",ry:"0",width:"0",height:"1"}),Object(h.jsx)("rect",{x:"0",y:"279",rx:"3",ry:"3",width:"260",height:"30"}),Object(h.jsx)("rect",{x:"0",y:"318",rx:"6",ry:"6",width:"260",height:"84"}),Object(h.jsx)("rect",{x:"512",y:"525",rx:"0",ry:"0",width:"100",height:"15"}),Object(h.jsx)("rect",{x:"0",y:"415",rx:"3",ry:"3",width:"71",height:"30"}),Object(h.jsx)("rect",{x:"141",y:"414",rx:"15",ry:"15",width:"120",height:"30"})]})},w=c(4),k=c(39),z=c.n(k),L=function(e){return{type:"SET_PIZZAS",payload:e}},N=function(e){return{type:"SET_LOADED",val:e}},E=[{name:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438",type:"popular"},{name:"\u0446\u0435\u043d\u0435",type:"price"},{name:"\u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443",type:"name"}],B=["\u041c\u044f\u0441\u043d\u044b\u0435","\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0430\u044f","\u0413\u0440\u0438\u043b\u044c","\u041e\u0441\u0442\u0440\u044b\u0435","\u0417\u0430\u043a\u0440\u044b\u0442\u044b\u0435"],M=function(){var e=Object(b.c)((function(e){return{items:e.pizzas.items,isLoaded:e.pizzas.isLoaded,sortBy:e.filters.sortBy,category:e.filters.category,cartItems:e.cart.pizzas}})),t=e.items,c=e.isLoaded,n=e.sortBy,s=e.category,r=e.cartItems,a=Object(b.b)();Object(i.useEffect)((function(){a(function(e,t){return function(c){c(N(!1)),z.a.get("https://613b71a2110e000017a4561c.mockapi.io/pizzas?".concat(null!==t?"category=".concat(t):"","&sortBy=").concat(e,"&order=asc")).then((function(e){var t=e.data;return c(L(t))}))}}(n,s))}),[s,n,a]);var o=function(e){a(function(e){return{type:"ADD_PIZZA_CART",payload:e}}(e))};return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"content__top",children:[Object(h.jsx)(O,{onCategoryClick:function(e){a({type:"SET_CATEGORY",payload:e})},categories:B,activeCategory:s}),Object(h.jsx)(v,{sortBy:n,sortItems:E,onSortClick:function(e){a({type:"SET_SORT_BY",payload:e})}})]}),Object(h.jsx)("h2",{className:"content__title",children:"\u0412\u0441\u0435 \u043f\u0438\u0446\u0446\u044b"}),Object(h.jsx)("div",{className:"content__items",children:c?t.map((function(e){return Object(i.createElement)(g,Object(w.a)(Object(w.a)({dispatch:o},e),{},{key:e.id,isLoading:!0,cartItemsCount:r[e.id]&&r[e.id].length}))})):Array(12).fill(0).map((function(e,t){return Object(h.jsx)(_,{},t)}))})]})};var T,S=function(e){var t=e.id,c=e.name,i=e.type,n=e.size,s=e.total,r=e.itemsCount,a=e.removePizzaCart,o=e.onMinusItem,l=e.onPlusItem,j=e.imageUrl;return Object(h.jsxs)("div",{className:"cart__item",children:[Object(h.jsx)("div",{className:"cart__item-img",children:Object(h.jsx)("img",{className:"pizza-block__image",src:j,alt:"Pizza"})}),Object(h.jsxs)("div",{className:"cart__item-info",children:[Object(h.jsx)("h3",{children:c}),Object(h.jsxs)("p",{children:[i," \u0442\u0435\u0441\u0442\u043e, ",n," \u0441\u043c."]})]}),Object(h.jsxs)("div",{className:"cart__item-count",children:[Object(h.jsx)("div",{onClick:function(){o(t)},className:"button button--outline button--circle cart__item-count-minus",children:Object(h.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(h.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})}),Object(h.jsx)("b",{children:r}),Object(h.jsx)("div",{onClick:function(){l(t)},className:"button button--outline button--circle cart__item-count-plus",children:Object(h.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(h.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})]}),Object(h.jsx)("div",{className:"cart__item-price",children:Object(h.jsxs)("b",{children:[s," \u20bd"]})}),Object(h.jsx)("div",{className:"cart__item-remove",children:Object(h.jsx)(m,{onClick:function(){a(t)},classname:"button--circle",outline:!0,children:Object(h.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(h.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})})]})},A=c.p+"static/media/empty-cart.db905d1f.png",P=function(){var e=Object(b.c)((function(e){return e.cart})),t=e.totalPrice,c=e.itemsCount,n=e.pizzas,s=Object.keys(n).map((function(e){return n[e][0]})),r=Object(b.b)(),a=function(e){window.confirm("Delete pizza?")&&r(function(e){return{type:"REMOVE_CART_ITEM",payload:e}}(e))},o=function(e){r(function(e){return{type:"PLUS_CART_ITEMS",payload:e}}(e))},l=function(e){r(function(e){return{type:"MINUS_CART_ITEMS",payload:e}}(e))};return Object(h.jsx)("div",{className:"container container--cart",children:c?Object(h.jsxs)("div",{className:"cart",children:[Object(h.jsxs)("div",{className:"cart__top",children:[Object(h.jsxs)("h2",{className:"content__title",children:[Object(h.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(h.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(h.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"]}),Object(h.jsxs)("div",{className:"cart__clear",children:[Object(h.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("path",{d:"M2.5 5H4.16667H17.5",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(h.jsx)("path",{d:"M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(h.jsx)("path",{d:"M8.33337 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(h.jsx)("path",{d:"M11.6666 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(h.jsx)("span",{onClick:function(){window.confirm("Clear cart?")&&r({type:"CLEAR_CART"})},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})]}),Object(h.jsx)("div",{className:"content__items",children:s.map((function(e,t){return Object(i.createElement)(S,Object(w.a)(Object(w.a)({},e),{},{onPlusItem:o,onMinusItem:l,key:t,removePizzaCart:a,total:n[e.id].reduce((function(e,t){return t.price+e}),0),itemsCount:n[e.id].length}))}))}),Object(h.jsxs)("div",{className:"cart__bottom",children:[Object(h.jsxs)("div",{className:"cart__bottom-details",children:[Object(h.jsxs)("span",{children:["\u0412\u0441\u0435\u0433\u043e \u043f\u0438\u0446\u0446: ",Object(h.jsxs)("b",{children:[c," \u0448\u0442."]})]}),Object(h.jsxs)("span",{children:["\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430: ",Object(h.jsxs)("b",{children:[t," \u20bd"]})]})]}),Object(h.jsxs)("div",{className:"cart__bottom-buttons",children:[Object(h.jsxs)("a",{href:"/",className:"button button--outline button--add go-back-btn",children:[Object(h.jsx)("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("path",{d:"M7 13L1 6.93015L6.86175 1",stroke:"#D3D3D3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Object(h.jsx)(d.b,{to:"/",children:Object(h.jsx)("span",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})})]}),Object(h.jsx)(m,{onClick:function(){console.log("Your order",n)},classname:"button pay-btn",children:Object(h.jsx)("span",{children:"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441"})})]})]})]}):Object(h.jsxs)("div",{className:"cart cart--empty",children:[Object(h.jsxs)("h2",{children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f ",Object(h.jsx)("i",{children:"\ud83d\ude15"})]}),Object(h.jsxs)("p",{children:["\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u0435\u0439 \u0432\u0441\u0435\u0433\u043e, \u0432\u044b \u043d\u0435 \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u043b\u0438 \u0435\u0449\u0451 \u043f\u0438\u0446\u0446\u0443.",Object(h.jsx)("br",{}),"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0438\u0446\u0446\u0443, \u043f\u0435\u0440\u0435\u0439\u0434\u0438 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."]}),Object(h.jsx)("img",{src:A,alt:"Empty cart"}),Object(h.jsx)(d.b,{to:"/",className:"button button--black",children:Object(h.jsx)("span",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})})]})})},V=c(22);var I=function(){var e=Object(V.b)(T||(T=Object(o.a)(["\n    body {\n        background: ",";\n      }\n"])),(function(e){return e.theme.body})),t=Object(i.useState)("light"),c=Object(a.a)(t,2),n=c[0],s=c[1];return Object(h.jsxs)(V.a,{theme:"light"===n?{body:"#363537"}:{body:"#E2E2E2"},children:[Object(h.jsx)(m,{onClick:function(){s("light"===n?"dark":"light")},children:"Toggle theme"}),Object(h.jsx)("div",{id:"google_translate_element"}),Object(h.jsx)(e,{}),Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)(u,{}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)(l.a,{path:"/",exact:!0,children:Object(h.jsx)(M,{})}),Object(h.jsx)(l.a,{path:"/cart",exact:!0,children:Object(h.jsx)(P,{})})]})]})]})},R=c(16),Z={sortBy:"popular",category:null},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SORT_BY":return Object(w.a)(Object(w.a)({},e),{},{sortBy:t.payload});case"SET_CATEGORY":return Object(w.a)(Object(w.a)({},e),{},{category:t.payload})}return e},D={items:[],isLoaded:!1},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PIZZAS":return Object(w.a)(Object(w.a)({},e),{},{items:t.payload,isLoaded:!0});default:break;case"SET_LOADED":return Object(w.a)(Object(w.a)({},e),{},{isLoaded:t.payload})}return e},U=c(43),Y=c(23),G={pizzas:{},totalPrice:0,itemsCount:0},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;return Object(U.a)(e,(function(e){switch(t.type){case"ADD_PIZZA_CART":e.pizzas[t.payload.id]||(e.pizzas[t.payload.id]=[]),e.pizzas[t.payload.id].push(t.payload);break;case"PLUS_CART_ITEMS":e.pizzas[t.payload].push(e.pizzas[t.payload][0]);break;case"MINUS_CART_ITEMS":e.pizzas[t.payload].length>1&&e.pizzas[t.payload].shift();break;case"REMOVE_CART_ITEM":delete e.pizzas[t.payload];break;case"CLEAR_CART":e.pizzas={}}var c=Object(Y.reduce)(Object(Y.map)(e.pizzas),(function(e,t){return e.concat(t)}),[]);e.totalPrice=c.reduce((function(e,t){return t.price+e}),0),e.itemsCount=c.length}))},X=Object(R.b)({filters:H,pizzas:W,cart:J}),q=c(44),F=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||R.c,K=Object(R.d)(X,F(Object(R.a)(q.a)));window.store=K;var Q=K;r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(d.a,{children:Object(h.jsx)(b.a,{store:Q,children:Object(h.jsx)(I,{})})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.6d9a1191.chunk.js.map