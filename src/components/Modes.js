import Calendar from './Calendar';
import Map from './Map';
import Form from './Form';

const Modes = ({ mode, isAdmin }) => {
  if (mode === 'calendar') {
    return (
      <div className="u-custom-html-1">
        <Calendar canEdit={isAdmin} />
      </div>
    )
  } else if (mode === 'map') {
    return (
      <div className="u-custom-html-1">
        <Map />
      </div>
    )
  } else if (mode === 'form') {
    return (
      <Form />
    )
  } else {
    return (<h1>error</h1>)
  }
}

export default Modes;