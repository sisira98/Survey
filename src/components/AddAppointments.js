import React, { Component } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import { FaPlus } from 'react-icons/fa';
import Select from 'react-select';
import Dropdown from './dropdown';

const options = [
  { value: 'Java', label: 'java' },
  { value: 'python', label: 'python' },
  { value: 'C', label: 'C' },
  { value: 'C++', label: 'C++' },
  { value: 'React', label: 'React' },
  { value: 'Django', label: 'Django' },
];

class AddAppointments extends Component {

  state = { selectedOption: null, };
  handleSelection = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  constructor() {
    super();
    this.state = {
      Name: '',
      education: '',
      gender: '',
      phone: '',
      email: '',
      skills: '',
      pherror: '',
      Nameerror: '',
      emailerror: '',
    };


    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.validate = this.validate.bind(this);

  }
  validate = () => {

    let pherror = '';
    let Nameerror = '';
    let emailerror = '';



    if (!this.state.phone) {
      pherror = "phone no cannot be blank";
    }
    if (!this.state.email) {
      emailerror = "email  cannot be blank";
    }
    if (!this.state.Name) {
      Nameerror = "Name cannot be blank";
    }

    if (pherror || Nameerror || emailerror) {
      this.setState({
        pherror, Nameerror, emailerror
      });
      return false;
    }

    return true;

  }


  handleAdd(e) {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      let tempApt = {
        Name: this.state.Name,
        education: this.state.education,
        gender: this.state.gender,
        phone: this.state.phone,
        email: this.state.email,
        skills: this.state.skills,

      };

      this.props.addAppointment(tempApt);

      this.setState({
        Name: '',
        education: '',
        skills: '',
        gender: '',
        phone: '',
        email: '',
        pherror: '',
        emailerror: ''
      });
      this.props.toggleForm();
    }
    else {
      console.log("error")
    }
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { selectedOption } = this.state;
    return (
      <div
        className={
          'card textcenter mt-3 ' +
          (this.props.formDisplay ? '' : 'add-appointment')
        }
      >
        <div
          className="apt-addheading card-header bg-primary text-white"
          onClick={this.props.toggleForm}
        >
          <FaPlus />Add Survey
        </div>

        <div className="card-body">
          <form id="aptForm" noValidate onSubmit={this.handleAdd}>
            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="Name"
                readOnly
              >
                Name
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="Name"
                  placeholder="Name"
                  value={this.state.Name}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="owner-name"
              > Education:</label><div className="col-md-10"> {<select name="education" id="cars" value={this.state.education}
                onChange={this.handleChange}>
                <option value="PG">PG</option>
                <option value="UG">UG</option>
                <option value="Phd">Phd</option>
              </select>
              }
              </div>
            </div>
            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="aptDate"
              >
                Gender
                            </label>
              <div className="col-md-4">
                <input type="radio" name="gender" value=" male" onChange={this.handleChange} />male

                <input type="radio" name="gender" value="female" onChange={this.handleChange} />Female
              <input type="radio" name="gender" value="other" onChange={this.handleChange} />other
              </div>
            </div>
            <div className="form-group form-row">
              <label className="col-md-2 text-md-right" htmlFor="aptNotes">
                Phone:
              </label>
              <div className="col-md-10">
                {
                  <input type="text" name="phone"
                    value={this.state.phnno}
                    onChange={this.handleChange}
                  />
                }
              </div>
            </div>
            <div className="form-group form-row">
              <label className="col-md-2  text-md-right" htmlFor="aptNotes">
                skills:
              </label>
              <div>
                <Select
                  isMulti={true}
                  value={selectedOption}
                  onChange={this.handleSelection}
                  options={options}
                />

              </div>
            </div>
            <div className="form-group form-row">
              <label className="col-md-2 text-md-right" htmlFor="aptNotes">
                email:
              </label>
              <div className="col-md-04">
                {
                  <input type="email" name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                }
              </div>
            </div>

            <div className="form-group form-row">
              <label className="col-md-2 text-md-right" htmlFor="aptNotes">

              </label>
              <div>




              </div>




            </div>

            <div className="form-group form-row mb-0">
              <div className="offset-md-2 col-md-10">
                <button
                  type="submit"
                  className="btn btn-primary d-block ml-auto"
                >
                  Submit
                </button>
              </div>
            </div>
            <div style={{ fontSize: 5, color: "red", fontWeight: "lighter" }}><h2>{this.state.emailerror}</h2> <br />
              <h2>{this.state.pherror}</h2>
              <h2>{this.state.Nameerror}</h2>

            </div>

          </form >
        </div >
      </div >
    );
  }
}

export default AddAppointments;
