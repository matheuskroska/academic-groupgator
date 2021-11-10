import React, {useContext, useState, useEffect} from 'react'
import Select from 'react-select'

export const CustomSelect = ({options, width, onChange, placeholder}) => {

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            borderRadius: 0,
            backgroundColor: state.isFocused ? "#66A571" : "",
            color: state.isSelected ? '#fff' : '#66A571',
            color: state.isFocused ? '#fff' : '#66A571',
            "&:hover": state.isHovered ? {color: "#fff"} : {color: "#fff", backgroundColor:"green"},
            fontWeight: "bold",
        }),
        menu: (provided, state) => ({
            ...provided,
            color: state.selectProps.menuColor,
            borderRadius: 25,
            overflow: 'hidden',
        }),
        control: (provided,state) => (
            { ...provided, 
            backgroundColor: 'white',
            border: "1px solid green", 
            borderRadius: "25px", 
            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;",
            "&:hover": {border: "1px solid green"},
            height: "35px",
            minHeight: "35px",
            padding: "0 5px 0 10px",
            "&:hover": state.isHovered ? null : null,
        }),
        singleValue: (provided,state) => (
            { ...provided, 
            color: "#66A571",
            fontWeight: "bold",
            fontSize: "18px",
        }),
        indicatorSeparator: () => {},
        dropdownIndicator: base => ({
            ...base,
            color: "#66A571",
            "&:hover": {color: "green"}
        }),
        container: (provided, { selectProps: { width }}) => (
           { ...provided,
            width: width}
        ),
        placeholder: (provided) => (
            {...provided,
            color: "#66A571",
            color: "rgb(102 165 113 / 55%)",
            fontWeight: "bold",
            fontSize: "18px",}
        )          
        
    } 

    return (
        <>
            <Select onChange={onChange} style={{cursor: "pointer"}} placeholder={placeholder} styles={customStyles} options={options} width={width} theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                    ...theme.colors,
                    primary25: '#66A571',
                    primary: '#66A571',
                    primary75: '#66A571',
                    primary50: '#66A571',
                    
            },
            })} />
        </>
    )
}
