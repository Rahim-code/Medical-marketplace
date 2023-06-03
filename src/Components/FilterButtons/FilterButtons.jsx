import React, {useState} from 'react';
import "./FilterButtons.css"
import allFilters from "../../assets/Svg/all-filters.svg"
import allSort from "../../assets/Svg/all-sort.svg"
import AllFiltersModal from "./AllFiltersModal.jsx";
import AllSortModal from "./AllSortModal.jsx";

const FilterButtons = () => {
  const [openFilters, setOpenFilters] = useState(false)
  const [openSort, setOpenSort] = useState(false)
  const onOpenFilter = () =>{
    setOpenFilters(true)
  }
  const onCloseFilter = () =>{
    setOpenFilters(false)
  }
  const onOpenSort = () =>{
    setOpenSort(true)
  }
  const onCloseSort = () =>{
    setOpenSort(false)
  }
  return (
    <section className={"filters"}>
      <button className={"filters-btn"} onClick={onOpenFilter}>
        <img src={allFilters} alt=""/>
        <span>Все фильтры</span>
      </button>
      <div className="filters-divider"></div>
      <button className={"filters-btn"} onClick={onOpenSort}>
        <img src={allSort} alt=""/>
        <span>Сортировать</span>
      </button>
      <AllFiltersModal openFilters={openFilters} onCloseFilter={onCloseFilter} />
      <AllSortModal openSort={openSort} onCloseSort={onCloseSort} />
    </section>
  );
};

export default FilterButtons;
