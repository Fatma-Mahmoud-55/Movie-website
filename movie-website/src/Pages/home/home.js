
import { react, useContext } from 'react';
import { languageContext } from '../../contexts/context';
const Home = () => {

   const { language, setLanguage } = useContext(languageContext)
   return (
      <>
         <h3>---Fatma --- Hello From Home</h3>
         <div>
            <button className='btn btn-success' onClick={() => (language) == 'en' ? setLanguage('ar') : setLanguage('en')}>change language</button>{` ${language}`}
         </div>

      </>

   );
}

export default Home