export interface Tweet extends TweetBody{
    _id : string
    _createdAt: string
    _updatedAt: string
    _rev : string
    _type : 'tweet'
    blockTweet : boolean
}

export type TweetBody = {
    text: string
    username: string
    profileimg: string
    image?: string
}

export interface Comment extends CommentBody{
    _id : string
    _createdAt: string
    _updatedAt: string
    _rev : string
    _type : 'comment'
    tweet:{
        _ref:string
        _type: 'reference'

    }
}
export type CommentBody = {
    comment: string
    tweetId: string
    username: string
    profileimage: string
}
