import PropTypes from 'prop-types';

const CompanyDetailsComponent = props => {
    return (
        <main className="content">
            <div className="content-header">
                <button className="content-header--button">
                    View history of changes<i
                        className="fa-solid fa-arrow-right-from-bracket content-header--icon"
                    ></i>
                </button>
            </div>
            <form className="content-form">
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label"
                        >Şirkət</label
                    >
                    <div className="col-sm-6">
                        <input
                            id="company"              
                            type="text"
                            className="form-control"
                            value = {props.companyName}
                            onChange = {(e) => props.setCompanyName(e.target.value)}                         
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label"
                        >Aid olduğu seqment</label
                    >
                    <div className="col-sm-6">
                        <input
                            id="segment"
                            type="text"
                            className="form-control"
                            value = {props.companySegment}
                            onChange = {(e) => props.setCompanySegment(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label"
                        >Share</label
                    >
                    <div className="col-sm-6">
                        <input
                            id="share"
                            type="number"
                            className="form-control"
                            value = {props.companyShare}
                            onChange = {(e) => props.setCompanySegment(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label"
                        >İşçi sayı</label
                    >
                    <div className="col-sm-6">
                        <input
                            id="employee"
                            type="number"
                            className="form-control"
                            value= {props.numberOfEmployees}
                            onChange = {(e) => props.setCompanyNumberOfEmployees(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label"
                        >CEO</label
                    >
                    <div className="col-sm-6">
                        <input
                            id="ceo"
                            type="text"
                            className="form-control"
                            value = {props.companyCEO}    
                            onChange = {(e) => props.setCompanyCEO(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label"
                        >Fəaliyyət Sahəsi</label
                    >
                    <div className="col-sm-6">
                        <input 
                            id="industry"
                            type="text"
                            className="form-control"
                            value = {props.companyFieldOfActivity}
                            onChange = {(e) => props.setCompanyFieldOfActivity(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label"
                        >Fəaliyyət göstərdiyi ölkələr</label
                    >
                    <div className="col-sm-6">
                        <input 
                            id="country"
                            type="text" 
                            className="form-control"
                            value= {props.countryOfOperation}
                            onChange = {(e) => props.setCountryOfOperation(e.target.value)}  
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="button" className="btn btn-primary">
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </main>
    )
}

CompanyDetailsComponent.propTypes = {
    companyName: PropTypes.string
}

export default CompanyDetailsComponent;