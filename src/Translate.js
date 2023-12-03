import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Translates = () => {
    useEffect(() => {
        
        // Create the script for initializing Google Translate
        const initScript = document.createElement('script');
        initScript.innerHTML = `
          function googleTranslateElementInit() {
            new google.translate.TranslateElement(
              { pageLanguage: 'en' },
              'google_translate_element'
            );
          }
        `;
    
        // Append the initialization script to the document's head
        document.head.appendChild(initScript);
    
        // Cleanup: Remove the initialization script when the component unmounts
        return () => {
          document.head.removeChild(initScript);
        };
      }, []);
      

  return (
    <div>
        <Helmet>
        <script
          type="text/javascript"
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          async
          defer
        ></script>
      </Helmet>
      {/* The div where the Google Translate widget will be displayed */}
      <div id="google_translate_element" style={{backgroundColor:'transparent'}} className='trs'></div>
    </div>
  );
};

export default Translates;
