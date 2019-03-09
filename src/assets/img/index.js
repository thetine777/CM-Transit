function importAll(r) {
    let images = {}
    r.keys().map((item, index) => {
        images[item.replace('./', '')] = r(item)
    })
    return images
}

const iconimages = importAll(require.context('./icon', false, /\.(png|jpe?g|svg)$/))

export {
    iconimages
}