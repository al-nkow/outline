import React, { useState } from 'react'; // { useState, useEffect }
import { ButWrap, Buttons, Button, MenuItem, Tabs, Tab, Files, File } from './statistic-parts';
import { menu } from './statistic-data';

export default function () {
  const [charter, setCharter] = useState();
  const [tabs, setTabs] = useState();
  const [index, setIndex] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   console.log('>>>>>>', tabs);
  // });

  return (
    <div>
      <Buttons>
        {menu.map(but => (
          <ButWrap key={but.id}>
            <Button>{but.name}</Button>
            {
              but.items.map(item => (
                <MenuItem
                  key={item.id}
                  onClick={() => { setTabs(item.tabs); setCharter(item.id); setIndex(0) }}
                  className={item.id === charter ? 'active' : ''}
                >
                  {item.name}
                </MenuItem>
              ))
            }
          </ButWrap>
        ))}
      </Buttons>

      {
        tabs && tabs.length ? (
          <Tabs>
            {
              tabs.map((tab, i) => (
                <Tab
                  key={i}
                  onClick={() => setIndex(i)}
                  className={i === index ? 'active' : ''}
                >
                  {tab.name}
                </Tab>
              ))
            }
          </Tabs>
        ) : null
      }

      {
        tabs && tabs[index] ? (<Files>
          <File>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
            <span>{tabs[index].tmpAddr}</span>
            <b>{tabs[index].tmpName}</b>
          </File>
            {
              tabs[index].ctrlName ? (<File>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
                <span>{tabs[index].ctrlAddr}</span>
                <b>{tabs[index].ctrlName}</b>
              </File>) : null
            }
          {
            tabs[index].sortName ? (<File>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
              <span>{tabs[index].sortAddr}</span>
              <b>{tabs[index].sortName}</b>
            </File>) : null
          }
        </Files>) : null
      }
    </div>
  );
}