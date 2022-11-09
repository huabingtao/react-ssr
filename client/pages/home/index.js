import React, { useEffect, useState } from 'react'


export default function Home() {
  const [demo1,setDemo1] = useState()
  const [demo2Component, setDemo2Component] = useState()
  const dynamicLodash = () => {
    return import( /* webpackChunkName: "lodash" */ 'lodash').then(({default: _}) => {
      return _.join(['hello','lodash'])
    })
  }
  const testDemo1 = () => {
    dynamicLodash().then(com=>{
      setDemo1(com)
    })
  }
  useEffect(()=>{
    testDemo1()
  },[])
  return (
    <div>
      <h2>Home</h2>
      <div>{demo1}</div>
      <div>
        <button onClick={()=>{
          import( /* webpackPrefetch: true */ '../../components/PrefetchModel.js').then(res=>{
            const Comp = res.default
            setDemo2Component(<Comp />)
          })
        }}>PrefectButton</button>
      </div>
      <div>
        {demo2Component}
      </div>
    </div>
  );
}