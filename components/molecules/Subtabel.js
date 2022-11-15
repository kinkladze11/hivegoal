import React from 'react'
import DataTable, { ExpanderComponentProps } from 'react-data-table-component'

const SubTable = () => {
  const columns = [
    {
      selector: (row) => row.Team1,
    },
    {
      selector: (row) => <img width={25} height={25} src={row.flag1} />,
    },
    {
      selector: (row) => row.score,
    },
    {
      selector: (row) => <img width={25} height={25} src={row.flag2} />,
    },
    {
      selector: (row) => row.Team2,
    },
  ]

  const data = [
    {
      id: 1,
      Team1: 'Barkelona',
      score: '3-2',
      flag1:
        'https://w7.pngwing.com/pngs/476/947/png-transparent-fc-barcelona-football-player-desktop-fc-barcelona-logo-shield-desktop-wallpaper.png',
      flag2: 'https://thumbs.dreamstime.com/b/mobile-173832438.jpg',
      Team2: 'Royal mardirid',
    },
    {
      id: 1,
      Team1: 'Barkelona',
      score: '3-2',
      flag1:
        'https://w7.pngwing.com/pngs/476/947/png-transparent-fc-barcelona-football-player-desktop-fc-barcelona-logo-shield-desktop-wallpaper.png',
      flag2: 'https://thumbs.dreamstime.com/b/mobile-173832438.jpg',
      Team2: 'Royal mardirid',
    },
    {
      id: 1,
      Team1: 'Barkelona',
      score: '3-2',
      flag1:
        'https://w7.pngwing.com/pngs/476/947/png-transparent-fc-barcelona-football-player-desktop-fc-barcelona-logo-shield-desktop-wallpaper.png',
      flag2: 'https://thumbs.dreamstime.com/b/mobile-173832438.jpg',
      Team2: 'Royal mardirid',
    },
    {
      id: 1,
      Team1: 'Barkelona',
      score: '3-2',
      flag1:
        'https://w7.pngwing.com/pngs/476/947/png-transparent-fc-barcelona-football-player-desktop-fc-barcelona-logo-shield-desktop-wallpaper.png',
      flag2: 'https://thumbs.dreamstime.com/b/mobile-173832438.jpg',
      Team2: 'Royal mardirid',
    },
    {
      id: 1,
      Team1: 'Barkelona',
      score: '3-2',
      flag1:
        'https://w7.pngwing.com/pngs/476/947/png-transparent-fc-barcelona-football-player-desktop-fc-barcelona-logo-shield-desktop-wallpaper.png',
      flag2: 'https://thumbs.dreamstime.com/b/mobile-173832438.jpg',
      Team2: 'Royal mardirid',
    },
    {
      id: 1,
      Team1: 'Barkelona',
      score: '3-2',
      flag1:
        'https://w7.pngwing.com/pngs/476/947/png-transparent-fc-barcelona-football-player-desktop-fc-barcelona-logo-shield-desktop-wallpaper.png',
      flag2: 'https://thumbs.dreamstime.com/b/mobile-173832438.jpg',
      Team2: 'Royal mardirid',
    },
    {
      id: 1,
      Team1: 'Barkelona',
      score: '3-2',
      flag1:
        'https://w7.pngwing.com/pngs/476/947/png-transparent-fc-barcelona-football-player-desktop-fc-barcelona-logo-shield-desktop-wallpaper.png',
      flag2: 'https://thumbs.dreamstime.com/b/mobile-173832438.jpg',
      Team2: 'Royal mardirid',
    },
  ]
  return (
    <div>
      <DataTable columns={columns} data={data} expandableRows />
    </div>
  )
}

export default SubTable
