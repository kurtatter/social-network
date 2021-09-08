import style from './Profile.module.css';

const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
            </div>
            <div>
                ava + description
            </div>
            <div>
                My post
                <div>
                    New post
                </div>
                <div>
                    <div className={style.item}>
                        <a>post 1</a>
                    </div>
                    <div className={style.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;