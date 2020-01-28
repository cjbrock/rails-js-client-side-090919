fetch('http://localhost:3000/hogs')
    .then(resp => resp.json())
    .then(hogs => {
        hogs.forEach(hog=> {
            const { id, name, specialty, greased, weight, medal, image, piglets } = hog
            new Hog(id, name, specialty, greased, weight, medal, image, piglets)
        })
    })