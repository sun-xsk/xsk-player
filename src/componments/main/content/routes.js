import {Navigate} from "react-router-dom";
import Cont1 from "./cont1";
import Cont2 from "./cont2";
import Musics from "./songSheetDetail/compontents/musics"
import Commits from "./songSheetDetail/compontents/commits"
import SongSheetDetail from "./songSheetDetail";
import Broadcasting from "./cont2/compontents/broadcasting";
import Classes from "./cont2/compontents/classes";
import Ranking from "./cont2/compontents/ranking";
import Select from "./cont2/compontents/select";
import Singer from "./cont2/compontents/singer";
import Search from "./search"


const routers=[
  {
    path: "/recommend",
    element:<Cont1/>
  },
  {
    path:'/search',
    element:<Search/>
  },
  {
    path: "/musicHome",
    element:<Cont2/>,
    children: [
      {
        path: "broadcasting",
        element:<Broadcasting />
      },
      {
        path: "classes",
        element:<Classes/>
      },
      {
        path: "ranking",
        element:<Ranking />
      },
      {
        path: "select",
        element:<Select/>
      },
      {
        path: "singer",
        element:<Singer />
      },
      {
        path: "",
        element:<Navigate to={"select"} replace/>
      }
    ]
  },
  {
    path: "/songSheetDetail/:id",
    element:<SongSheetDetail/>,
    exact: true,
    children: [
      {
        path: "commits",
        element:<Commits/>
      },
      {
        path: "musics",
        element:<Musics/>
      },
      {
        path: "",
        element:<Navigate to={"musics"} replace/>
      }
    ]
  },
  {
    path: "",
    element:<Navigate to={"/recommend"} replace/>
  }
]


export default routers