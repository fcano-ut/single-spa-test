import "systemjs";
import React from 'react';
import ReactDOM from 'react-dom';
import { mountRootParcel } from 'single-spa';
import Parcel from 'single-spa-react/parcel';

const App = () => {
  const [parcelProps, setParcelProps] = React.useState({
    message: "I'm passing a prop on mount!",
  });

  React.useEffect(() => {
    window.setTimeout(() => {
      setParcelProps({
        message: "I'm updating props!"
      });
    }, 1000);
  }, []);

  return (
    <div>
      <h1>React Host</h1>
      <Parcel
        config={() => System.import('http://localhost:8080/test-react-microfrontend.js')}
        mountParcel={mountRootParcel}
        {...parcelProps}
      />
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));