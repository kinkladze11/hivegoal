/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react'
import axios from 'axios'

import Container from '@components/atoms/Container'
import Wrapper from '@components/atoms/Wrapper'

import { ActionTypes, useGlobalState } from '../../global_state'
import Cards from '../atoms/Card'
import Link from 'next/link'

const Carousel = (props) => {
  return (
    <Wrapper>
      <Container className="scrollbar-hidden  flex overflow-x-scroll bg-white p-2">
        <div className="hide-scroll-bar flex flex-nowrap ">
          {props.fixtures.map((item, i) => {
            return (
              <Link href={`/match/${item.fixture.id}`}>
              <a >
              <Cards
                key={i}
                team1={item.teams.home.name}
                team2={item.teams.away.name}
                team1logo={item.teams.home.logo}
                team2logo={item.teams.away.logo}
                score1={item.score.halftime.home}
                score2={item.score.halftime.away}
              />
              </a>
              </Link>
            )
          })}
        </div>
      </Container>
    </Wrapper>
  )
}

export default Carousel
