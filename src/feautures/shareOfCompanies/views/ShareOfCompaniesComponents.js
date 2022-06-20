import {useState} from 'react';
import PropTypes from 'prop-types';
const ShareOfCompaniesComponent = (props) => {
  const [companyNameShare, setCompanyNameShare] = useState(props.companyShares);
  console.log(companyNameShare);
  const changeNameShare = (e, id) => {
    const values = [...companyNameShare];
    values[id][e.target.name] = e.target.value;
    setCompanyNameShare(values);
  }
  const addShare = () => {
    setCompanyNameShare([...companyNameShare, {name: "", share: ""}]);
  }
  const deleteNameShare = (id) => {
    const list = [...companyNameShare];
    list.splice(id, 1);
    console.log(id);
    setCompanyNameShare(list);
  }
  const inputName = [];
  for (var i=0; i<companyNameShare.length; i++){
    if(companyNameShare[i].name.length === 0){
      inputName.push(i);
    }
  }
    return (
      <main className="content">
        <div className="content-header">
          <button className="content-header--button">
            View history of changes
            <i className="fa-solid fa-arrow-right-from-bracket content-header--icon"></i>
          </button>
        </div>
        <form className="content-form">
        {companyNameShare.map((x, id) => {
            return (
              <div className="form-group row" key={id}>
                <div className="col-sm-2 flex-div">
                  <input
                    value={x.name}
                    name="name"
                    onChange={e => changeNameShare(e,id)}
                    type="text"
                    className={inputName.includes(id) ? 'form-control' : 'form-label'}
                    id="company"
                  />
                </div>

                <div className="col-sm-2 flex-div">
                  <input
                    value={x.share}
                    name="share"
                    onChange={e => changeNameShare(e, id)}
                    type="text"
                    className="form-control"
                    id="company"
                  />
                  <span className="col-sm-1">
                    <i className="fa-solid fa-percent"></i>
                  </span>
                  <button className="removebtn1" onClick={() => deleteNameShare(id)}>
                    x
                  </button>
                </div>
              </div>
            );
        })} 
          <div className="form-group row">
            <div className="col-sm-10">
              <button
                type="button"
                className="col-sm-1 add-button"
                id="add-member"
                onClick={addShare}
              >
                Add
                <i
                  className="fa-solid fa-plus"
                  style={{ marginLeft: "10px" }}
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
// ShareOfCompaniesComponent.propTypes = {
//   companyShares: PropTypes.array,
// };

export default ShareOfCompaniesComponent;
