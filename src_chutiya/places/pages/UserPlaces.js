import React from 'react'
import PlaceList from '../components/PlaceList'
import {useParams} from 'react-router-dom'

const DUMMY_PLACES = [
    {
        id:'p1',
        title:'Empire State Building',
        description:'One of the most famous skt scrapers in the world',
        imageUrl:'https://cropper.watch.aetnd.com/public-content-aetn.video.aetnd.com/video-thumbnails/AETN-History_VMS/21/202/tdih-may01-HD.jpg?w=1440',
        address:'20 W 34th St, New York, NY 10001, United States',
        location:{
            lat:40.7484193,
            lng:-74.0557043 
        },
        creator:'u1'
    },
    {
        id:'p2',
        title:'Empire State Building',
        description:'One of the most famous skt scrapers in the world',
        imageUrl:'https://cropper.watch.aetnd.com/public-content-aetn.video.aetnd.com/video-thumbnails/AETN-History_VMS/21/202/tdih-may01-HD.jpg?w=1440',
        address:'20 W 34th St, New York, NY 10001, United States',
        location:{
            lat:40.7484193,
            lng:-74.0557043 
        },
        creator:'u2'
    }
]

const UserPlaces = () => {
    const userId= useParams().userId //route params
    const loadedPlaces = DUMMY_PLACES.filter(place=> place.creator===userId)

    return(
    <PlaceList items={loadedPlaces}/>
)
}

export default UserPlaces