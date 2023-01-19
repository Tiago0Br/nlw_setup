interface HabitProps {
    completed: number
}

export default function Habit(props: HabitProps) {
    return (
        <div className="bg-zinc-900 w-10">{ props.completed }</div>
    )
}