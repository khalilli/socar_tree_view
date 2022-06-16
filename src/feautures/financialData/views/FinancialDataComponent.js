import PropTypes from 'prop-types';
const FinancialDataComponent = (props) => {
    var color, colorC, colorL, colorE, colorLoss, coloriT, colorpT, colorD1, colorD2 = false;
    if(props.active !== props.activeWarn){
        color = true;
    }
    if(props.capital !== props.capitalWarn){
        colorC = true;
    }
    if(props.liability !== props.liabilityWarn){
        colorL = true;
    }
    if(props.ebitda !== props.ebitdaWarn){
        colorE = true;
    }
    if(props.loss !== props.lossWarn){
        colorLoss = true;
    }
    if(props.incomeTax !== props.incomeTaxWarn){
        coloriT = true;
    }
    if(props.propertyTax !== props.propertyTaxWarn){
        colorpT = true;
    }
    if(props.dividend1 !== props.dividend1Warn){
        colorD1 = true;
    }
    if(props.dividend2 !== props.dividend2Warn){
        colorD2 = true;
    }
    console.log(props.active);
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
                        <input type="number" value={props.active}></input>
                        <input
                            id="active"
                            type="number"
                            className={color ? 'form-control invalid' : 'form-control'}
                            value={props.active}
                            onChange={e => props.setActive(e.target.value)}
                        />
                        <span className="col-sm-1">AZN</span>
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
                            type="number"
                            className={colorC ? 'form-control invalid' : 'form-control'}
                            onChange={(e) => props.setCapital(e.target.value)}
                            id="capital"
                        />
                        <span className="col-sm-1">AZN</span>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="share" className="col-sm-3 col-form-label">
                        Cəmi Öhdəliklər
                    </label>
                    <div className="col-sm-2 flex-div">
                        <input
                            value={props.liability}
                            type="number"
                            className={colorL ? 'form-control invalid' : 'form-control'}
                            onChange={(e) => props.setLiability(e.target.value)}
                            id="liability"
                        />
                        <span className="col-sm-1">AZN</span>
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
                            type="number"
                            className={colorE ? 'form-control invalid' : 'form-control'}
                            onChange={(e) => props.setEBITDA(e.target.value)}
                            id="ebitda"
                        />
                        <span className="col-sm-1">AZN</span>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="ceo" className="col-sm-3 col-form-label">
                        Xalis Mənfəət /(Zərər) (2021)
                    </label>
                    <div className="col-sm-2 flex-div">
                        <input
                            value={props.loss}
                            type="number"
                            className={colorLoss ? 'form-control invalid' : 'form-control'}
                            onChange={(e) => props.setLoss(e.target.value)}
                            id="loss"
                        />
                        <span className="col-sm-1">AZN</span>
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
                            type="number"
                            className={coloriT ? 'form-control invalid' : 'form-control'}
                            onChange={(e) => props.setIncomeTax(e.target.value)}
                            id="incometax"
                            value={props.incomeTax}
                        />
                        <span className="col-sm-1">AZN</span>
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
                            type="number"
                            className={colorpT ? 'form-control invalid' : 'form-control'}
                            onChange={(e) => props.setPropertyTax(e.target.value)}
                            id="propertytax"
                            value={props.propertyTax}
                        />
                        <span className="col-sm-1">AZN</span>
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
                            type="number"
                            className={colorD1 ? 'form-control invalid' : 'form-control'}
                            onChange={(e) => props.setDividend1(e.target.value)}
                            id="dividend1"
                            value={props.dividend1}
                        />
                        <span className="col-sm-1">AZN</span>
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
                            type="number"
                            className={colorD2 ? 'form-control invalid' : 'form-control'}
                            onChange={(e) => props.setDividend2(e.target.value)}
                            id="dividend2"
                            value={props.dividend2}
                        />
                        <span className="col-sm-1">AZN</span>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-12 button-right">
                        <button type="button" className="btn-save">
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
