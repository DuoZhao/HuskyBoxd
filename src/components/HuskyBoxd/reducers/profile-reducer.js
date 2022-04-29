// const profileData=[ {
//     firstName: "Jiedong", lastName: "Lang", handle: "Code Elite",
//     profilePicture: "../pictures/coder2.png",     bannerPicture: "../pictures/jojo.webp",
//     bio: "Student, Data Scientist, Algorithm Engineer, adept at data mining / deep learning / data modeling, has experience on Bayesian Biostatistics / Quantitative Finance",
//     website: "youtube.com/webdevtv",
//     location: "Boston, MA",    dateOfBirth: "3/1998",    dateJoined: "12/2020",
//     films: 1638, thisyear: 57, lists: 12,   followingCount: 666,    followersCount: 0,
// } ]
//
// const ProfileReducer = () => {
//     return profileData;
// }
//
// export default ProfileReducer;
//

import user from '../data/profile.json';
import {FIND_USER_BY_ID, FIND_USER_IMG_BY_ID} from "../actions/profile-actions";

const profileReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_USER_BY_ID:
            return action.userInfo
        // case FIND_USER_IMG_BY_ID:
        //     return action.userImg
        default:
            return user
    }
};

export default profileReducer;