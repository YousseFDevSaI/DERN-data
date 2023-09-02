export interface Geotag {
    id: string,
    name: string,
    place_type: string,
    full_name: string,
    country: string,
    country_code: string,
    coordinates: {
        lat: number
        long: number
    }
}

export interface Tweet{
    id:string,
    userid: string,
    username: string,
    text: string,
    date: string,
    geo: Geotag
}

export interface vendor {
    name: string,
    description: string,
    image: string,
    twitterid: string,
    tweets: Tweet[]
    created: number,
    updated: number,
}