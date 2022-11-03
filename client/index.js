import React from 'react';
import { createRoot } from 'react-dom/client';
import './reset.less'
import './index.less'
import Live2D from  './assets/Live2D.png'

function App() {
    return <div>
      <h1>Hello React1</h1>
      <div className='fontsize'>fontSize</div>
      <img src={Live2D} width="200px"></img>
    </div>
}
createRoot(document.getElementById('app')).render(<App />)
// render(<App/>, document.getElementById('app'));