import React from 'react'
import Level from './Components/Level';


function App({level}) {
  return (
    <div className="App">
        {
          level !== 11 ? <Level /> : <div> Congratulations you are a genius</div>
         /* (() => {

            if (level <=10 ){
              return <Level />
            }
            
            else if (level >= 11) {
              return <p> Congratulations you are a genius</p>
            } 

          })()   */
           
        }

    </div>
  )
}
export default App