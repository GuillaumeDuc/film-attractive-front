(this.webpackJsonpweb_front=this.webpackJsonpweb_front||[]).push([[0],{37:function(e,t,a){e.exports=a(50)},42:function(e,t,a){},43:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),o=a.n(l),c=(a(42),a(43),a(8)),i=a(9),s=a(22),m=a(11),u=a(10),p=a(24),f=a.n(p),d=a(30),h=a.n(d),E=a(31),b=a.n(E),v=a(73),w=a(64),O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(v.a,{className:"info-wrapper info-world"},r.a.createElement("div",{className:"info-title"},"Classements national"),r.a.createElement(w.a,null,r.a.createElement("div",{className:"info-row"},r.a.createElement(h.a,null)," Villes les plus populaires"),r.a.createElement("div",{className:"info-row"},r.a.createElement(b.a,null)," Villes les moins populaires"),r.a.createElement("div",{className:"info-row"},r.a.createElement(f.a,null)," Villes avec le plus de films \xe9trangers")))}}]),a}(n.Component),j=a(32),k=a.n(j),y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(v.a,{className:"info-wrapper info-city"},r.a.createElement("div",{className:"info-title"},"Information sur ",this.props.info),r.a.createElement(w.a,null,r.a.createElement("div",{className:"info-row"},r.a.createElement(k.a,null)," Nombre de films"),r.a.createElement("div",{className:"info-row"},r.a.createElement(f.a,null)," Nombre de films \xe9trangers")))}}]),a}(n.Component),C=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"component-wrapper display-info"},r.a.createElement(O,null),r.a.createElement(y,{info:this.props.info}))}}]),a}(n.Component),N=a(70),g=a(71),z=a(65),M=a(66),S=a(72),V=a(67),x=a(68),B=a(69),I=[46,2],J=[{city:"Paris",size:"12"},{city:"Marseille",size:"5"}],P=[[46,2],[46.5,2.02],[46.51,2.12]],W=[[[46.5,2],[46.5,2.12],[46.52,2.12]],[[46.5,1],[46.5,1.12],[46.52,1.12]]],_=[[51.515,-.09],[51.52,-.1],[51.52,-.12]],$=[[[51.51,-.12],[51.51,-.13],[51.53,-.13]],[[51.51,-.05],[51.51,-.07],[51.53,-.07]]],q=[[51.49,-.08],[51.5,-.06]],A=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={lat:51.505,lng:-.09,zoom:13},e}return Object(i.a)(a,[{key:"render",value:function(){this.state.lat,this.state.lng;var e=this.props.handleClick;return r.a.createElement("div",{className:"component-wrapper map-wrapper"},r.a.createElement(N.a,{center:I,zoom:6},r.a.createElement(g.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),J.map((function(){})),r.a.createElement(z.a,{center:I,fillColor:"blue",radius:200}),r.a.createElement(M.a,{center:I,color:"red",radius:20,onclick:e},r.a.createElement(S.a,null,"Popup in CircleMarker")),r.a.createElement(V.a,{color:"lime",positions:P}),r.a.createElement(V.a,{color:"lime",positions:W}),r.a.createElement(x.a,{color:"purple",positions:_}),r.a.createElement(x.a,{color:"purple",positions:$}),r.a.createElement(B.a,{bounds:q,color:"black"})))}}]),a}(n.Component),D=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={info:""},e.handleClick=e.handleClick.bind(Object(s.a)(e)),e}return Object(i.a)(a,[{key:"handleClick",value:function(){this.setState({info:"Clicked"})}},{key:"render",value:function(){return r.a.createElement("div",{className:"filmattractive-wrapper"},r.a.createElement(A,{handleClick:this.handleClick}),r.a.createElement(C,{info:this.state.info}))}}]),a}(n.Component);var F=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(49);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.63249328.chunk.js.map