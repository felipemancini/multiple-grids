import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import RGL, { WidthProvider } from 'react-grid-layout'
import logo from './logo.svg'
import './App.css'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

const ReactGridLayout = WidthProvider(RGL)
const originalLayout = getFromLS('layout') || []

class App extends Component {
  static defaultProps = {
    className: "layout",
    cols: 12,
    rowHeight: 30,
    onLayoutChange: function() {},
  }

  constructor(props) {
    super(props)

    // this.state = {
    //   layout: JSON.parse(JSON.stringify(originalLayout))
    // }
  }

  resetLayout = () => {
    this.setState({
      layout: []
    })
  }

  onLayoutChange = (layout) => {
    console.log(layout)
    /*eslint no-console: 0*/
    // saveToLS('layout', layout)
    // this.setState({layout})
    // this.props.onLayoutChange(layout) // updates status display
  }

  dragStart = (event) => {
    event.dataTransfer.setData('text', event.target.id)
  }

  allowDrop = (event) => {
    event.preventDefault()
  }

  drop = (event) => {
    event.preventDefault()
    var data = event.dataTransfer.getData('text')
    event.target.appendChild(document.getElementById(data))
  }

  render() {
    return (
      <div>
        {/*<button onClick={this.resetLayout}>Reset Layout</button>*/}
        <div key={1} onDrop={this.drop} onDragOver={this.allowDrop}>
          <ReactGridLayout
            preventCollision={true}
              {...this.props}
              onLayoutChange={this.onLayoutChange}>
            <div id='1' key="1"
              onDragStart={this.dragStart} draggable='true' data-grid={{w: 2, h: 3, x: 0, y: 0}}>
              <span className="text">1</span>
            </div>
            <div id='2' key="2"
              onDragStart={this.dragStart} draggable='true' data-grid={{w: 2, h: 3, x: 2, y: 0}}>
              <span className="text">2</span>
            </div>
            <div id='3' key="3"
              onDragStart={this.dragStart} draggable='true' data-grid={{w: 2, h: 3, x: 4, y: 0}}>
              <span className="text">3</span>
            </div>
            <div id='4' key="4"
              onDragStart={this.dragStart} draggable='true' data-grid={{w: 2, h: 3, x: 6, y: 0}}>
              <span className="text">4</span>
            </div>
            <div id='5' key="5"
              onDragStart={this.dragStart} draggable='true' data-grid={{w: 2, h: 3, x: 8, y: 0}}>
              <span className="text">5</span>
            </div>
          </ReactGridLayout>
        </div>
        <div key={2} onDrop={this.drop} onDragOver={this.allowDrop}>
          <ReactGridLayout
            preventCollision={true}
              ref="rgl"
              {...this.props}
              onLayoutChange={this.onLayoutChange}>
            <div id='6' key="6"
              onDragStart={this.dragStart} draggable='true' data-grid={{w: 2, h: 3, x: 0, y: 0}}>
              <span className="text">6</span>
            </div>
            <div id='7' key="7"
              onDragStart={this.dragStart} draggable='true' data-grid={{w: 2, h: 3, x: 2, y: 0}}>
              <span className="text">7</span>
            </div>
            <div id='8' key="8"
              onDragStart={this.dragStart} draggable='true' data-grid={{w: 2, h: 3, x: 4, y: 0}}>
              <span className="text">8</span>
            </div>
            <div id='9' key="9"
              onDragStart={this.dragStart} draggable='true' data-grid={{w: 2, h: 3, x: 6, y: 0}}>
              <span className="text">9</span>
            </div>
            <div id='10' key="10"
              onDragStart={this.dragStart} draggable='true' data-grid={{w: 2, h: 3, x: 8, y: 0}}>
              <span className="text">10</span>
            </div>
          </ReactGridLayout>
        </div>
      </div>

    )
  }
}

function getFromLS(key) {
  let ls = {}
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem('rgl-7')) || {}
    } catch(e) {/*Ignore*/}
  }
  return ls[key]
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem('rgl-7', JSON.stringify({
      [key]: value
    }))
  }
}

export default App
