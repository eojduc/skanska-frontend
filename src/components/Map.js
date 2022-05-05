import {Document} from 'react-pdf';
const Map = () => {

  return (
      <Document file='./dumy.pdf' options={{workerSrc: "pdf.worker.js"}} />
  );  
}


export default Map;
