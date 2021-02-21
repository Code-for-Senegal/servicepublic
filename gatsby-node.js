const fs = require("fs")
const yaml = require("js-yaml")
exports.createPages = ({ actions }) => {
    const { createPage } = actions
    const ymlDoc = yaml.safeLoad(fs.readFileSync("./src/content/particuliers.yml", "utf-8"))
    const pathParent = ymlDoc.path
    let topics = []

    ymlDoc.topics.forEach(topic => {
        // topics.push({ title: topic.title, icon: topic.icon, path: `${pathParent}${topic.path}` })
        createPage({
            path: topic.path,
            component: require.resolve("./src/templates/topicTemplate.js"),
            context: {
                title: topic.title,
                icon: topic.icon,
                subtopics: topic.subtopics
            },
        })
    })
}