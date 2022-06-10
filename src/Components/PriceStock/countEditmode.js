import React, { Component , useState} from 'react';
import EasyEdit from 'react-easy-edit';
export default function CountEditmode(props) {
    const [data, setdata] = useState(props.data)
    const save = (value) => {
      let newdata = {};
    newdata = {
      id: data.id,
      name: data.name,
      category: data.category,
      count: value,
      description: data.description,
      images: data.images,
      image: data.image,
      createdAt: data.createdAt

    };
      props.changecount(props.id,newdata)
    }
  

  const cancel = () => {alert("Cancelled")}
  
  return (
    <EasyEdit
      type="text"
      value={props.value}
      onSave={save}
      onCancel={cancel}
      saveButtonLabel="Save "
      cancelButtonLabel="Cancel "
      attributes={{ name: "awesome-input", id: 1}}
    />
  );
}