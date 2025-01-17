import React ,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import { Input, Button } from 'antd';
const { TextArea } = Input;
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import copy from 'copy-to-clipboard';



let theme_green_style=`
    <style>
.green-md .markdown-here-wrapper {
  font-size: 16px;
  line-height: 1.8em;
  letter-spacing: 0.1em;
}

.green-md pre,
code {
  font-size: 14px;
  font-family: Roboto, 'Courier New', Consolas, Inconsolata, Courier, monospace;
  margin: auto 5px;
}

.green-md code {
  white-space: pre-wrap;
  border-radius: 2px;
  display: inline;
}

.green-md pre {
  font-size: 15px;
  line-height: 1.4em;
  display: block !important;
}

.green-md pre code {
  white-space: pre;
  overflow: auto;
  border-radius: 3px;
  padding: 1px 1px;
  display: block !important;
}

.green-md strong,
b {
  color: #BF360C;
}

.green-md em,
i {
  color: #009688;
}

.green-md hr {
  border: 1px solid #BF360C;
  margin: 1.5em auto;
}

.green-md p {
  margin: 1.5em 5px !important;
}

.green-md table,
pre,
dl,
blockquote,
q,
ul,
ol {
  margin: 10px 5px;
}

.green-md ul,
ol {
  padding-left: 15px;
}

.green-md li {
  margin: 10px;
}

.green-md li p {
  margin: 10px 0 !important;
}

.green-md ul ul,
ul ol,
ol ul,
ol ol {
  margin: 0;
  padding-left: 10px;
}

.green-md ul {
  list-style-type: circle;
}

.green-md dl {
  padding: 0;
}

.green-md dl dt {
  font-size: 1em;
  font-weight: bold;
  font-style: italic;
}

.green-md dl dd {
  margin: 0 0 10px;
  padding: 0 10px;
}

.green-md blockquote,
q {
  border-left: 2px solid #009688;
  padding: 0 10px;
  color: #777;
  quotes: none;
  margin-left: 1em;
}

.green-md blockquote::before,
.green-md blockquote::after,
.green-md q::before,
q::after {
  content: none;
}

.green-md h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 20px 0 10px;
  padding: 0;
  font-style: bold !important;
  color: #009688 !important;
  text-align: left;
  margin: 1.5em 5px !important;
  padding: 0.5em 1em !important;
}

.green-md h1 {
  font-size: 24px !important;
  border-bottom: 1px solid #ddd !important;
}

.green-md h2 {
  font-size: 20px !important;
  border-bottom: 1px solid #eee !important;
}

.green-md h3 {
  font-size: 18px;
}

.green-md h4 {
  font-size: 16px;
}


.green-md table {
  padding: 0;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1em;
  font: inherit;
  border: 0;
  margin: 0 auto;
}

.green-md tbody {
  margin: 0;
  padding: 0;
  border: 0;
}

.green-md table tr {
  border: 0;
  border-top: 1px solid #CCC;
  background-color: white;
  margin: 0;
  padding: 0;
}

.green-md table tr:nth-child(2n) {
  background-color: #F8F8F8;
}

.green-md table tr th,
table tr td {
  font-size: 16px;
  border: 1px solid #CCC;
  margin: 0;
  padding: 5px 10px;
}

.green-md table tr th {
  font-weight: bold;
  color: #eee;
  border: 1px solid #009688;
  background-color: #009688;
}

.green-md #area>table {
  width: 100%;
  table-layout: fixed;
}

.green-md #area table tr td {
  margin: 0;
  padding: 6px;
  border: 0;

}


.green-md #md-area {

  width: 100%;
  height: 600px;
  font-size: 18px;
  overflow: hidden;
  font-weight: bold;
  outline: none;
}

.green-md #show-area {
  height: 600px;
  background-color: #FCF6E5;
}

.green-md .clearfix:before {
  content: "";
  display: table;
}

body{
  text-align: left !important;
}

.green-md {
  text-align: left !important;
}
    </style>
    `;



class ThemeGreen extends React.Component{


  constructor(props){
    super(props);
    this.state={
      html_style:""
    }


    this.writeToClipboard = this.writeToClipboard.bind(this);
    this.updateHtmlStyle = this.updateHtmlStyle.bind(this);

  }
  writeToClipboard(){
    copy(this.state.html_style);
  }

  async componentWillReceiveProps(nextProps){
    console.log("nextprops::", nextProps);
    await this.setState({
      html_text: nextProps.html_text
    })
    await this.updateHtmlStyle();
  }


  async updateHtmlStyle(){
    let html_style = html_style =this.state.html_text+theme_green_style 
    await this.setState({
      html_style 
    })
  }

  async componentDidMount(){
    let html_style = html_style =this.props.html_text+theme_green_style 
    await this.setState({
      html_style 
    })
  }


  render(){

    return(
      <div id="theme-green">
        <Button type="primary" onClick={this.writeToClipboard} style={{position: "fixed", right: 0, top: 0}}>复制Html</Button>
        <Input value={this.state.html_style} id="my-html" ></Input>
        <div className="green-md" dangerouslySetInnerHTML={{__html:this.state.html_style}}></div>
      </div>
    )
  }
}

export default ThemeGreen;