import TechStack from "./TechStack";


function Profile(props) {
    return(
        <>
            <p>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile image" height={100} width={100} style={{borderRadius: '50%'}}></img><br/>
                My Name is { props.name } and I am a { props.job } and I formerly work as { props.past_job }. <br/>
                At the moment I am currently studying these following tech stacks.<br/>
                <TechStack></TechStack>
            </p>
        </>
    )
}

export default Profile;