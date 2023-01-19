import './styles/global.css'
import Habit from "./components/Habit";

export default function App() {
  return (
    <div>
      <Habit completed={10} />
    </div>
  )
}
