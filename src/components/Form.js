import { useState } from 'react';
import db from '../utils/request';

const Form = () => {
  const [delivery, setDelivery] = useState({});
  const handleChange = (data, field) => {
    setDelivery({
      ...delivery,
      [field]: data
    });
  }
  const submitForm = (event) => {
    event.preventDefault();
    for (const field in delivery) {
      if (delivery[field] === '') delivery[field] = null;
    }
    console.log(delivery);
    db.post(delivery).then(() => {
      setDelivery({});
      alert('Your delivery has been saved.');
    });

    window.scrollTo(0, 0);
  }
  return (
    <form onSubmit={submitForm} style={{textAlign: 'center'}}>
      Start*: <br/> <input type='datetime-local' value={delivery.start || ''} onChange={x => handleChange(x.target.value, 'start')} required /><br/>
      End*: <br/> <input type='datetime-local' value={delivery.end || ''} onChange={x => handleChange(x.target.value, 'end')} required /><br/>
      Company*: <br/> <input type='text' value={delivery.company || ''} onChange={x => handleChange(x.target.value, 'company')} required /><br/>
      Description*: <br/> <textarea value={delivery.description || ''} onChange={x => handleChange(x.target.value, 'description')} required /><br/>
      Gate*: <br/> <input type='number' value={delivery.gate || ''} onChange={x => handleChange(x.target.value, 'gate')} required /><br/>
      Contact Name*: <br/> <input type='text' value={delivery.contactName || ''} onChange={x => handleChange(x.target.value, 'contactName')} required /><br/>
      Contact Number*: <br/> <input type='tel' value={delivery.contactNumber || ''} onChange={x => handleChange(x.target.value, 'contactNumber')} required /><br/>
      Location*: <br/> <input type='text' value={delivery.location || ''} onChange={x => handleChange(x.target.value, 'location')} required /><br/>
      Scheduler Name: <br/> <input type='text' value={delivery.schedName || ''} onChange={x => handleChange(x.target.value, 'schedName')} /><br/>
      Scheduler Number: <br/> <input type='tel' value={delivery.schedNumber || ''} onChange={x => handleChange(x.target.value, 'schedNumber')} /><br/>
      Supplier: <br/> <input type='text' value={delivery.supplier || ''} onChange={x => handleChange(x.target.value, 'supplier')} /><br/>
      Hoist Method: <br/> <input type='text' value={delivery.hoistMethod || ''} onChange={x => handleChange(x.target.value, 'hoistMethod')} /><br/>
      Number of Trucks: <br/> <input type='number' value={delivery.trucks || ''} onChange={x => handleChange(x.target.value, 'trucks')} /><br/>
      Extra Notes: <br/> <textarea value={delivery.notes || ''} onChange={x => handleChange(x.target.value, 'notes')} /><br/>
      <input type="submit" value="Submit Form" />
    </form>
  )
}
export default Form;