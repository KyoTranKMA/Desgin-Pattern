
class XMLAdapter {
    constructor(xmlData) {
        this.xmlData = xmlData;
    }

    readData(Data) {
        // convert to JSON
        const convertData = this.convertToJson(this.xmlData);
        // Read Data with Json
        Data.read(convertData);
    }

    convertToJson(xmlData) {
        // make convert from XML to Json
        const jsonString = JSON.stringify(xmlData);
        return JSON.parse(jsonString);
    }
}

module.exports = XMLAdapter;