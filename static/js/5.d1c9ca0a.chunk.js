(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{154:function(e,n,t){e.exports={Order:"Order_Order__2UZPd"}},158:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(154),i=t.n(c),u=function(e){var n=[];for(var t in e.ingredients)n.push({name:t,amount:e.ingredients[t]});var r=n.map((function(e){return a.a.createElement("span",{key:e.name,style:{textTransform:"capitalize",display:"inline-block",margin:"0 .8rem",border:"1px solid gray",padding:"0.5rem"}},e.name," : ",e.amount," ")}));return a.a.createElement("div",{className:i.a.Order},a.a.createElement("p",{style:{marginBottom:"1.2rem"}},"Ingredients: ",r),a.a.createElement("p",null,"Price : ",a.a.createElement("strong",null,"$ ",e.price)))},s=t(27),d=t(82),l=t(8),o=t(21),m=t(39);n.default=Object(d.a)((function(e){var n=Object(l.d)((function(e){return e.fetchOrders.orders})),t=Object(l.d)((function(e){return e.fetchOrders.fetching})),c=Object(l.d)((function(e){return e.authenticate.token})),i=Object(l.d)((function(e){return e.authenticate.userId})),s=Object(l.c)(),d=Object(r.useCallback)((function(e,n){return s(o.f(e,n))}),[s]);Object(r.useEffect)((function(){d(c,i)}),[d,c,i]);var p=a.a.createElement(m.a,null);return t&&(p=n.map((function(e){return a.a.createElement(u,{key:e.id,ingredients:e.ingredients,price:e.price})}))),a.a.createElement("div",null,p)}),s.a)}}]);
//# sourceMappingURL=5.d1c9ca0a.chunk.js.map