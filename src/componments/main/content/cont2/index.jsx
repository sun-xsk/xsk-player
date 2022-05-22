import { NavLink, Outlet } from 'react-router-dom'
import "./index.css"

export default function Content() {

  return (
    <div className="cont2-father">
      <div className="cont2-title">
        <NavLink className="cont2-nav" to={`/musicHome/select`}>精选</NavLink>
        <NavLink className="cont2-nav" to={`/musicHome/ranking`}>排行</NavLink>
        <NavLink className="cont2-nav" to={`/musicHome/singer`}>歌手</NavLink>
        <NavLink className="cont2-nav" to={`/musicHome/classes`}>分类歌单</NavLink>
        <NavLink className="cont2-nav" to={`/musicHome/broadcasting`}>有声电台</NavLink>
      </div>

      <div>
        <Outlet />
      </div>

    </div>
  )
}
