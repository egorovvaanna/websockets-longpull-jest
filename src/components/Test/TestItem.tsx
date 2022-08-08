import { FC } from "react"



type Prop = {
    item?: string
}
export const TestItem: FC <Prop> = ({item})=>{
    
    return(
        <div>
            {item ? item : "have no item yet"}
        </div>
    )
}