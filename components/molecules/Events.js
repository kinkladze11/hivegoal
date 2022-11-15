import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Tab from '@components/atoms/Tab'

import { ActionTypes, useGlobalState } from '../../global_state'

const Events = ({ events }) => {
  return (
    <div>
      <Tab name="Events" />

      <div className="scrollbar-hidden hide-scroll-bar m-auto flex w-full  overflow-x-auto xl:w-2/3  ">
        {events?.map((item, i) => {
          return (
            <div key={i} className="m-2 w-96 px-5 ">
              <h2 className="h-8 w-10  rounded-full border text-center">{item.time.elapsed}</h2>

              {item.detail == 'Yellow Card' ? (
                <div className="text-center ">
                  <img
                    className="m-auto"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4sf_ORfhcEzpNdPFwt_L_jYhu3PTQo7WUXY04h2rVv4_RWxgXKLRIhbU1LrgUArolh6k&usqp=CAU"
                    alt=""
                  />
                  <span className="text-[11px] font-bold  ">{item.player.name}</span>
                </div>
              ) : (
                ''
              )}
              {item.detail == 'Red Card' ? (
                <div>
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <span className="text-[11px] font-bold  ">{item.player.name}</span>
                </div>
              ) : (
                ''
              )}
              {item.type == 'subst' ? (
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbqdMqvovqZZ9EfHcj0X99tC7tN-ipmGTQlOKF4jOgKoCCeqrQgIYi0r9XOZ1O40uRBlQ"
                    alt=""
                  />
                  <span className="text-[11px] font-bold  ">{item.player.name}</span>
                </div>
              ) : (
                ''
              )}
              {item.type == 'Goal' ? (
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUUDA5xFbLe9did3OLzP9ePUhwHNzSEHpy0w5KV4pnnoVfftmT8ajth2-UYdddk9CYHdA&usqp=CAU"
                    alt=""
                  />
                  <span className="text-[11px] font-bold  ">{item.player.name}</span>
                </div>
              ) : (
                ''
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Events
