

const SelectTestComponent = () => {

    const countries = [ 
        { name: "Austria", isoCode: "AT" },
        { name: "United States", isoCode: "US" }, 
        { name: "Ireland", isoCode: "IE" }, 
    ]


    return (
        <select>
            <option>Select a Country</option>
            {countries.map((country) => 
                <option key={country.isoCode} value={country.isoCode}>
                    {country.name}
                </option>
            )}
        </select>
    )

    
}

export default SelectTestComponent;