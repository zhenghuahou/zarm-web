(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{118:function(n,e,t){"use strict";t.r(e);var i=t(24),s=t.n(i),r=t(20),o=t.n(r),l=t(21),a=t.n(l),c=t(22),u=t.n(c),h=t(23),d=t.n(h),m=t(182),p=(t(180),t(234),t(310),t(198),t(185),function(n){function e(){return o()(this,e),u()(this,(e.__proto__||s()(e)).apply(this,arguments))}return d()(e,n),a()(e,[{key:"document",value:function(){return t(313)}}]),e}(m.a));e.default=p},180:function(n,e,t){"use strict";t(72)},182:function(n,e,t){"use strict";var i=t(183),s=t.n(i),r=t(188),o=t.n(r),l=t(189),a=t.n(l),c=t(190),u=t.n(c),h=t(24),d=t.n(h),m=t(20),p=t.n(m),f=t(21),v=t.n(f),b=t(22),w=t.n(b),g=t(23),A=t.n(g),y=t(0),C=t.n(y),k=t(48),E=t.n(k),B=t(181),V=t.n(B),_=t(191),N=t.n(_),S=t(186),M=t.n(S),L=t(25),I=t.n(L),x=t(192),D=t(1),T=t.n(D),j=t(187),O=t.n(j),R=(t(193),t(194),t(195),t(196),t(197),function(n){function e(){return p()(this,e),w()(this,(e.__proto__||d()(e)).apply(this,arguments))}return A()(e,n),v()(e,[{key:"componentDidMount",value:function(){var n=this,e=this.props,t=e.onChange,i=e.value;this.cm=O()(this.editor,{mode:"jsx",theme:"react",keyMap:"sublime",viewportMargin:1/0,lineNumbers:!1,dragDrop:!1}),this.cm.setValue(i),this.cm.on("changes",function(e){t&&(clearTimeout(n.timeout),n.timeout=setTimeout(function(){t(e.getValue())},300))})}},{key:"render",value:function(){var n=this;return C.a.createElement("div",{className:"editor",ref:function(e){n.editor=e}})}}]),e}(y.Component)),U=R;R.propTypes={onChange:T.a.func,value:T.a.string},R.defaultProps={onChange:function(){},value:""};var H=function(n){function e(n){p()(this,e);var t=w()(this,(e.__proto__||d()(e)).call(this,n));return t.playerElem=null,t.playerId=""+parseInt(1e9*Math.random(),10).toString(36),t.document=t.props.children.match(/([^]*)\n?(```[^]+```)/),t.description=V()(t.document[1]),t.source=t.document[2].match(/```(.*)\n?([^]+)```/),t.state={showBlock:!1},t.blockControl=t.blockControl.bind(t),t}return A()(e,n),v()(e,[{key:"componentDidMount",value:function(){this.renderSource(this.source[2])}},{key:"componentWillUnmount",value:function(){this.playerElem&&E.a.unmountComponentAtNode(this.playerElem)}},{key:"blockControl",value:function(){this.setState({showBlock:!this.state.showBlock})}},{key:"renderSource",value:function(n){var e=this;Promise.all([t.e(49),t.e(3),t.e(47)]).then(t.bind(null,399)).then(function(n){var t=["context","React","ReactDOM"],i=[e,C.a,E.a];return I()(n).forEach(function(e){t.push(e),i.push(n[e])}),{args:t,argv:i}}).then(function(t){var i=t.args,s=t.argv,r=Object(x.transform)("\n        class Demo extends React.Component {\n          "+n+"\n        }\n\n        if(!window.playerList){\n            window.playerList = [];\n        }\n        const container = document.getElementById('"+e.playerId+"');\n        window.playerList.push(container);\n\n        ReactDOM.render(<Demo {...context.props} />, container)\n      ",{presets:["es2015","react"]}).code;i.push(r),(new(Function.prototype.bind.apply(Function,[null].concat(M()(i))))).apply(void 0,M()(s)),e.source[2]=n}).catch(function(n){0})}},{key:"render",value:function(){var n=this;return C.a.createElement("div",{className:"demo-block demo-box demo-"+this.props.name},C.a.createElement("div",{className:"source",id:this.playerId,ref:function(e){n.playerElem=e}}),this.state.showBlock&&C.a.createElement("div",{className:"meta"},this.description&&C.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:this.description}}),C.a.createElement(U,{value:this.source[2],onChange:function(e){return n.renderSource(e)}})),C.a.createElement("div",{className:"demo-block-control",onClick:this.blockControl},this.state.showBlock?C.a.createElement("span",null,C.a.createElement("i",{className:"el-icon-caret-top"}),"隐藏"):C.a.createElement("span",null,C.a.createElement("i",{className:"el-icon-caret-bottom"}),"展开")))}}]),e}(C.a.Component),F=function(n){function e(n){p()(this,e);var t=w()(this,(e.__proto__||d()(e)).call(this,n));return t.divList=[],t.components=new u.a,t.renderer=new V.a.Renderer,t.renderer.table=function(n,e){return'<table class="grid"><thead>'+n+"</thead><tbody>"+e+"</tbody></table>"},t}return A()(e,n),v()(e,[{key:"componentDidMount",value:function(){this.renderDOM()}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){this.divList.forEach(function(n){E.a.unmountComponentAtNode(n),n.parentNode.removeChild(n)}),this.divList=[]}},{key:"renderDOM",value:function(){var n=!0,e=!1,t=void 0;try{for(var i,s=o()(this.components);!(n=(i=s.next()).done);n=!0){var r=i.value,l=a()(r,2),c=l[0],u=l[1],h=document.getElementById(c);this.divList.push(h),h instanceof HTMLElement&&E.a.render(u,h)}}catch(n){e=!0,t=n}finally{try{!n&&s.return&&s.return()}finally{if(e)throw t}}N.a.highlightAll()}},{key:"render",value:function(){var n=this,e=this.document(localStorage.getItem("ELEMENT_LANGUAGE")||"zh-CN");if("string"==typeof e){this.components.clear();var t=V()(e.replace(/:::\s?demo\s?([^]+?):::/g,function(e,t,i){var r=i.toString(36);return n.components.set(r,C.a.createElement(H,s()({name:n.constructor.name.toLowerCase()},n.props),t)),"<div id="+r+"></div>"}),{renderer:this.renderer});return C.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})}return C.a.createElement("span",null)}}]),e}(C.a.Component);e.a=F},185:function(n,e,t){"use strict";t(180),t(199)},198:function(n,e,t){"use strict";t(180),t(185),t(203)},234:function(n,e,t){"use strict";t(180),t(235)},235:function(n,e,t){},310:function(n,e,t){},313:function(n,e){n.exports="## Alert 警告框\n\n用于展示重要的提示信息。\n\n### 基本用法\n\n弹窗形式，默认有一个关闭按钮。\n\n::: demo Alert 组件提供四种主题，由`theme`属性指定，默认值为`info`。通过`message`属性设置显示文本，默认带icon。\n```js\n  constructor(props) {\n    super(props);\n    this.state = {\n      alertVisible: false,\n    };\n    this.showAlert = this.showAlert.bind(this);\n    this.hideAlert = this.hideAlert.bind(this);\n  }\n\n  showAlert() {\n    this.setState({\n      alertVisible: true,\n    });\n  }\n\n  hideAlert() {\n    this.setState({\n      alertVisible: false,\n    });\n  }\n\n  render() {\n    const { alertVisible } = this.state;\n    return (\n      <div>\n        <Button theme=\"warning\" onClick={this.showAlert}>警告</Button>\n        <Alert\n          visible={alertVisible}\n          theme=\"warning\"\n          onClose={this.hideAlert}\n          message='这是一个警告框'\n        />\n      </div>\n    );\n  }\n```\n:::\n\n### 自定义关闭按钮\n\n自定义关闭按钮的几种用法。\n\n::: demo 可以设置是否可关闭，关闭按钮的文本以及关闭时的回调函数。`closable`属性决定是否可关闭，默认为`true`。另外可以设置`closeText`来替代默认的'关闭'文本。设置`onClose`事件来设置关闭时的回调，通过`visible`属性来控制弹窗的显示和隐藏。\n```js\n  constructor(props) {\n    super(props);\n    this.state = {\n      alertAVisible: false,\n      alertBVisible: false,\n      alertCVisible: false,\n    };\n  }\n\n  showAlert(which) {\n    this.setState({\n      [`alert${which}Visible`]: true,\n    });\n  }\n\n  hideAlert(which) {\n    this.setState({\n      [`alert${which}Visible`]: false,\n    });\n  }\n\n  render() {\n    const { alertAVisible, alertBVisible, alertCVisible } = this.state;\n    return (\n      <div>\n        <Button theme=\"warning\" onClick={() => this.showAlert('A')}>不可关闭</Button>\n        <Button theme=\"success\" onClick={() => this.showAlert('B')}>自定义按钮文本</Button>\n        <Button theme=\"error\" onClick={() => this.showAlert('C')}>回调演示</Button>\n        <Alert\n          visible={alertAVisible}\n          theme=\"warning\"\n          closable={false}\n          message='不可关闭警告框'\n        />\n        <Alert\n          visible={alertBVisible}\n          theme=\"success\"\n          onClose={() => this.hideAlert('B')}\n          message='自定义按钮文本'\n          closeText=\"知道了\"\n        />\n        <Alert\n          visible={alertCVisible}\n          theme=\"warning\"\n          onClose={() => {\n            this.hideAlert('C');\n            this.showAlert('B');\n          }}\n          message='这是回调演示'\n        />\n      </div>\n    );\n  }\n```\n:::\n\n### 隐藏 icon\n\n根据业务需要可隐藏表示状态的icon。\n\n::: demo 通过设置`hideIcon`属性来隐藏 icon。\n```js\n  constructor(props) {\n    super(props);\n    this.state = {\n      alertVisible: false,\n    };\n    this.showAlert = this.showAlert.bind(this);\n    this.hideAlert = this.hideAlert.bind(this);\n  }\n\n  showAlert() {\n    this.setState({\n      alertVisible: true,\n    });\n  }\n\n  hideAlert() {\n    this.setState({\n      alertVisible: false,\n    });\n  }\n\n  render() {\n    const { alertVisible } = this.state;\n    return (\n      <div>\n        <Button theme=\"info\" onClick={this.showAlert}>隐藏icon</Button>\n        <Alert\n          visible={alertVisible}\n          theme=\"info\"\n          onClose={this.hideAlert}\n          message='隐藏icon演示'\n          hideIcon\n        />\n      </div>\n    );\n  }\n```\n:::\n\n###  命令式方式调用\n\n根据业务需要添加命令式调用\n\n::: demo 通过调用`Alert.show(object)`来显示Alert。\n```js\n  render() {\n    return (\n      <div>\n        <Button theme=\"success\" onClick={()=>{\n          Alert.show({\n            message:'测试',\n            theme:'success',\n            closeText:'取消'\n          })\n        }}>命令式调用</Button>\n      </div>\n    );\n  }\n```\n:::\n\n\n### Attributes\n| 参数      | 说明          | 类型      | 可选值                           | 默认值  |\n|---------- |-------------- |---------- |--------------------------------  |-------- |\n| message | 内容文本 | string | — | '' |\n| theme | 主题 | string | success/warning/info/error | info |\n| width | 弹窗宽度 | number | — | 270 |\n| className | 弹窗类名 | string | — | '' |\n| closable | 是否可关闭 | boolean | — | true |\n| closeText | 关闭按钮自定义文本 | string | — | — |\n| hideIcon | 是否隐藏图标 | boolean | — | false |\n\n\n### Events\n| 事件名称 | 说明 | 回调参数 |\n|---------- |-------- |---------- |\n| onClose | 关闭alert时触发的事件 | — |\n"}}]);