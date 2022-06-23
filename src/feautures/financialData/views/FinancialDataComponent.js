import PropTypes from 'prop-types';
const FinancialDataComponent = (props) => {
    return (
        <main className="content">
            <div className="content-header">
                <button className="content-header--button">
                    View history of changes
                    <i className="fa-solid fa-arrow-right-from-bracket content-header--icon"></i>
                </button>
            </div>
            <form className="content-form">
                <div className="form-group row">
                    <label
                        htmlFor="company"
                        className="col-sm-3 col-form-label"
                    >
                        Cəmi Aktivlər
                    </label>
                    <div className="col-sm-2 flex-div">
                        <input
                            id="active"
                            type="text"
                            className={props.color ? 'form-control invalid' : 'form-control'}
                            value={props.active}
                            onChange={e => props.setActive(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="segment"
                        className="col-sm-3 col-form-label"
                    >
                        Cəmi Kapital
                    </label>
                    <div className="col-sm-2 flex-div">
                        <input
                            value={props.capital}
                            type="text"
                            className={props.colorC ? 'form-control invalid' : 'form-control'}
                            onChange={(e) => props.setCapital(e.target.value)}
                            id="capital"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="share" className="col-sm-3 col-form-label">
                        Cəmi Öhdəliklər
                    </label>
                    <div className="col-sm-2 flex-div">
                        <input
                            value={props.liability}
                            type="text"
                            className={props.colorL ? 'form-control invalid' : 'form-control'}
                            onChange={(e) => props.setLiability(e.target.value)}
                            id="liability"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="employee"
                        className="col-sm-3 col-form-label"
                    >
                        EBITDA (2021)
                    </label>
                    <div className="col-sm-2 flex-div">
                        <input
                            value={props.ebitda}
                            type="text"
                            className={props.colorE ? 'form-control invalid' : 'form-control'}
                            onChange={(e) => props.setEBITDA(e.target.value)}
                            id="ebitda"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="ceo" className="col-sm-3 col-form-label">
                        Xalis Mənfəət /(Zərər) (2021)
                    </label>
                    <div className="col-sm-2 flex-div">
                        <input
                            value={props.loss}
                            type="text"
                            className={props.colorLoss ? 'form-control invalid' : 'form-control'}
                            onChange={(e) => props.setLoss(e.target.value)}
                            id="loss"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="industry"
                        className="col-sm-3 col-form-label"
                    >
                        Ödənilmiş mənfəət vergisi (2021)
                    </label>
                    <div className="col-sm-2 flex-div">
                        <input
                            type="text"
                            className={props.coloriT ? 'form-control invalid' : 'form-control'}
                            onChange={(e) => props.setIncomeTax(e.target.value)}
                            id="incometax"
                            value={props.incomeTax}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="country"
                        className="col-sm-3 col-form-label"
                    >
                        Ödənilmiş əmlak vergisi (2021)
                    </label>
                    <div className="col-sm-2 flex-div">
                        <input
                            type="text"
                            className={props.colorpT ? 'form-control invalid' : 'form-control'}
                            onChange={(e) => props.setPropertyTax(e.target.value)}
                            id="propertytax"
                            value={props.propertyTax}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="country"
                        className="col-sm-3 col-form-label"
                    >
                        Bütün təsisçilərə ödənilən dividendlər (2021)
                    </label>
                    <div className="col-sm-2 flex-div">
                        <input
                            type="text"
                            className={props.colorD1 ? 'form-control invalid' : 'form-control'}
                            onChange={(e) => props.setDividend1(e.target.value)}
                            id="dividend1"
                            value={props.dividend1}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="country"
                        className="col-sm-3 col-form-label"
                    >
                        SOCAR-a ödənilən dividendlər (2021)
                    </label>
                    <div className="col-sm-2 flex-div">
                        <input
                            type="text"
                            className={props.colorD2 ? 'form-control invalid' : 'form-control'}
                            onChange={(e) => props.setDividend2(e.target.value)}
                            id="dividend2"
                            value={props.dividend2}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-12 button-right">
                        <button type="button" className="btn-save" onClick={props.onSubmitForm}>
                            Send
                        </button>
                        <button type="button" className="btn-reset" onClick={props.reset}>
                            Reset
                        </button>
                    </div>
                </div>
            </form>
        </main>
    );
};
FinancialDataComponent.propTypes = {
    active: PropTypes.number,
    capital: PropTypes.number,
    liability: PropTypes.number,
    ebitda: PropTypes.number,
    loss: PropTypes.number,
    incomeTax: PropTypes.number,
    propertyTax: PropTypes.number,
    dividend1: PropTypes.number,
    dividend2: PropTypes.number,
};
export default FinancialDataComponent;
