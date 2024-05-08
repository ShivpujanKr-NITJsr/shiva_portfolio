import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import './contact.css';

import { FaPhoneAlt } from 'react-icons/fa';

// import { CgMail } from "react-icons/cg";

import { FaRegAddressCard } from 'react-icons/fa';

import { SiGmail } from 'react-icons/si';

import { FaLinkedinIn } from 'react-icons/fa';

import { FaGithub } from 'react-icons/fa';

const SERVICE_ID = 'service_4ubm7dj';
const TEMPLATE_ID = 'template_x908y14';
const USER_ID = 'y0k8zAJkZXsUrL0CD';

const Contact = () => {
  const [loading, setLoading] = useState(false);
 
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        setLoading(false);
        console.log(result.text);
        alert('Thank you. I will get back to you as soon as possible.');
      },
      (error) => {
        setLoading(false);
        console.log(error.text);
        alert('Something went wrong.');
      }
    );
    e.target.reset();
  };

  return (
    <section className='contact_us' id='Contact-page'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 offset-md-1'>
            <div className='contact_inner'>
              <div className='row'>
                <div className='col-md-10 contact-me-container'>
                  <div className='contact_form_inner'>
                    <div className='contact_field'>
                      <h3>Contact Me</h3>
                      <p>
                        Feel Free to contact Me any time. I will get back to you
                        as soon as I can!
                      </p>
                      <Form onSubmit={handleOnSubmit}>
                        <Form.Field>
                          <Input
                            type='text'
                            placeholder='Name'
                            name="from_name"
                            required
                            className='form-control'
                          />
                        </Form.Field>
                        <Form.Field>
                          <Input
                            type='email'
                            placeholder='Email'
                            name="from_email"
                            required
                            className='form-control'
                          />
                        </Form.Field>
                        <Form.Field>
                          <TextArea
                            placeholder='Message'
                            name="message"
                            required
                            style={{ marginBottom: '10px' }}
                            className='form-control msg-text-area'
                          />
                        </Form.Field>
                        <Button
                          type='submit'
                          color='green'
                          className={
                            loading ? 'loading' : 'contact_form_submit'
                          }
                        >
                          Send
                        </Button>
                      </Form>
                      
                    </div>
                    <Button
                          className="copyright-in-contact-footer"
                        >
                          Copyright © 2024 SK
                        </Button>
                  </div>
                </div>
                <div className='col-md-2'>
                  <div className='right_conatct_social_icon d-flex align-items-end'>
                    <div className='socil_item_inner d-flex'>
                      <li>
                        <a
                          href='https://www.linkedin.com/in/shivpujan-kumar-008003198/'
                          style={{ color: 'white' }}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <i>
                            <FaLinkedinIn  />
                          </i>
                        </a>
                      </li>
                      <li>
                        <a
                          href='https://github.com/ShivpujanKr-NITJsr'
                          style={{ color: 'white' }}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <i>
                            <FaGithub />
                          </i>
                        </a>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              <div className='contact_info_sec'>
                <h4>Contact Info</h4>
                <div className='d-flex info_single align-items-center phone-no-contains'>
                  
                  <span>
                    <FaPhoneAlt />
                    +91 6204783696
                  </span>
                </div>
                <div className='d-flex info_single email-containers-li align-items-center '>
                  
                  <span className='span-email'>
                    <SiGmail /> sahil.8228053857@gmail.com
                  </span>
                </div>
                <div className='d-flex info_single align-items-center location-cotains'>
                 
                  <span>
                    {' '}
                    <FaRegAddressCard style={{ marginRight: '5px' }} />
                    Kolkata,West Bengal (India)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading && (
        <div className='Loader-overlay'>
          <div className='Loader'></div>
        </div>
      )}
    </section>
  );
};

export default Contact;
