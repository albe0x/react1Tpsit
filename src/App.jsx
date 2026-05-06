import { useState } from 'react'

let studenti = [
  {
    id: "1",
    nome: "luca",
    cognome: "luca"
  },
  {
     id: "1",
    nome: "luca",
    cognome: "luca"
  },    
  {
    id: "1",
    nome: "luca",
    cognome: "luca"
  }
]

function App() {
  return (
    <div className='grid grid-cols-1 gap-2'>
      {
        studenti.map((s) => (
          <User userDataSended={s}/>
        ))
      }
    </div>
  )
}


function User({userDataSended}) {
  const[userData, setUserData] = useState(userDataSended)
  const[isEditing, setIsEditing] = useState(false)

  const edit = () => {
    /*
    if (isEditing){
      setUserData({
        id: {}
        nome: {}
        cognome: {}
      })
    }
    
    */
    setIsEditing(!isEditing)
  }

  const dele = () => {
    setUserData(false)
  }

  if (!userData){
    return (<div className='grid grid-cols-5 border border-e-blue-100'>no data</div>)
  }


  return (
    <div className='grid grid-cols-5 border border-e-blue-100' >
      {isEditing 
      ?
      <>      
        <input id='input1' className='p-2' defaultValue={userData.id}/>
        <input id='input2' className='p-2' defaultValue={userData.nome}/>
        <input id='input3' className='p-2' defaultValue={userData.cognome}/>
      </>
      :
      <>      
        <p className='p-2' >{userData.id}</p>
        <p className='p-2' >{userData.nome}</p>
        <p className='p-2' >{userData.cognome}</p>
      </>
      }
      <button onClick={edit}> Edit </button>
      <button onClick={dele}> Delete </button>
    </div>
  )
}

export default App
