import React from 'react';


import Header from './Header/Header'
import Main from './Main/Main'
import Fotter from './Fotter/Fotter'


import './main-news.css'
import '../common/style/reset.css'


const App = () => {
  return (
<div className='App'>
  <Header/>
	<Main/>
	<Fotter/>
</div>
  )
}


export default App
