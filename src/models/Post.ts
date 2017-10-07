import * as mongoose from "mongoose";
import { UserModel } from "./User";
export type PostModel = mongoose.Document & {
    title: string,
    body: string,
    datePosted: Date,
    author: UserModel[],
    groups: string[], // TODO Type with Group
    tags: string[],
    revisions: string[] // TODO Type with revisions
};

const postSchema = new mongoose.Schema({
    title: String,
    body: String,
    datePosted: Date,
    author: JSON,
    groups: JSON, // TODO Type with Group
    tags: JSON,
    revisions: JSON // TODO Type with revisions
}, {timestamps: true});

const Post = mongoose.model("Post", postSchema);
export default Post;