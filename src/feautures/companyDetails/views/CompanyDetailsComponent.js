import PropTypes from 'prop-types';
import Autocomplete from 'react-autocomplete';

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
                            onChange = {(e) => props.setCompanyShare(e.target.value)}
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
                            value= {props.companyNumberOfEmployees}
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
                        >Fəaliyyət göstərdiyi ölkələr</label
                    >
                    <div className="col-sm-6">
                        <Autocomplete 
                            items={props.countries}
                            getItemValue={(item) => item.Name} 
                            renderItem={(item, isHighlighted) =>
                                <div key={item.ISO} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                                  {item.Name}
                                </div>
                            }
                            wrapperStyle = {{
                                display: 'block'
                            }}
                            renderInput = {
                                (props) => {
                                    return <input 
                                    id="country"
                                    type="text" 
                                    className="form-control"
                                    {...props} />
                                }
                            }
                            shouldItemRender={(item, value) => item.Name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                            value={props.companyCountryOfOperation}
                            onChange={(e) => props.setCountryOfOperation(e.target.value)}
                            onSelect={(val) => props.setCountryOfOperation(val)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button 
                            type="button"
                            onClick={props.onSubmitForm} 
                            className="btn btn-primary">
                            Save
                        </button> &nbsp;
                        <button 
                            type="button" 
                            onClick={props.reset} 
                            className="btn btn-secondary">
                            Reset
                        </button>
                    </div>
                </div>
            </form>
        </main>
    )
}

CompanyDetailsComponent.propTypes = {
    companyName: PropTypes.string,
    companySegment: PropTypes.string,
    companyShare: PropTypes.number,
    companyNumberOfEmployees: PropTypes.number,
    companyCEO: PropTypes.string,
    countryOfOperation: PropTypes.string
}

export default CompanyDetailsComponent;