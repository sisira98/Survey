import React, { Component } from "react";
import { FaTimes } from "react-icons/fa";
import Moment from "react-moment";
import Dropdown from "./dropdown";

const ListAppointments = ({ appointments }, { updateInfo },) => {
  console.log("sdfdsfd", appointments);
  console.log("sdfdsfd", updateInfo);
  return (
    <div className="appointment-list item-list mb-3">
      {appointments.map((item) => (
        <div className="pet-item col media py-3" key={item.aptId}>
          <div className="mr-3" />

          <div className="pet-info media-body">
            <div className="pet-head d-flex">
              <span
                className="pet-name"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  updateInfo("Name", e.target.innerText, item.aptId)
                }
              >
                {item.aptId}--{item.Name}
              </span>
            </div>
            <div className="owner-name">
              <span className="label-item">Name: </span>
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={e =>
                  this.props.updateInfo("Name", e.target.innerText, item.aptId)
                }
              >
                {item.Name}
              </span>
            </div>

            <div className="owner-name">
              <span className="label-item">Education: </span>
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={e =>
                  this.props.updateInfo('education', e.target.innerText, item.aptId)
                }
              >
                {item.education}
              </span>
            </div> <div className="owner-name">
              <span className="label-item">gender: </span>
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={e =>
                  this.props.updateInfo('gender', e.target.innerText, item.aptId)
                }
              >
                {item.gender}
              </span>
            </div>
            <div className="owner-name">
              <span className="label-item">phone: </span>
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={e =>
                  this.props.updateInfo('phone', e.target.innerText, item.aptId)
                }
              >
                {item.phone}
              </span>
            </div>
            <div className="owner-name">
              <span className="label-item">Email: </span>
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={e =>
                  this.props.updateInfo('email', e.target.innerText, item.aptId)
                }
              >
                {item.email}
              </span>
            </div>
            <div className="owner-name">
              <span className="label-item">skills: </span>
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={e =>
                  this.props.updateInfo('skills', e.target.innerText, item.aptId)
                }
              >
                {item.skills}
              </span>
            </div>



          </div>
        </div >
      ))
      }

    </div >


  );
};

export default ListAppointments;
