const ShareOfCompaniesComponent = (props) => {
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
            <div className="form-group col-4">
              {props.companyShares.map((x, id) => {
              return (
                <div className="form-group row" key={id}>
                  <div className="col-sm-2 flex-div">
                    <input
                      defaultValue={x.CNAME}
                      name="CNAME"
                      type="text"
                      className={'form-label'}
                      id="company"
                    />
                  </div>
                  <div className="col-sm-2 flex-div">
                    <input
                      defaultValue={x.Y}
                      name="Y"
                      type="number"
                      className={"form-control"}
                      id="company"
                    />
                  </div>
                </div>
              );
              })} 
            </div>
            <div className="form-group col-4">
              {props.companyShares.map((x, id) => {
              return (
                <div className="form-group row" key={id}>
                  <div className="col-sm-2 flex-div">
                    <input
                      defaultValue={x.CNAME}
                      name="CNAME"
                      type="text"
                      className={'form-label'}
                      id="company"
                    />
                  </div>
                  <div className="col-sm-2 flex-div">
                    <input
                      defaultValue={x.Y}
                      name="Y"
                      type="number"
                      className={"form-control"}
                      id="company"
                    />
                  </div>
                </div>
              );
              })} 
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12 button-right">
              <button type="button" className="btn-save">
                Approve
              </button>
              <button type="button" className="btn-reset">
                Send back
              </button>
            </div>
          </div>
        </form>
      </main>
    );
};

export default ShareOfCompaniesComponent;
