import "./InputSearch.css";
import { FiSearch } from "react-icons/fi";

export default function InputSearch() {
    return (
        <div className="Bottom-navbar">
            <div className="Button-Nav">
                <ul>
                    <li className="list1"><a href="#">Buy</a></li>
                    <li className="list2"><a href="#">Rent</a></li>
                    <li className="list3"><a href="#">Sell</a></li>
                </ul>
            </div>

            <div className="InputDropDown">
                <label for="city">Location</label>

                <select id="city">
                    <option>New York City</option>
                    <option>Berlin</option>
                    <option>London</option>
                    <option>Granville</option>
                </select>
            </div>

            <div className="Input">
                <FiSearch className="search-icon" />
                <input type="text" placeholder="Search Option..." className="box-input"></input>
            </div>

            <div className="Button-search">
                <h4>Search Properties</h4>
            </div>
        </div>
    )
}
