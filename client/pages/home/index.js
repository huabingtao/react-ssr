import React, {useEffect,useState} from 'react'

export default function Home() {
  const [demo1,setDemo1] = useState()
  const dynamicLodash = () => {
    return import('lodash').then(({default: _}) => {
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
    </div>
  );
}