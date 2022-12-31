import "dotenv/config.js"
import "../../config/database.js"
import { Category } from "../Category.js"


let categories = [
    {
        name: "burn the witch",
        ranking: 1,
        examples: ["https://storage.googleapis.com/minga/manga__burn_the_witch.jpg", "2"],
        detail: "Those who live in Reverse London can see supernatural creatures like dragons. Noel and Nini work to help promote coexistence between these creatures and humans, but sometimes they must undergo missions to exterminate these creatures.",
        user_id: "63afa85fd4dbbd47b1f13537"
    },{
        name: "burn the witch",
        ranking: 2,
        examples: ["https://storage.googleapis.com/minga/manga__burn_the_witch.jpg", "2"],
        detail: "Those who live in Reverse London can see supernatural creatures like dragons. Noel and Nini work to help promote coexistence between these creatures and humans, but sometimes they must undergo missions to exterminate these creatures.",
        user_id: "63afa85fd4dbbd47b1f13537"
    },{
        name: "burn the witch",
        ranking: 3,
        examples: ["https://storage.googleapis.com/minga/manga__burn_the_witch.jpg", "2"],
        detail: "Those who live in Reverse London can see supernatural creatures like dragons. Noel and Nini work to help promote coexistence between these creatures and humans, but sometimes they must undergo missions to exterminate these creatures.",
        user_id: "63afa85fd4dbbd47b1f13537"
    },{
        name: "burn the witch",
        ranking: 4,
        examples: ["https://storage.googleapis.com/minga/manga__burn_the_witch.jpg", "2"],
        detail: "Those who live in Reverse London can see supernatural creatures like dragons. Noel and Nini work to help promote coexistence between these creatures and humans, but sometimes they must undergo missions to exterminate these creatures.",
        user_id: "63afa85fd4dbbd47b1f13537"
    }
]

Category.insertMany(categories)