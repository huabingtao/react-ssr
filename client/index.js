import React from 'react';
import { render } from 'react-dom';
import './index.less'

function App() {
    return <div>
      <h1>Hello React</h1>
      <div className='fontsize'>fontSize</div>
    </div>
}

render(<App/>, document.getElementById('app'));