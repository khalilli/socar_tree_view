const CompanyDetailsComponent = () => {
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
                    <label for="comapny" className="col-sm-3 col-form-label"
                        >Şirkət</label
                    >
                    <div className="col-sm-6">
                        <input
                            value="AZFEN BM"
                            type="text"
                            className="form-control"
                            id="company"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="segment" className="col-sm-3 col-form-label"
                        >Aid olduğu seqment</label
                    >
                    <div className="col-sm-6">
                        <input
                            value="Xidmətlər"
                            type="text"
                            className="form-control"
                            id="segment"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="share" className="col-sm-3 col-form-label"
                        >Share</label
                    >
                    <div className="col-sm-6">
                        <input
                            value="100"
                            type="number"
                            className="form-control"
                            id="share"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="employee" className="col-sm-3 col-form-label"
                        >İşçi sayı</label
                    >
                    <div className="col-sm-6">
                        <input
                            value="6441"
                            type="number"
                            className="form-control"
                            id="employee"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="ceo" className="col-sm-3 col-form-label"
                        >Rəhbər</label
                    >
                    <div className="col-sm-6">
                        <input
                            value="Həmid Həsənov"
                            type="text"
                            className="form-control"
                            id="ceo"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="industry" className="col-sm-3 col-form-label"
                        >Fəaliyyət Sahəsi</label
                    >
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="industry" />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="country" className="col-sm-3 col-form-label"
                        >Fəaliyyət göstərdiyi ölkələr</label
                    >
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="country" />
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

export default CompanyDetailsComponent;