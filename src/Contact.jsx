import React, { useState } from 'react';

const Contact = ()=> {
  const [data, setData] = useState({
    fullname : '',
    email : '',
    phone : '',
    msg : '',
  });

  const inputEvent = (e)=> {
    const {name, value} = e.target;

    setData((preval)=> {
      return {
        ...preval,
        [name] : value,
      }
    });
  };

  const submitData = (e)=> {
    e.preventDefault();
    alert(` hello! ${data.fullname}, You Submited the form succesfully`);
  };

  return (
    <>
      <div className='my-3'>
        <h1 className='text-center'>Contact US</h1>
      </div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={submitData} className='top'>
              <div className='mb-3'>
                <label for='exampleFormControlInput1' className='form-label'>
                  Full Name
                </label>
                <input
                  type='name'
                  className='form-control'
                  id='exampleFormControlInput1'
                  name='fullname'
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder='Enter your name'
                />
              </div>
              <div className='mb-3'>
                <label for='exampleFormControlInput1' className='form-label'>
                  Phone 
                </label>
                <input
                  type='number'
                  className='form-control'
                  id='exampleFormControlInput1'
                  name='phone'
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder='mobile number'
                />
              </div>
              <div className='mb-3'>
                <label for='exampleFormControlInput1' className='form-label'>
                  Email address
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='exampleFormControlInput1'
                  name='email'
                  value={data.email}
                  onChange={inputEvent}
                  placeholder='name@example.com'
                />
              </div>
              <div className='mb-3'>
                <label for='exampleFormControlInput1' className='form-label'>
                  Message
                </label>
                <textarea
                  className='form-control'
                  id='exampleFormControlInput1'
                  rows='3'
                  name='msg'
                  value={data.msg}
                  onChange={inputEvent}
                ></textarea>
              </div>
              <div className='col-12'>
                <button className='btn btn-outline-primary' type='submit'>Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;