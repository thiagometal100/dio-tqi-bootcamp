import styled from "styled-components";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
font-size: 16px;
width:100%;
margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
list-style-type:none;
padding:4px;
display:flex;
margin:0px;
`;

WrapperTabList.tabsRole = 'TabList';

export const WrapperTabPanel = styled(TabPanel)`
padding: 16px;
display: none;

&.is-selected{
    display:block;
}
`;

WrapperTabPanel.tabsRole = 'TabPanel';

export const WrapperTab = styled(Tab)`
border-radius: 16px;
border: 1px solid;
padding: 16px;
user-select: none;
cursor: pointer;
box-shadow: 0 0 1em #ccc;
z-index: 99999;
margin: 8px;
&:focus{
    outline: none;
}
&.is-selected{
    box-shadow: 5px 5px 1px black;
}
`;

WrapperTab.tabsRole = 'Tab';

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;