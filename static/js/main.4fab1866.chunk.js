(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{18:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var o,r,c,a,i=n(1),s=n.n(i),b=n(6),d=n.n(b),u=(n(17),n(18),n(7)),j=n(8),l=n(11),h=n(10),x=n(2),O=n(3),g=O.a.p(o||(o=Object(x.a)(["\nmargin:0;\n"]))),f=n(4),p=n(0),v=function(t){var e=t.good,n=t.neutral,o=t.bad,r=t.total,c=t.positivePercentage,a=void 0===c?"100":c;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{children:[Object(p.jsxs)(g,{children:[Object(p.jsx)(f.a,{})," Good: ",e]}),Object(p.jsxs)(g,{children:[Object(p.jsx)(f.b,{})," Neutral: ",n]}),Object(p.jsxs)(g,{children:[Object(p.jsx)(f.c,{})," Bad: ",o]}),Object(p.jsxs)(g,{children:["Total: ",r]}),Object(p.jsxs)(g,{children:["Positive feedback: ",a,"%"]})]})})},w=O.a.h1(r||(r=Object(x.a)(["\nfont-size: 2em;"]))),m=function(t){var e=t.title;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(w,{children:e})})},B=O.a.button(c||(c=Object(x.a)(["\n  width: 90px;\n  border: solid 1px rgb(148, 146, 146);\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);\n  font-size: 15px;\n  font-weight: 700;\n  margin-right: 10px;\n  border-radius: 10px;\n  padding: 5px;\n  background: none;\n  cursor: pointer;\n\n  &:hover{\n    box-shadow: 0 0 20px rgba(5, 30, 255, 0.829);\n  }\n"]))),k=function(t){var e=t.onButtonGood,n=t.onButtonNeutral,o=t.onButtonBad,r=t.onShow,c=t.onHide;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{children:[Object(p.jsx)(B,{type:"button",onClick:e,onMouseDown:r,onMouseEnter:c,children:"Good"}),Object(p.jsx)(B,{type:"button",onClick:n,onMouseDown:r,onMouseEnter:c,children:"Neutral"}),Object(p.jsx)(B,{type:"button",onClick:o,onMouseDown:r,onMouseEnter:c,children:"Bad"})]})})},S=O.a.p(a||(a=Object(x.a)(["\nmargin:0;\n"]))),M=function(t){var e=t.message;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(S,{children:e})})},y=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={good:0,neutral:0,bad:0,vibilde:!1},t.show=function(){t.setState({visible:!0})},t.hide=function(){t.setState({visible:!1})},t.buttonGood=function(){t.setState((function(t){return{good:t.good+1}}))},t.buttonNeutral=function(){t.setState((function(t){return{neutral:t.neutral+1}}))},t.buttonBad=function(){t.setState((function(t){return{bad:t.bad+1}}))},t}return Object(j.a)(n,[{key:"render",value:function(){var t=this.state,e=t.visible,n=t.bad,o=t.good,r=t.neutral,c="".concat(Math.round(o/(o+n)*100).toFixed(0));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(m,{title:"Please leave feedback"}),Object(p.jsx)(k,{onButtonGood:this.buttonGood,onButtonNeutral:this.buttonNeutral,onButtonBad:this.buttonBad,onShow:this.show}),Object(p.jsx)(m,{title:"Statictics"}),e&&Object(p.jsx)(v,{good:o,neutral:r,bad:n,total:"".concat(o+r+n),positivePercentage:c}),!e&&Object(p.jsx)(M,{message:"No feedback given"})]})}}]),n}(i.Component);d.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.4fab1866.chunk.js.map