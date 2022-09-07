export interface Tweet extends TweetBody{
    _id : string
    _createdAt: string
    _updatedAt: string
    _rev : string
    _type : 'tweet'
    blockTweet : boolen
}

export type TweetBody = {
    text: string
    username: string
    profileimg: string
    image?: string
}