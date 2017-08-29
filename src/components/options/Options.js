import React, { PropTypes } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import OutlineContent from './OutlineContent';
import NotesContent from './NotesContent';
import SearchContent from './SearchContent';
import ProgressBar from './ProgressBar';
import styles from './styles';

function Options({ menuState, getProductList, handleSelectItemPlayer }) {
  return (
    <div style={menuState ? styles.disable : styles.container}>
      <h4>Statement of Finanical Position</h4>
      <div>
        <div>
          <Tabs>
            <TabList>
              <Tab>Outline</Tab>
              <Tab>Notes</Tab>
              <Tab>Search</Tab>
            </TabList>
            <TabPanel>
              <OutlineContent getProductList={getProductList} handleSelectItemPlayer={handleSelectItemPlayer}/>
            </TabPanel>
            <TabPanel>
              <NotesContent />
            </TabPanel>
            <TabPanel>
              <SearchContent handleSelectItemPlayer={handleSelectItemPlayer}/>
            </TabPanel>
          </Tabs>
        </div>
        <div style={styles.progress}>
          <ProgressBar />
        </div>
      </div>
    </div>
  );
}
Options.PropTypes = {
  menuState: PropTypes.bool,
  getProductList: PropTypes.array,
  handleSelectItemPlayer: PropTypes.func,
};
Options.defaultProps = {
  menuState: null,
  getProductList: null,
  handleSelectItemPlayer: () => {},
};
export default Options;
