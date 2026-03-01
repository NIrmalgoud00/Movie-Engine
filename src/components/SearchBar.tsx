import React, { useContext, useState } from 'react'
import { SearchContext } from "../context/SearchContext";

const SearchBar: React.FC = () => {

    const { setSearch } = useContext(SearchContext);

    const [inputData, setInputData] = useState("")

    const onSearch = () => {
        setSearch(inputData);
        setInputData("")
    }

    return (
        <div className="container-fluid">
            <div className='row' style={{ height: "60px" }}>
                <div className="col h-100 d-flex justify-content-end align-items-center" >
                    <div className="col-12 col-sm-8 col-md-6 col-lg-3 d-flex justify-content-end align-items-center border-1 border-dark">
                        <input
                            type="text"
                            className="form-control px-2 border border-dark"
                            style={{
                                borderRadius: "10px",
                                fontSize: "calc(60px * 0.4)",
                            }}
                            placeholder="Enter City"
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                        />

                        <button
                            type="button"
                            className="bg-light btn btn-outline-dark ms-2 "
                            style={{
                                fontSize: "calc(60px * 0.4)",
                            }}
                            onClick={onSearch}
                        >
                            <i className="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar