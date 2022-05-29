import {Link} from "react-router-dom";

export const ListHeader = ({setSearch}) => {
    return (
        <header className="header">
            <div className={"title"}>
                <h1 style={{color: "rgba(114,119,126,0.84)"}}>PhoneBook</h1>
                <Link to={'Form'}>
                    <i className="fas fa-plus-circle add" >{}</i>
                </Link>
            </div>
            <div className="search-container">
                <div className="search-box">
                    <form>
                        <input type="text" className="input" name="txt"
                            // onMouseOut={() => {
                            //     document.search.txt.value="" ;
                            // }}
                               onChange={(event) => {
                                   setSearch(event.target.value)
                               }}/>
                    </form>
                    <i className="fas fa-search"></i>
                </div>
            </div>

        </header>
    )
}