const FinancialDataComponent = () => {
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
                        htmlFor="comapny"
                        className="col-sm-3 col-form-label"
                    >
                        Cəmi Aktivlər
                    </label>
                    <div className="col-sm-2 flex-div">
                        <input
                            value="393 676 328"
                            type="text"
                            className="form-control"
                            id="company"
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
                            value="156 820 796"
                            type="text"
                            className="form-control"
                            id="segment"
                        />
                        <span class="col-sm-1">AZN</span>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="share" className="col-sm-3 col-form-label">
                        Cəmi Öhdəliklər
                    </label>
                    <div className="col-sm-2 flex-div">
                        <input
                            value="236 855 532"
                            type="text"
                            className="form-control"
                            id="share"
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
                            value="162 033 651"
                            type="number"
                            className="form-control"
                            id="employee"
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
                            value="111 160 878 "
                            type="text"
                            className="form-control"
                            id="ceo"
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
                            type="text"
                            className="form-control"
                            id="industry"
                            value="8 139 922"
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
                            type="text"
                            className="form-control"
                            id="country"
                            value="295 000"
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
                            type="text"
                            className="form-control"
                            id="country"
                            value="20 000 000"
                        />
                        <span className="col-sm-1">AZN</span>
                    </div>
                </div>
                <div class="form-group row">
                    <label
                        htmlFor="country"
                        className="col-sm-3 col-form-label"
                    >
                        SOCAR-a ödənilən dividendlər (2021)
                    </label>
                    <div class="col-sm-2 flex-div">
                        <input
                            type="text"
                            className="form-control"
                            id="country"
                            value="12 000 000"
                        />
                        <span className="col-sm-1">AZN</span>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-12 button-right">
                        <button type="button" className="btn-save">
                            Save
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

export default FinancialDataComponent;
