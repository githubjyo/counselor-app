import React from 'react';
import "./Msgform.css"
export default function GetinTouchMsgform(){
  return (
    <>
        <section className="msgform-section py-5 text-white">
        <div className="overlay"></div>
        <div className="container position-relative">
          <h3 className="text-center mb-4">Send a Message & Get in touch!</h3>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form>
                <div className="row mb-3">
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </div>
                  <div className="col">
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                </div>
                <div className="mb-3">
                  <select className="form-select">
                    <option>Services</option>
                    <option>Adults</option>
                    <option>Children</option>
                    <option>Business</option>
                  </select>
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows="4" placeholder="Message"></textarea>
                </div>
                <button type="submit" className="btn btn-success w-100">Send message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
</>
  );
}
