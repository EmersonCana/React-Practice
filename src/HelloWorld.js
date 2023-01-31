import Location from "./Location";

function HelloWorld(props) {
    return(
        <>
            <p>Hello!!!</p>
            <Location name={props.name} city={props.city}></Location>
        </>
    )
}

export default HelloWorld;