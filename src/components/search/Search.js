import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
// import AsyncSelect from 'react-select/async';
// import { GEO_API_URL,geoApiOptions } from "../../api";
import api from "../../Tapi";
// import { AsyncPaginate } from "react-select-async-paginate";


const Search =({OnSearchChange})=>{
    const [search,setSearch] = useState(null);
    const handeOnChange=(searchData)=>{
        setSearch(searchData);
        OnSearchChange(searchData);
    }

    const loadOptions = async (inputValue)=>{
        return api.get(`?minPopulation=100&namePrefix=${inputValue}`)
        .then(result=>{
            const res=result.data.data;
            // console.log(res)     
            return{
                options: res.map((city)=>{
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label:  `${city.name},${city.countryCode}`
                    }
                })
            }
        })
    }
    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handeOnChange}
            loadOptions={loadOptions}
        />
    )
}

export default Search;