(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{17:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var o,a,r,i,s=n(1),c=n.n(s),d=n(5),b=n.n(d),u=(n(16),n(17),n(6)),j=n(7),l=n(10),h=n(9),x=n(2),g=n(3),O=g.a.p(o||(o=Object(x.a)(["\nmargin:0;\n"]))),f=n(0),p=function(t){var e=t.good,n=t.neutral,o=t.bad,a=t.total,r=t.positivePercentage,i=void 0===r?"100":r;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{children:[Object(f.jsxs)(O,{children:["Good: ",e]}),Object(f.jsxs)(O,{children:["Neutral: ",n]}),Object(f.jsxs)(O,{children:["Bad: ",o]}),Object(f.jsxs)(O,{children:["Total: ",a]}),Object(f.jsxs)(O,{children:["Positive feedback: ",i,"%"]})]})})},v=g.a.h1(a||(a=Object(x.a)(["\nfont-size: 2em;"]))),w=function(t){var e=t.title;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(v,{children:e})})},m=g.a.button(r||(r=Object(x.a)(["\n  width: 90px;\n  border: solid 1px rgb(148, 146, 146);\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);\n  font-size: 15px;\n  font-weight: 700;\n  margin-right: 10px;\n  border-radius: 10px;\n  padding: 5px;\n  background: none;\n  cursor: pointer;\n\n  &:hover{\n    /* background-color: #165de08a; */\n    box-shadow: 0 0 20px rgba(5, 30, 255, 0.829);\n  }\n"]))),k=function(t){var e=t.onButtonGood,n=t.onButtonNeutral,o=t.onButtonBad,a=t.onShow,r=t.onHide;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{children:[Object(f.jsx)(m,{type:"button",onClick:e,onMouseDown:a,onMouseEnter:r,children:"Good"}),Object(f.jsx)(m,{type:"button",onClick:n,onMouseDown:a,onMouseEnter:r,children:"Neutral"}),Object(f.jsx)(m,{type:"button",onClick:o,onMouseDown:a,onMouseEnter:r,children:"Bad"})]})})},B=g.a.p(i||(i=Object(x.a)(["\nmargin:0;\n"]))),S=function(t){var e=t.message;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(B,{children:e})})},M=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={good:0,neutral:0,bad:0,vibilde:!1},t.show=function(){t.setState({visible:!0})},t.hide=function(){t.setState({visible:!1})},t.buttonGood=function(){t.setState((function(t){return{good:t.good+1}}))},t.buttonNeutral=function(){t.setState((function(t){return{neutral:t.neutral+1}}))},t.buttonBad=function(){t.setState((function(t){return{bad:t.bad+1}}))},t}return Object(j.a)(n,[{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(w,{title:"Please leave feedback"}),Object(f.jsx)(k,{onButtonGood:this.buttonGood,onButtonNeutral:this.buttonNeutral,onButtonBad:this.buttonBad,onShow:this.show}),Object(f.jsx)(w,{title:"Statictics"}),this.state.visible&&Object(f.jsx)(p,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:"".concat(this.state.good+this.state.neutral+this.state.bad),positivePercentage:"".concat(Math.round(this.state.good/(this.state.good+this.state.bad)*100).toFixed(0))}),!this.state.visible&&Object(f.jsx)(S,{message:"No feedback given"})]})}}]),n}(s.Component);var y=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(M,{})})};b.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(y,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.e5787c16.chunk.js.map