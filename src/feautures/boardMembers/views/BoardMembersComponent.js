import PropTypes from 'prop-types';
const BoardMembersComponent = props => {
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
              <div className="row">
                <div className="form-group col-4">
                  {props.directorList.map((x, id) => {
                  return (
                    <div className="col-sm-6" key={id}>
                        <input
                          name="dirname"
                          defaultValue={x.dirname}
                          type="text"
                          className="form-control margin-bottom"
                          id="companyDir"
                        />
                    </div>
                  );
                })}
                </div>
                <div className="form-group col-4">
                  {props.directorList.map((x, id) => {
                  return (
                    <div className="col-sm-6" key={id}>
                        <input
                          name="dirname"
                          defaultValue={x.dirname}
                          type="text"
                          className="form-control margin-bottom"
                          id="companyDir"
                        />
                    </div>
                  );
                })}
                </div>
              </div>
            </div>
            <div className="form-group col-6">
              <label
                htmlFor="comapny"
                className="col-sm-6 col-form-label margin-bottom"
              >
                Ümumi yığıncaqda təmsilçilər
              </label>
              <div className="row">
                <div className="form-group col-4">
                  {props.representativeList.map((x, id) => {
                  return (
                    <div className="col-sm-6" key={id}>
                      <span className="deleteicon deleteicon-boardmembers">
                        <input
                          name="repname"
                          defaultValue={x.repname}
                          type="text"
                          className="form-control margin-bottom"
                          id="companyRep"
                        />
                      </span>
                    </div>
                  );
                })}
                </div>
                <div className="form-group col-4">
                  {props.representativeList.map((x, id) => {
                  return (
                    <div className="col-sm-6" key={id}>
                      <span className="deleteicon deleteicon-boardmembers">
                        <input
                          name="repname"
                          defaultValue={x.repname}
                          type="text"
                          className="form-control margin-bottom"
                          id="companyRep"
                        />
                      </span>
                    </div>
                  );
                })}
                </div>
              </div>
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

BoardMembersComponent.propTypes = {
  directorList: PropTypes.array,
  representativeList: PropTypes.array
}
export default BoardMembersComponent;
