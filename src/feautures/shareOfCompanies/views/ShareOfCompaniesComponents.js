const ShareOfCompaniesComponent = (props) => {
  const inputName = [];
  for (var i=0; i<props.companyNameShare.length; i++){
    if(props.companyNameShare[i].CNAME.length === 0){
      inputName.push(i);
    }
  }

  var colorKeys = [];
  for (var j=0; j<props.companyShares.length; j++){
    if (props.companyShares[j].Y !== props.companySharesWarn[j].Y){
      colorKeys.push(j);
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
        {props.companyNameShare.map((x, id) => {
            return (
              <div className="form-group row" key={id} value={x.Y}>
                <div className="col-sm-2 flex-div">
                  <input
                    value={x.CNAME}
                    name="CNAME"
                    onChange={e => props.changeNameShare(e,id)}
                    type="text"
                    className={inputName.includes(id) ? 'form-control' : 'form-label'}
                    id="company"
                  />
                </div>

                <div className="col-sm-2 flex-div">
                  <input
                    value={x.Y}
                    name="Y"
                    onChange={e => props.changeNameShare(e, id)}
                    type="number"
                    className={colorKeys.includes(id) || props.newField ? "form-control invalid" : "form-control"}
                    id="company"
                  />
                  <span className="col-sm-1">
                    <i className="fa-solid fa-percent"></i>
                  </span>
                  <button className="removebtn1" onClick={(e) => props.deleteNameShare(e, id)}>
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
                onClick={props.addShare}
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

export default ShareOfCompaniesComponent;
