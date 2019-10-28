import mapChooser from '../mapChooser';

describe("mapChooser", function () {
    it("returns an image based on input given to it", function () {
        let expected = "LondonMap.png";
        let actual = mapChooser("LondonMap");
        expect(actual).toEqual(expected);
    });
    it("returns an default image when no input is given", function () {
        let expected = "NoneMap.png";
        let actual = mapChooser("");
        expect(actual).toEqual(expected);
    });
});

