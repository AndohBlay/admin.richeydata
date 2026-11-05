import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
class EB extends React.Component{state={e:false};static getDerivedStateFromError(){return{e:true}}render(){return this.state.e?<div style={{padding:40,textAlign:'center',fontFamily:'system-ui'}}><h2>Something went wrong</h2><p>Please reload the page. Your data is safe.</p><button onClick={()=>location.reload()}>Reload</button></div>:this.props.children}}
createRoot(document.getElementById('root')).render(<EB><App/></EB>)
