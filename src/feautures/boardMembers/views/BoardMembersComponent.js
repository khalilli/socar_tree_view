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
                        {
                            props.directorList.map(x=>{
                                return <div className="col-sm-8">
                                    <span className="deleteicon deleteicon-boardmembers">
                                        <input
                                            value={x}
                                            onChange={()=>{}}
                                            type="text"
                                            className="form-control margin-bottom"
                                            id="company"
                                        />
                                        <span className="delete-span">x</span>
                                    </span>
                                </div>
                            })
                        }
                        <button
                            type="button"
                            className="col-sm-2 add-button"
                            id="add-member"
                        >
                            Add
                            <i
                                className="fa-solid fa-plus"
                                style={{ marginLeft: '5px' }}
                            ></i>
                        </button>
                    </div>
                    <div className="form-group col-6">
                        <label
                            htmlFor="comapny"
                            className="col-sm-6 col-form-label margin-bottom"
                        >
                            Ümumi yığıncaqda təmsilçilər
                        </label>
                        <div className="col-sm-8">
                            <span className="deleteicon deleteicon-boardmembers">
                                <input
                                    //value="Rövnəq Abdullayev (SOCAR)"
                                    type="text"
                                    className="form-control margin-bottom"
                                    id="company"
                                />
                                <span className="delete-span">x</span>
                            </span>
                        </div>
                        <button
                            type="button"
                            className="col-sm-2 add-button"
                            id="add-member"
                        >
                            Add
                            <i
                                className="fa-solid fa-plus"
                                style={{ marginLeft: '5px' }}
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

export default BoardMembersComponent;
