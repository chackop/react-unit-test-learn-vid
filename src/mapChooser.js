function mapChooser(locationName) {
    if (!locationName) {
        locationName = "NoneMap";
    }
    let imageName = locationName + ".png";
    return (imageName);
}

export default mapChooser;
