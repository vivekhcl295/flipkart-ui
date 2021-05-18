import React, { Component } from 'react';
import CategoryFilter from "../components/CategoryFilter";
import PriceFilter from "../components/PriceFilter";

class FilterBar extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <CategoryFilter />
                </div>
                <div className="col-12">
                    <PriceFilter />
                </div>
            </div>
        );
    }
}

export default FilterBar;