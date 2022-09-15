import { useEffect, useMemo, useState } from "react"

const personList = [{ name: 'Gino', age: 35, ID: 1 }, { name: 'Carlo', age: 25, ID: 2 }, { name: 'Chiara', age: 15, ID: 3 }, { name: 'Franco', age: 18, ID: 4 }]
export const FilterdList = ({ x = personList }) => {
    const [list, SetList] = useState(x)

    const filterList = useMemo(() => list.filter(person => person.age >= 18), [list])
    useEffect(() => { SetList(filterList) }, [])

    return <div>
        <h3>Over 18</h3>
        <ul>
            {list.map(item => <li key={item.ID}>{item.name}</li>)}
        </ul>
    </div>
}