import React, {useState } from 'react';

import { HeaderBar } from './HeaderBar.js';
import { ChannelList } from './ChannelList.js';
import { ChatPane } from './ChatPane.js';
import * as Static from './StaticPages.js';

function App(props) {
  const channelNamesArray = ["general", "channel-2", "birds", "dank-memes", "random"];

  const currentChannel = "general";

  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar />
      <div className="row flex-grow-1">
        <div className="col-3">
          <ChannelList 
            channelNames={channelNamesArray} 
            currentChannel={currentChannel} 
            />
        </div>
        <div className="col d-flex flex-column">
          <ChatPane currentChannel={currentChannel} />
        </div>
      </div>
    </div>
  );
}

export default App;