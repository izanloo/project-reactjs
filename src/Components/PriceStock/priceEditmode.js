import React, { Component, useState } from "react";
import EasyEdit from "react-easy-edit";
export default function PriceEditmode(props) {
  const [data, setdata] = useState(props.data);
  const save = (value) => {
    let newdata = {};
    newdata = {
      price: value,
      id: data.id,
      name: data.name,
      category:data.category,
      count: data.count,
      description: data.description,
      images: data.images,
      image: data.image,
      createdAt: data.createdAt

    };
props.changeprice(props.id,newdata)
    console.log(newdata);
  };

  const cancel = () => {
    console.log("cancel");
  };

  return (
    <>
      {/* {console.log(props.data)} */}
      <EasyEdit
        type="text"
        value={props.value}
        onSave={save}
        onCancel={cancel}
        saveButtonLabel="Save "
        cancelButtonLabel="Cancel "
        attributes={{ name: "awesome-input", id: 1 }}
      />
    </>
  );
}
