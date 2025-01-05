import {FC, ReactNode} from "react";

type MyComponentsPropType = {
    title:string;
    children?:ReactNode;

};
const MyComponents: FC <MyComponentsPropType> =({title,children})=> {
    return (<div className={'text-3xl font-bold underline'}>
            <h2> {title} </h2>
            <p> {children}</p>
        </div>
    );
};
export default MyComponents;