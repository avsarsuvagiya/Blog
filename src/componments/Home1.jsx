import React from 'react';

const Home1 = (props) => {
    const textColor = `text-${props.mode === 'light' ? 'dark' : 'light'}`;
    
    return (
        <div className={textColor}>
            <nav className={`navbar navbar-${props.mode} bg-${props.mode} justify-content-between`}>
                <a className="navbar-brand">Navbar</a>
                <form className="form-inline">
                    <input type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-sm-0" type="submit">Search</button>
                </form>
                <div className={`form-check form-switch p-0 ${textColor}`}>
                    <div className="d-flex flex-column gap-1">
                        <input
                            className="form-check-input ms-0"
                            type="checkbox"
                            role="switch"
                            id="switchCheckLabelBottom"
                            onClick={props.togglemode}
                        />
                        <label className="form-check-label" htmlFor="switchCheckLabelBottom">
                            {props.mode === 'light' ? 'Dark' : 'Light'} Mode
                        </label>
                    </div>
                </div>
            </nav>

            <div className="row ">
                {[1, 2, 3,4,5,6].map((_, index) => (
                    <div className="col-md-4 my-1" key={index}>
                        <div className={`card bg-${props.mode} ${textColor}`}>
                            <div className="card-body">
                                <h5 className="card-title">Card Title {index + 1}</h5>
                                <p className="card-text">
                                    This is a short description for the blog post. Click to read more.
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home1;
