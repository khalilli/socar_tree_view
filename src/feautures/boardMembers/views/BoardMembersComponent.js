import { useState, useCallback } from "react";
import PropTypes from 'prop-types';
const BoardMembersComponent = props => {
  console.log(props.directorList);
  console.log(props.directorListName);
  console.log(props.representativeList);
    const [names, setNames] = useState(props.directorListName);
    const [namesR, setNamesR] = useState([]);
    console.log(names);
    // for(var i=0;i<props.directorList.length;i++){
    //   names.push({dirname: props.directorList[i]});
    // }
    for(var j=0;j<props.representativeList.length;j++){
      namesR.push({repname: props.representativeList[j]});
    }
    const handleChangeDirectors = (event, id) => {
        const values = [...names];
        values[id][event.target.name] = event.target.value;
        setNames(values);
    };
    const handleChangeRep = (event, id) => {
        const valuesR = [...namesR];
        valuesR[id][event.target.name] = event.target.value;
        setNamesR(valuesR);
    };
    const addName = () => {
        setNames([...names, {dirname: ""}]);
    };
    const addNameR = () => {
        setNamesR([...namesR, {repname: ""}]);
    };
    const deleteName = (id) => {
        const list = [...names];  
        list.splice(id, 1);
        setNames(list);
    };
    const deleteNameR = (id) => {
        const list = [...namesR];
        list.splice(id, 1);
        console.log(id);
        setNamesR(list);
    };
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
              {names.map((x, id) => {
                return (
                  <div className="col-sm-8" key={id}>
                    <span className="deleteicon deleteicon-boardmembers">
                      <input
                        name="dirname"
                        value={x.dirname}
                        onChange={(e) => handleChangeDirectors(e, id)}
                        type="text"
                        className="form-control margin-bottom"
                        id="companyDir"
                      />
                      {/* <span className="delete-span">x</span> */}
                    </span>
                    <button className="removebtn" onClick={deleteName}>
                      x
                    </button>
                  </div>
                );
              })}

              <button
                type="button"
                className="col-sm-2 add-button"
                id="add-member"
                onClick={addName}
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
              {namesR.map((x, id) => {
                return (
                  <div className="col-sm-8" key={id}>
                    <span className="deleteicon deleteicon-boardmembers">
                      <input
                        name="repname"
                        value={x.repname}
                        type="text"
                        className="form-control margin-bottom"
                        onChange={(e) => handleChangeRep(e, id)}
                        id="companyRep"
                      />
                      {/* <span className="delete-span">x</span> */}
                    </span>
                    <button className="removebtn" onClick={() => deleteNameR(id)}>
                      x
                    </button>
                  </div>
                );
              })}
              <button
                type="button"
                className="col-sm-2 add-button"
                id="add-member"
                onClick={addNameR}
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
              <button type="button" className="btn-save">
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
