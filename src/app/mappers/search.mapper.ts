import { Video } from "../models/video.model"

export const mapYoutubeRawDataToVideo = (rawData: any): Video => ({
    id: rawData.id.videoId,
    imageSrc: rawData.snippet.thumbnails.medium.url,
    title: rawData.snippet.title
})