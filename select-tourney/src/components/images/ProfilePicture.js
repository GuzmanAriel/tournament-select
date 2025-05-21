import ProfilePic from '../../assets/images/rocco.jpg';

const ProfilePicture = () => {
    return (
        <div 
            className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-lg rounded-circle"
            style={{ width: '65px', height: '65px' }}>
            <img src={ProfilePic} alt="User Profile" className="w-full h-full object-cover" />
        </div>
    )
}

export default ProfilePicture;