import React, { Component } from "react";
import PropTypes from 'prop-types';
import { jsx } from '@emotion/core';
import Button from '@atlaskit/button';
import Select from 'react-select';
import data from '../data/data';
  

import "./CurrencySelect.css";



const options = [
    {value: '1', label: 'Item 1'},
    {value: '2', label: 'Item 2'},
    {value: '3', label: 'Item 3'},
    {value: '4', label: 'Item 4'},
    {value: '5', label: 'Item 5'},
    {value: '6', label: 'Item 6'},
    {value: '7', label: 'Item 7'},
  ]


  

  
class SelectCurrency extends Component {
   constructor(props){
       super(props);
       this.state ={
          currencies: props.currencies,
       }
   }
       
   
  
    state = { isOpen: false, value: undefined };
    toggleOpen = () => {
      this.setState(state => ({ isOpen: !state.isOpen }));
    };
    onSelectChange = value => {
      this.toggleOpen();
      this.setState({ value });
      console.log(this.props.currencies);
    };
   render(){
    const { isOpen, value } = this.state;
    const { currencies } = this.props;
    // const currencyArr = currencies.map(currency =>{
    //     return currency;
    // })
    return(
    <Dropdown
        className="select-dropdown"
        isOpen={isOpen}
        onClose={this.toggleOpen}
        target={
          <Button
            iconAfter={<ChevronDown />}
            onClick={this.toggleOpen}
            isSelected={isOpen}
            className="select-btn">
            {value ? `${value.label}` : 'Select a State'}
          </Button>
        }
       >
        <Select
          autoFocus
          backspaceRemovesValue={false}
          components={{ DropdownIndicator, IndicatorSeparator: null }}
          controlShouldRenderValue={false}
          hideSelectedOptions={false}
          isClearable={false}
          menuIsOpen
          onChange={this.onSelectChange}
          options={this.props.currencies}
          placeholder="Search..."
          styles={customStyles}
          tabSelectsValue={false}
          value={value}
        />
      </Dropdown>
    )
    }
   
}


const customStyles = {
    control: (base, state) => ({
      ...base,
      border: state.isFocused ? 0 : 0,
      boxShadow: state.isFocused ? 0 : 0,
      cursor: 'text',
      borderRadius: 0,
      borderBottom: 'solid 1px',
      backgroundColor: 'white',
    
    }),
  
    option: (styles, { isFocused }) => {
      return {
        ...styles,
        cursor: 'pointer',
        backgroundColor: isFocused ? 'white' : 'white',
        color: isFocused ? '#555' : '#2e3d66',
        lineHeight: 2,
    
      }
    },
  
    input: styles => ({
      ...styles,
      color: '#2e3d66',
    }),
  
    menu: styles => ({
      ...styles,
      marginTop: 0,
      boxShadow: 'none',
      borderRadius: 0,
    
    }),
  
    singleValue: styles => ({
      ...styles,
      color: 'rgba(255, 80, 86)',
    }),
  }

// styled components

const Menu = props => {
    const shadow = 'hsla(218, 50%, 10%, 0.1)';
    return (
      <div
        css={{
          backgroundColor: 'white',
          color: 'white',
          borderRadius: 4,
          boxShadow: `0 0 0 1px ${shadow}, 0 4px 11px ${shadow}`,
          marginTop: 8,
          position: 'absolute',
          zIndex: 2,
          
        }}
        {...props}
      />
    );
  };
  const Blanket = props => (
    <div
      css={{
        bottom: 0,
        left: 0,
        top: 0,
        right: 0,
        position: 'fixed',
        zIndex: 1,
        backgroundColor: 'white',
       
      }}
      {...props}
    />
  );
  const Dropdown = ({ children, isOpen, target, onClose }) => (
    <div css={{ position: 'relative', backgroundColor: 'white' }}>
      {target}
      {isOpen ? <Menu>{children}</Menu> : null}
      {isOpen ? <Blanket onClick={onClose} /> : null}
    </div>
  );
  const Svg = p => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      focusable="false"
      role="presentation"
      {...p}
    />
  );
  const DropdownIndicator = () => (
    <div css={{ color: 'white', height: 24, width: 32 }}>
      <Svg>
        <path
          d="M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
          fill="white"
          fillRule="evenodd"
        />
      </Svg>
    </div>
  );
  const ChevronDown = () => (
    <Svg style={{ marginRight: -6 }}>
      <path
        d="M8.292 10.293a1.009 1.009 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0z"
        fill="white"
        fillRule="evenodd"
      />
    </Svg>
  );



export default SelectCurrency;
