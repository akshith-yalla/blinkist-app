import React from 'react';
import ExploreDropDown from './explore-dropdown';

const ExploreDropDownComponent = {
    title: "ORGANISMS/Explore Dropdown",
    component: ExploreDropDown
};

const Template = ()=>(
    <ExploreDropDown />
);

export const DemoExploreDropDown = Template.bind({});
DemoExploreDropDown.args={};

export default ExploreDropDownComponent;