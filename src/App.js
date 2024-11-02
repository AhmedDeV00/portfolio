import "./index.css"
import Contact from './components/4-contact/Contact';
import Header from './components/1-header/Header';
import Hero from './components/2-hero/Hero';
import Main from './components/3-main/Main';
import Footer from './components/5-footer/Footer';
import { useEffect,useState } from 'react';

function App() {
  useEffect(()=> {

    window.addEventListener("scroll",() => {
      if (window.scrollY > 300) {
        setschowScrollBtn(true)
      } else {
        setschowScrollBtn(false)

      }
    })
  }, [])

  const [schowScrollBtn, setschowScrollBtn] = useState(false)
  return (
    <div id='up' className='container'>
      < Header />
      < Hero />
      <div className='divider' />
      <Main />
      <div className='divider' />
      <Contact />
      <div className='divider' />
      <Footer />
        <a style={{opacity: schowScrollBtn ? 1 : 0 , transition: "1s"}} href='#up'>
        <button className='scroll2Top'>
          <img src='./up-arrow.png' alt='' />
        </button>
        </a>
    </div>
  );
}


export default App;
