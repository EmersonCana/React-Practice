import Count from '../Count'
import Login from './Login'

function Main() {
    return(
        <div className="main-body">
            <div className='row'>
                <div className='col-8 bg-dark'>
                    {/* Main content body */}
                </div>
                <div className='col-4 bg-light'>
                    <div className='row'>
                        <div className='col-6'>
                            <Login />
                        </div>
                        <div className='col-6 bg-danger p-0'>
                            <img src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?w=2000" alt='image' height='100%' width='100%' className='img-responsive'></img>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    ) 
}

export default Main;