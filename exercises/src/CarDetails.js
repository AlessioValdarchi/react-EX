import { useEffect, useRef, useState } from "react"

export function CarDetails({ initialData = { model: 'Panda', year: 1970, color: 'green' } }) {
    const formRef = useRef(null)
    // const [value, setValue] = useState(initialData)


    // useEffect(() => {
    //     setValue(() => {
    //         formRef.current.model.value = initialData.model
    //         formRef.current.year.value = initialData.year
    //         formRef.current.color.value = initialData.color
    //     })
    //     console.log('hh');
    // }, []);

    useEffect(() => {
        {
            formRef.current.reset()
        }
    }, [initialData])

    return (<div>
        <form ref={formRef} >
            <input name="model" defaultValue={initialData.model} />
            <input name="year" defaultValue={initialData.year} />
            <input name="color" defaultValue={initialData.color} />
        </form>
    </div>)
}