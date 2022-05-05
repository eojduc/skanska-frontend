import { useState } from 'react';

const Delivery = ( {delivery, editMode, setDelivery} ) => {
  const dateFormat = (date) => {
    const d = new Date(date);
    if (d.toString() === 'Invalid Date') return null;
    return d.toLocaleString('en-US', {dateStyle: 'medium', timeStyle: 'short'});
  }
  if (!editMode) {
    return (
      <div>
        Start: {dateFormat(delivery.start) || 'N/A'} <br/>
        End: {dateFormat(delivery.end) || 'N/A'}<br/>
        Company: {delivery.company || 'N/A'}<br/>
        Description: {delivery.description || 'N/A'}<br/>
        Gate: {delivery.gate || 'N/A'}<br/>
        Contact Name: {delivery.contactName || 'N/A'}<br/>
        Contact Number: {delivery.contactNumber || 'N/A'}<br/>
        Location: {delivery.location || 'N/A'}<br/>
        Scheduler Name: {delivery.schedName || 'N/A'}<br/>
        Scheduler Number: {delivery.schedNumber || 'N/A'}<br/>
        Supplier: {delivery.supplier || 'N/A'}<br/>
        Hoist Method: {delivery.hoistMethod || 'N/A'}<br/>
        Number of Trucks: {delivery.trucks || 'N/A'}<br/>
        Extra Notes: {delivery.notes || 'N/A'}<br/>
      </div>
    );
  }
  else {
    return (
      <div>
        Start: <Input field='start' type='datetime-local' delivery={delivery} setDelivery={setDelivery} /><br/>
        End: <Input field='end' type='datetime-local' delivery={delivery} setDelivery={setDelivery} /><br/>
        Company: <Input field='company' type='text' delivery={delivery} setDelivery={setDelivery} /><br/>
        Description: <Input field='description' type='text' delivery={delivery} setDelivery={setDelivery} /><br/>
        Gate: <Input field='gate' type='number' delivery={delivery} setDelivery={setDelivery} /><br/>
        Contact Name: <Input field='contactName' type='text' delivery={delivery} setDelivery={setDelivery} /><br/>
        Contact Number: <Input field='contactNumber' type='tel' delivery={delivery} setDelivery={setDelivery} /><br/>
        Location: <Input field='location' type='text' delivery={delivery} setDelivery={setDelivery} /><br/>
        Scheduler Name: <Input field='schedName' type='text' delivery={delivery} setDelivery={setDelivery} /><br/>
        Scheduler Number: <Input field='schedNumber' type='tel' delivery={delivery} setDelivery={setDelivery} /><br/>
        Supplier: <Input field='supplier' type='text' delivery={delivery} setDelivery={setDelivery} /><br/>
        Hoist Method: <Input field='hoistMethod' type='text' delivery={delivery} setDelivery={setDelivery} /><br/>
        Number of Trucks: <Input field='trucks' type='number' delivery={delivery} setDelivery={setDelivery} /><br/>
        Extra Notes: <Input field='notes' type='text' delivery={delivery} setDelivery={setDelivery} /><br/>
      </div>
      
    );
  }

}
const Input = ( { field, type, delivery, setDelivery } ) => {
  const onChange = (data) => {
    setDelivery({
      ...delivery,
      [field]: data
    });
  }
  return(
    <input type={type} value={delivery[field] || ''} placeholder='N/A' onChange={x => onChange(x.target.value)} />
  )
}

export default Delivery;