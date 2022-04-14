const ShareOfCompaniesComponent = () => {
    return (
        <main class="content">
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
                        SOCAR
                    </label>
                    <div className="col-sm-2 flex-div">
                        <input
                            value="60"
                            type="text"
                            className="form-control"
                            id="company"
                        />
                        <span class="col-sm-1">
                            <i className="fa-solid fa-percent"></i>
                        </span>
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="segment"
                        className="col-sm-3 col-form-label"
                    >
                        Tekfen
                    </label>
                    <div class="col-sm-2 flex-div">
                        <input
                            value="40"
                            type="number"
                            className="form-control"
                            id="segment"
                        />
                        <span className="col-sm-1">
                            <i className="fa-solid fa-percent"></i>
                        </span>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button
                            type="button"
                            className="col-sm-1 add-button"
                            id="add-member"
                        >
                            Add
                            <i
                                className="fa-solid fa-plus"
                                style={{ marginLeft: '10px' }}
                            ></i>
                        </button>
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

export default ShareOfCompaniesComponent;
