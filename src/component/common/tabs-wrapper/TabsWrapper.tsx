import style from './tabsWrapper.module.scss';
import { Tabs, Tab, Box } from '@mui/material';
import { FC, useState, useMemo } from 'react';

interface ITabsWrapper {
    tabsNames: string[];
    tabsContains: React.ReactNode[];
}

const tabWrapperStyle = {
    '& .MuiTabs-indicator': {
        backgroundColor: 'red',
    },
};

const tabStyle = {
    '&.Mui-selected': {
        color: 'white',
    },
};

export const TabsWrapper: FC<ITabsWrapper> = ({ tabsNames, tabsContains }) => {
    const [tabIndex, setTabIndex] = useState(0);

    const tabsHeader = useMemo(
        () =>
            tabsNames.map((tabName, i) => (
                <Tab
                    key={tabName}
                    label={tabName}
                    id={i.toString()}
                    sx={tabStyle}
                />
            )),
        [tabsNames]
    );

    const tabsPanels = useMemo(
        () =>
            tabsContains.map((contain, i) => (
                <Box
                    key={i}
                    hidden={tabIndex !== i}
                    className={style.tabContain}
                >
                    {contain}
                </Box>
            )),
        [tabIndex, tabsContains]
    );

    const tabIndexHandler = (event: React.SyntheticEvent, newIndex: number) => {
        setTabIndex(newIndex);
    };

    return (
        <div>
            <Box sx={tabWrapperStyle}>
                <Tabs
                    scrollButtons='auto'
                    variant='scrollable'
                    value={tabIndex}
                    onChange={tabIndexHandler}
                    className={style.tabPanel}
                >
                    {tabsHeader}
                </Tabs>
                {tabsPanels}
            </Box>
        </div>
    );
};
