import React, {Component} from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css"
import "./index.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faCompress}  from '@fortawesome/free-solid-svg-icons'
import  {faCompressAlt}  from '@fortawesome/free-solid-svg-icons'
import  {faFreeCodeCamp}  from '@fortawesome/free-brands-svg-icons'
import {marked} from 'marked';




class Prev extends Component{
    constructor(props){
        super(props);
        this.state={
            height : 200,
            overflow : "scroll",
            logoElement : <FontAwesomeIcon icon= {faCompress} />,
            displayPreview : "d-block",
            displayEditor : "d-block",
            text: "# Welcome to my React Markdown Previewer! \n ## This is a sub-heading... \n ### And here's some other cool stuff: \n Heres some code, `<div></div>`, between 2 backticks. \n ``` \n // this is multi-line code: \n function anotherExample(firstLine, lastLine) \n  if (firstLine == '```' && lastLine == '```') { \n    return multiLineCode; \n }} \n ``` \n You can also make text **bold**... whoa! \n Or _italic_. \n Or... wait for it... **_both!_** \n And feel free to go crazy ~~crossing stuff out~~. \n There's also [links](https://www.freecodecamp.org), and \n > Block Quotes! \n- And of course there are lists. \n - Some are bulleted. \n    - With different indentation levels. \n       - That look like this. \n 1. And there are numbered lists too \n 1. Use just 1s if you want! \n 1. And last but not least, let's not forget embedded images: \n ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg) \n And if you want to get really crazy, even tables: \n Wild Header | Crazy Header | Another Header \n ------------ | ------------- | ------------- \n Your content can | be here, and it | can be here.... \n And here. | Okay. | I think we get it."
        }
        this.handleClickEditor=this.handleClickEditor.bind(this);
        this.handleClickPreview=this.handleClickPreview.bind(this);   
        this.handleWriting=this.handleWriting.bind(this);
    }
    handleClickEditor(){
        (this.state.height== 200) ? this.setState({height : 1000, overflow: "hidden", logoElement: <FontAwesomeIcon icon= {faCompressAlt} />, displayPreview: "d-none"}): this.setState({height : 200, overflow:"scroll", logoElement : <FontAwesomeIcon icon= {faCompress} />, displayPreview : "d-block"})
   
    }
    handleClickPreview(){
        (this.state.displayEditor== "d-block") ? this.setState({logoElement: <FontAwesomeIcon icon= {faCompressAlt} />, displayEditor: "d-none"}): this.setState({ logoElement : <FontAwesomeIcon icon= {faCompress} />, displayEditor : "d-block"})
    }
    handleWriting(event){
        this.setState({text: event.target.value})
       
    }
    
    
    render(){
        marked.setOptions(
        {breaks:true})
        
       
        return(
            
            <div className="container">
                
                
                <div className={"container1 "+this.state.displayEditor} style={{position: "relative", width: 550 }}>
            
                    <nav id="navbar-example2" className="navbar navbar-light">
                        <span><FontAwesomeIcon icon= {faFreeCodeCamp}/>  Editor</span>
                        <button onClick={this.handleClickEditor}>{this.state.logoElement}</button>
                    </nav>
                    
                    <textarea id="editor" rows="3" data-spy="scroll" data-target="#navbar-example2" data-offset="0" className=" form-control content" style={{height: this.state.height, overflow: this.state.overflow}} onChange={this.handleWriting} value={this.state.text}>
                    </textarea>
                    
                      
                      
                    
                </div>
            
                <div className={"container1 "+this.state.displayPreview} style={{position: "relative", width: 850, }}>
            
                    <nav id="navbar-example2" className="navbar navbar-light">
                        <span><FontAwesomeIcon icon= {faFreeCodeCamp}/>  Previewer</span>
                         
                        <button onClick={this.handleClickPreview}>{this.state.logoElement}</button>
                    </nav>
                    
                    <div id="preview" data-spy="scroll" data-target="#navbar-example2" data-offset="0" className="content" dangerouslySetInnerHTML={{
  __html : marked(this.state.text),}}>

                    </div>   
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Prev/>, document.getElementById("root"));