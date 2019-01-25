import React, { Component } from 'react'
import JSMpeg from 'jsmpeg-player'

class App extends Component {
  componentDidMount(){
    new JSMpeg.VideoElement('#App', 'http://localhost:8082')
  }
  render() {
    return (
      <div id="App">
      </div>
    )
  }
}

export default App
