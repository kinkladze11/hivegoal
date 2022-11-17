import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import priority from "../config/league_priority.json";
import { getUser, signOut } from "../helpers/firebase";

import dummy_data from "./data.json";
const GlobalStateContext = createContext(undefined);
const auth = getAuth();
const refreshRate = {
  fixtures: 24 * 60 * 60,
  leagues: 24 * 60 * 60,
  match: 24 * 60 * 60,
  league: 24 * 60 * 60,
  team: 24 * 60 * 60,
  player: 24 * 60 * 60,
};
const initialState = {
  fixtures: [],
  leagues: [],
  user: undefined,
  match: {},
  league: {},
  team: {},
  player: {},
};
const calling = {};
export const ActionTypes = {
  GET_MATCH: "GET_MATCH",
  GET_STANDINGS: "GET_STANDINGS",
  GET_TOP_SCORERS: "GET_TOP_SCORERS",
  GET_TOP_ASSISTS: "GET_TOP_ASSISTS",
  GET_TEAM: "GET_TEAM",
  GET_FIXTURES: "GET_FIXTURES",
  GET_LEAGUES: "GET_LEAGUES",
  GET_EVENTS: "GET_EVENTS",
  GET_LINEUPS: "GET_LINEUPS",
  GET_SQUAD: "GET_SQUAD",
  GET_PLAYER: "GET_PLAYER",
  GET_TROPHIES: "GET_TROPHIES",
  GET_TRANSFERS: "GET_TRANSFERS",
  GET_FIXTURE_STATISTICS: "GET_FIXTURE_STATISTICS",
  GET_FIXTURE_PREDICTIONS: "GET_FIXTURE_PREDICTIONS",
  SET_FIXTURE_PREDICTIONS: "SET_FIXTURE_PREDICTIONS",
  SET_FIXTURE_STATISTICS: "SET_FIXTURE_STATISTICS",
  SET_PLAYER: "SET_PLAYER",
  SET_TROPHIES: "SET_TROPHIES",
  SET_TRANSFERS: "SET_TRANSFERS",
  SET_SQUAD: "SET_SQUAD",
  SET_LINEUPS: "SET_LINEUPS",
  SET_FIXTURES: "SET_FIXTURES",
  SET_STATE: "SET_STATE",
  SET_LEAGUES: "SET_LEAGUES",
  SET_USER: "SET_USER",
  SET_EVENTS: "SET_EVENTS",
  SET_TEAM: "SET_TEAM",
  SET_MATCH: "SET_MATCH",
  SET_LEAGUE: "SET_LEAGUE",
};

function reducer(state, action) {
  switch (action.type) {
    case ActionTypes.GET_FIXTURES: {
      if (state.fixtures.length > 0) return { ...state };
      getFromFootballAPI(
        "https://us-central1-viuscore.cloudfunctions.net/default/football/fixtures?status=NS"
      ).then((res) => {
        if (res)
          action.payload.dispatch({
            type: ActionTypes.SET_FIXTURES,
            payload: res,
          });
      });
      return { ...state };
    }
    case ActionTypes.GET_LINEUPS: {
      if (state.match[action.payload.id]?.lineups) return { ...state };
      getFromFootballAPI(
        `https://us-central1-viuscore.cloudfunctions.net/default/football/lineups?match=${action.payload.id}&live=all`
      ).then((res) => {
        if (res)
          action.payload.dispatch({
            type: ActionTypes.SET_LINEUPS,
            payload: { id: action.payload.id, lineups: res },
          });
      });
      return { ...state };
    }
    case ActionTypes.GET_LEAGUES: {
      if (state.leagues.length > 0) return { ...state };
      getFromFootballAPI(
        "https://us-central1-viuscore.cloudfunctions.net/default/football/leagues"
      ).then((res) => {
        if (res)
          action.payload.dispatch({
            type: ActionTypes.SET_LEAGUES,
            payload: res,
          });
      });
      return { ...state };
    }
    case ActionTypes.GET_MATCH: {
      if (state.match[action.payload.id]) return { ...state };
      getFromFootballAPI(
        `https://us-central1-viuscore.cloudfunctions.net/default/football/match?match=${parseInt(
          action.payload.id
        )}`
      ).then((res) => {
        if (res) {
          action.payload.dispatch({
            type: ActionTypes.SET_MATCH,
            payload: res,
          });
        }
      });
      return { ...state };
    }
    case ActionTypes.GET_PLAYER: {
      if (state.player[action.payload.id]) return { ...state };
      getFromFootballAPI(
        `https://us-central1-viuscore.cloudfunctions.net/default/football/player?player=${parseInt(
          action.payload.id
        )}&season=2022`
      ).then((res) => {
        if (res) {
          action.payload.dispatch({
            type: ActionTypes.SET_PLAYER,
            payload: res,
          });
        }
      });
      return { ...state };
    }
    case ActionTypes.GET_TRANSFERS: {
      if (state.player[action.payload.id]?.transfers) return { ...state };
      getFromFootballAPI(
        `https://v3.football.api-sports.io/transfers?player=${action.payload.id}`
      ).then((res) => {
        if (res ) {
          action.payload.dispatch({
            type: ActionTypes.SET_TRANSFERS,
            payload: res,
          });
        }
      });
      return { ...state };
    }
    case ActionTypes.GET_TROPHIES: {
      if (state.player[action.payload.id]?.trophies) return { ...state };
      getFromFootballAPI(
        `https://us-central1-viuscore.cloudfunctions.net/default/football/trophies?player=${action.payload.id}`
      ).then((res) => {
        if (res) {
          action.payload.dispatch({
            type: ActionTypes.SET_TROPHIES,
            payload: { id: action.payload.id, res },
          });
        }
        console.log(res);
      });
      return { ...state };
    }
    case ActionTypes.GET_STANDINGS: {
      if (state.league[action.payload.id]?.standings) return { ...state };
      getFromFootballAPI(
        `https://us-central1-viuscore.cloudfunctions.net/default/football/standings?league=${action.payload.id}&season=2021`
      ).then((res) => {
        if (res) {
          action.payload.dispatch({
            type: ActionTypes.SET_LEAGUE,
            payload:res,
          });
        }
      });
      return { ...state };
    }
    case ActionTypes.GET_TOP_SCORERS: {
      if (state.league[action.payload.id]?.topScorers) return { ...state };
      getFromFootballAPI(
        `https://us-central1-viuscore.cloudfunctions.net/default/football/top-scorers?season=2021&league=${action.payload.id}`
      ).then((res) => {
        if (res) {
          action.payload.dispatch({
            type: ActionTypes.SET_LEAGUE,
            payload: { league: { id: action.payload.id, topScorers: res } },
          });
        }
      });
      return { ...state };
    }
    case ActionTypes.GET_TOP_ASSISTS: {
      if (state.league[action.payload.id]?.topAssists) return { ...state };
      getFromFootballAPI(
        `https://us-central1-viuscore.cloudfunctions.net/default/football/topassists?season=2021&league=${action.payload.id}`
      ).then((res) => {
        if (res) {
          action.payload.dispatch({
            type: ActionTypes.SET_LEAGUE,
            payload: { league: { id: action.payload.id, topAssists: res } },
          });
        }
      });
      return { ...state };
    }
    case ActionTypes.GET_TEAM: {
      // if (state.team[action.payload.id]){
      //   console.log(state.team[action.payload.id]);
      //   return { ...state }};
      getFromFootballAPI(
        `https://us-central1-viuscore.cloudfunctions.net/default/football/team?team=${action.payload.id}`
      ).then((res) => {
        if (res) {
          action.payload.dispatch({
            type: ActionTypes.SET_TEAM,
            payload: { id: action.payload.id, team: res },
          });
          console.log(res)
        }
      });
      return { ...state };
    }
    case ActionTypes.GET_SQUAD: {
      if (state.team[action.payload.id]?.squad) return { ...state };
      getFromFootballAPI(
        `https://us-central1-viuscore.cloudfunctions.net/default/football/squad?team=${action.payload.id}`
      ).then((res) => {
        if (res) {
          action.payload.dispatch({
            type: ActionTypes.SET_SQUAD,
            payload: { id: action.payload.id, squad: res },
          });
        }
      });
      return { ...state };
    }
    case ActionTypes.GET_EVENTS: {
      if (state.match[action.payload.id]?.events) return;
      getFromFootballAPI(
        `https://us-central1-viuscore.cloudfunctions.net/default/football/events?match=${action.payload.id}`
      ).then((res) => {
        if (res) {
          action.payload.dispatch({
            type: ActionTypes.SET_EVENTS,
            payload: { id: action.payload.id, events: res },
          });
        }
      });
      return { ...state };
    }
    case ActionTypes.GET_FIXTURE_STATISTICS: {
      if (state.match[action.payload.id]?.stats?.length > 0) return;
      getFromFootballAPI(
        `https://us-central1-viuscore.cloudfunctions.net/default/football/statistics?match=${action.payload.id}&team=${action.payload.team1}`
      ).then((res) => {
        if (res) {
          action.payload.dispatch({
            type: ActionTypes.SET_FIXTURE_STATISTICS,
            payload: { id: action.payload.id, events: res },
          });
        }
      });
      getFromFootballAPI(
        `https://us-central1-viuscore.cloudfunctions.net/default/football/statistics?match=${action.payload.id}&team=${action.payload.team2}`
      ).then((res) => {
        if (res) {
          action.payload.dispatch({
            type: ActionTypes.SET_FIXTURE_STATISTICS,
            payload: { id: action.payload.id, events: res },
          });
        }
      });
      return { ...state };
    }
    case ActionTypes.GET_FIXTURE_PREDICTIONS: {
      if (state.match[action.payload.id]?.predictions) return;
      getFromFootballAPI(
        `https://us-central1-viuscore.cloudfunctions.net/default/football/predictions?match=${action.payload.id}`
      ).then((res) => {
        if (res) {
          action.payload.dispatch({
            type: ActionTypes.SET_FIXTURE_PREDICTIONS,
            payload: { id: action.payload.id, events: res },
          });
        }
      });
      return { ...state };
    }
    case ActionTypes.SET_SQUAD: {
      const newState = { ...state };
      newState.team[action.payload.id] = {
        ...newState.team[action.payload.id],
        squad: action.payload.squad[0],
      };
      return newState;
    }
    case ActionTypes.SET_EVENTS: {
      const newState = { ...state };
      newState.match[action.payload.id] = {
        ...newState.match[action.payload.id],
        events: action.payload.events,
      };
      return newState;
    }
    case ActionTypes.SET_FIXTURE_PREDICTIONS: {
      const newState = { ...state };
      newState.match[action.payload.id] = {
        ...newState.match[action.payload.id],
        predictions: action.payload.events,
      };

      return newState;
    }
    case ActionTypes.SET_FIXTURE_STATISTICS: {
      const newState = { ...state };
      newState.match[action.payload.id] = {
        ...newState.match[action.payload.id],
        stats: [
          ...(newState.match[action.payload.id].stats || []),
          ...action.payload.events,
        ],
      };
      return newState;
    }
    case ActionTypes.SET_TEAM: {
      refresh("team");
      const newState = { ...state };
      newState.team[action.payload.id] = {
        ...newState.team[action.payload.id],
        ...action.payload.team[0],
      };
      return newState;
    }
    case ActionTypes.SET_LINEUPS: {
      const newState = { ...state };
      newState.match[action.payload.id] = {
        ...newState.match[action.payload.id],
        lineups: action.payload.lineups,
      };
      return newState;
    }
    case ActionTypes.SET_TRANSFERS: {
      const newState = { ...state };
      newState.player[action.payload.player.id] = {
        ...newState.player[action.payload.player.id],
        transfers: action.payload,
      };
      return newState;
    }
    case ActionTypes.SET_TROPHIES: {
      const newState = { ...state };
      newState.player[action.payload.id] = {
        ...newState.player[action.payload.id],
        trophies: action.payload.res,
      };
      return newState;
    }
    case ActionTypes.SET_MATCH: {
      refresh("match");
      console.log(action.payload)
      const newState = { ...state };
      newState.match[action.payload.fixture.id] = {
        ...newState.match[action.payload.fixture.id],
        ...action.payload,
      };
      return newState;
    }
    case ActionTypes.SET_PLAYER: {
      refresh("player");
      const newState = { ...state };
      newState.player[action.payload.player.id] = {
        ...newState.player[action.payload.player.id],
        ...action.payload,
      };
      return newState;
    }
    case ActionTypes.SET_LEAGUE: {
      refresh("league");

      const newState = { ...state };
      newState.league[action.payload.league.id] = {
        ...newState.league[action.payload.league.id],
        ...action.payload.league,
      };
      return newState;
    }
    case ActionTypes.SET_STATE: {
      return action.payload;
    }
    case ActionTypes.SET_FIXTURES: {
      refresh("fixtures");
      return {
        ...state,
        fixtures: action.payload.sort(
          (a, b) =>
            priority.imp_leagues.indexOf(a.league.id) -
            priority.imp_leagues.indexOf(b.league.id)
        ),
      };
    }
    case ActionTypes.SET_LEAGUES: {
      refresh("leagues");
      return { ...state, leagues: action.payload };
    }
    case ActionTypes.SET_USER: {
      return { ...state, user: action.payload };
    }
    default:
      return { ...state };
  }
}
function refresh(key) {
  const oldRaw = localStorage.getItem("lastUpdates");
  let old = {};
  if (oldRaw) {
    old = JSON.parse(oldRaw);
  }
  if (old[key]) {
    if (new Date().getTime() - old[key] > refreshRate[key] * 1000) {
      old[key] = new Date().getTime();
    }
  } else old[key] = new Date().getTime();
  localStorage.setItem("lastUpdates", JSON.stringify(old));
}
export const useGlobalState = () => useContext(GlobalStateContext);

async function getFromFootballAPI(url) {
  // if (!url.includes('https://v3.football.api-sports.io/teams?id=')) return null
  if (calling[url]) return null;
  calling[url] = true;
  console.log("FETCHING ->", url);
  try {
    const response = await axios.get(url);
    delete calling[url];
    return response.data.data;
  } catch (e) {
    console.error(e);
    delete calling[url];
    return null;
  }
}

export default function GlobalStateWrapper({ children }) {
  const [store, dispatch] = useReducer(
    (state, action) => {
      const resState = reducer(state, action);
      if (resState) {
        localStorage.setItem("state", JSON.stringify(resState));
        return resState;
      }
      return { ...state };
    },
    initialState,
    (arg) => {
      return arg;
    }
  );

  useEffect(() => {

    // localStorage.setItem('state', JSON.stringify(dummy_data))
    // let state = localStorage.getItem("state");
    // let lastUpdates = localStorage.getItem("lastUpdates");
    // if (lastUpdates && state) {
    //   state = JSON.parse(state);
    //   lastUpdates = JSON.parse(lastUpdates);
    //   const recoveredState = initialState;
    //
    //   Object.keys(lastUpdates).forEach((key) => {
    //     if (new Date().getTime() - lastUpdates[key] < refreshRate[key] * 1000) {
    //       recoveredState[key] = state[key];
    //     }
    //   });
    //   dispatch({ type: ActionTypes.SET_STATE, payload: recoveredState });
    // }
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getUser().then((user) =>
          dispatch({ type: ActionTypes.SET_USER, payload: user })
        );
      } else dispatch({ type: ActionTypes.SET_USER, payload: null });
    });
  }, []);

  return (
    <GlobalStateContext.Provider value={[store, dispatch]}>
      {children}
    </GlobalStateContext.Provider>
  );
}

// https://us-central1-viuscore.cloudfunctions.net/default/football/fixtures
