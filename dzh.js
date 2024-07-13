const dzh = {
    objectTypes : {
        heading : "heading",
        subHeading : "subHeading",
        link : "link",
        block : "block",
    },
    int ( command , objectType , parentQuery , objectId , styleProperty , styleValue ) {
        if (typeof command == "string") {
            if (command == "add") {
                if (objectType == this.objectTypes.heading) {
                    const object = document.createElement("h1")
                    object.id = objectId
                    object.style.setProperty(styleProperty, styleValue)
                    document.querySelector(parentQuery).appendChild(object)
                }
                if (objectType == this.objectTypes.subHeading) {
                    const object = document.createElement("h3")
                    object.id = objectId
                    object.style.setProperty(styleProperty, styleValue)
                    document.querySelector(parentQuery).appendChild(object)
                }
                if (objectType == this.objectTypes.link) {
                    const object = document.createElement("a")
                    object.id = objectId
                    object.style.setProperty(styleProperty, styleValue)
                    document.querySelector(parentQuery).appendChild(object)
                }
                if (objectType == this.objectTypes.block) {
                    const object = document.createElement("div")
                    object.id = objectId
                    object.style.setProperty(styleProperty, styleValue)
                    document.querySelector(parentQuery).appendChild(object)
                }
            }
            if (command == "change") {
                if (objectType == this.objectTypes.heading) {
                    const object = document.getElementById(objectId)
                    object.style.setProperty(styleProperty, styleValue)
                }
                if (objectType == this.objectTypes.subHeading) {
                    const object = document.getElementById(objectId)
                    object.style.setProperty(styleProperty, styleValue)
                }
                if (objectType == this.objectTypes.link) {
                    const object = document.getElementById(objectId)
                    object.style.setProperty(styleProperty, styleValue)
                }
                if (objectType == this.objectTypes.block) {
                    const object = document.getElementById(objectId)
                    object.style.setProperty(styleProperty, styleValue)
                }
            }
            if (command == "remove") {
                if (objectType == this.objectTypes.heading) {
                    const object = document.getElementById(objectId)
                    object.remove()
                }
                if (objectType == this.objectTypes.subHeading) {
                    const object = document.getElementById(objectId)
                    object.remove()
                }
                if (objectType == this.objectTypes.link) {
                    const object = document.getElementById(objectId)
                    object.remove()
                }
                if (objectType == this.objectTypes.block) {
                    const object = document.getElementById(objectId)
                    object.remove()
                }
            }
        }
    }
}