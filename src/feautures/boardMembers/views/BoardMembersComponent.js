import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
const BoardMembersComponent = props => {
    // const [names, setNames] = useState(props.directorList);
    // const [namesR, setNamesR] = useState(props.representativeList);

    // useEffect(() => {
    //   setNames(props.directorList);
    // }, [props.directorList]);
    // useEffect(() => {
    //   setNamesR(props.representativeList);
    // }, [props.representativeList]);

    // const handleChangeDirectors = (event, id) => {
    //   const values = [...names];
    //   values[id][event.target.name] = event.target.value;
    //   setNames(values);
    // };
    // const handleChangeRep = (event, id) => {
    //   const valuesR = [...namesR];
    //   valuesR[id][event.target.name] = event.target.value;
    //   setNamesR(valuesR);
    // };
    // const addName = () => {
    //   setNames([...names, {dirname: ""}]);
    // };
    // const addNameR = () => {
    //   setNamesR([...namesR, {repname: ""}]);
    // };
    // const deleteName = (id, e) => {
    //   e.preventDefault();
    //   const list = [...names];  
    //   list.splice(id, 1);
    //   setNames(list);
    // };
    // const deleteNameR = (id) => {
    //   e.preventDefault();
    //   const list = [...namesR];
    //   list.splice(id, 1);
    //   console.log(id);
    //   setNamesR(list);
    // };
    console.log(props.names);
    return (
      <main className="content">
        <div className="content-header">
          <button className="content-header--button">
            View history of changes
            <i className="fa-solid fa-arrow-right-from-bracket content-header--icon"></i>
          </button>
        </div>
        <form className="content-form">
          <div className="row">
            <div className="form-group col-6">
              <label
                htmlFor="comapny"
                className="col-sm-6 col-form-label margin-bottom"
              >
                Direktorlar şurasının üzvləri
              </label>
              {props.names.map((x, id) => {
                return (
                  <div className="col-sm-8" key={id}>
                    <span className="deleteicon deleteicon-boardmembers">
                      <input
                        name="dirname"
                        value={x.dirname}
                        onChange={(e) => props.handleChangeDirectors(e, id)}
                        type="text"
                        className="form-control margin-bottom"
                        id="companyDir"
                      />
                      {/* <span className="delete-span">x</span> */}
                    </span>
                    <button className="removebtn" onClick={(id, e) => props.deleteName(id, e)}>
                      x
                    </button>
                  </div>
                );
              })}

              <button
                type="button"
                className="col-sm-2 add-button"
                id="add-member"
                onClick={props.addName}
              >
                Add
                <i
                  className="fa-solid fa-plus"
                  style={{ marginLeft: "5px" }}
                ></i>
              </button>
            </div>
            <div className="form-group col-6">
              <label
                htmlFor="comapny"
                className="col-sm-6 col-form-label margin-bottom"
              >
                Ümumi yığıncaqda təmsilçilər
              </label>
              {props.namesR.map((x, id) => {
                return (
                  <div className="col-sm-8" key={id}>
                    <span className="deleteicon deleteicon-boardmembers">
                      <input
                        name="repname"
                        value={x.repname}
                        type="text"
                        className="form-control margin-bottom"
                        onChange={(e) => props.handleChangeRep(e, id)}
                        id="companyRep"
                      />
                      {/* <span className="delete-span">x</span> */}
                    </span>
                    <button className="removebtn" onClick={(id, e) => props.deleteNameR(id, e)}>
                      x
                    </button>
                  </div>
                );
              })}
              <button
                type="button"
                className="col-sm-2 add-button"
                id="add-member"
                onClick={props.addNameR}
              >
                Add
                <i
                  className="fa-solid fa-plus"
                  style={{ marginLeft: "5px" }}
                ></i>
              </button>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-12 button-right">
              <button type="button" className="btn-save" onClick={props.onSubmitForm}>
                Send
              </button>
              <button type="button" className="btn-reset">
                Reset
              </button>
            </div>
          </div>
        </form>
      </main>
    );
};

BoardMembersComponent.propTypes = {
  directorList: PropTypes.array,
  representativeList: PropTypes.array
}
export default BoardMembersComponent;
