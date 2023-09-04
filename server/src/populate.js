require("dotenv").config();
const mongoose = require("mongoose");
const VidInfoModel = require("./db/vidInfo.model");
//const mongoUrl = "mongodb://localhost:27017/Shrek";

const { apiKey, mongoUrl } = process.env;

if (!apiKey) {
    console.log("no api key found");
    process.exit(1);
}

const gatherVids = async () => {
    try {
        const keyword = "shrek";
        const maxResults = 50;
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet
&q=${keyword}
&type=video
&maxResults=${maxResults}
&key=${apiKey}`
        );
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return 500;
    }
}


const populateShreks = async () => {
    await VidInfoModel.deleteMany({});

    const vids = await gatherVids();

    if (vids === 500) return;

    const shreks = vids.items.map(item => ({
        name: item.snippet.title,
        url: "https://www.youtube.com/embed/" + item.id.videoId,
        thumbnailUrl: item.snippet.thumbnails.high.url,
        characters: [],
    }));

    await VidInfoModel.create(...shreks);
    console.log("shreks filled");
}


const main = async () => {
    await mongoose.connect(mongoUrl);

    await populateShreks();

    await mongoose.disconnect();
};

main().catch((error) => {
    console.error(error);
    process.exit(1);
})
