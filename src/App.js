import React from 'react'
import Level from './Components/Level';
import "./App.css"


function App({level}) {
  return (
    <div className="App">
        {
          level !== 11 ? <Level /> : <div> Congratulations you are a genius</div>
        //  (() => {

        //     if (level <=11 ){
        //       return <Level />
        //     }
            
        //     else return <p> Congratulations you are a genius</p>
 

        //   })()   
           
        }

    </div>
  )
}
export default App