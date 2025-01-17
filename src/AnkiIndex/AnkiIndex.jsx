import React ,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import { Input, Button } from 'antd';
const { TextArea } = Input;
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import ThemeGreen from './ThemeGreen.jsx';
import ThemeBlackWhite from './ThemeBlackWhite.jsx';

import showdown from 'showdown';

class AnkiIndex extends React.Component{
  constructor(props){
    super(props);
    this.inputRef = React.createRef();
    this.state={
      md_text: "",
      html_text: "",
      current_key: "theme-green",
    }

    this.handleMdText = this.handleMdText.bind(this);
    this.tabCallback = this.tabCallback.bind(this);
  }

  handleMdText(e){

    let converter = new showdown.Converter();
    let md_text = e.target.value;
    let html_text = converter.makeHtml(md_text);

    this.setState({
      html_text
    })

    this.setState({
      md_text
    })
  }

  tabCallback(key){
    this.setState({
      current_key: key
    })
    console.log(key);
  }




  componentDidMount(){
    this.inputRef.current.focus();
  }


  render(){
    return(
    <div className="index">
      <div style={{color :"#009689",textAlign: "center"}}>
        <div style={{fontSize: "calc(30rem / 1400)", padding: "calc(30rem / 1400)"}}>
          Markdown转换Anki可用的Html
        </div>

      </div>
          <Tabs defaultActiveKey="theme-green" onChange={this.tabCallback} style={{width: "100%"}}>
            <TabPane tab="绿色主题" key="theme-green">
              <ThemeGreen
              html_text={this.state.html_text}
              />
            </TabPane>

            <TabPane tab="黑白主题" key="theme-black-white">
              <ThemeBlackWhite
              html_text={this.state.html_text}
              />
            </TabPane>
          </Tabs>
          <div style={{height: "300px"}}></div>
          <hr style={{border: "1px solid #00968A"}}/>
          <TextArea rows={10} ref={this.inputRef}  placeholder="请在这里输入markdown语法的内容" value={this.state.md_text} onChange={this.handleMdText} style={{width: "100%", position: "fixed",width: "100%", bottom: "0", height: 300}}/>

    </div>)
  }
}

export default AnkiIndex;


