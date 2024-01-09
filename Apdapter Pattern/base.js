const XMLAdapter = require('../Apdapter Pattern/interface.js');

class ReadData {
    read(Data) {
        console.log(`Data:::`, Data);
    }
}

class XMLData {
    constructor(Data) {
        this.Data = Data;
    }
}

//create Data XML
const dataXML = new XMLData(
    `<bookstore>
        <book category="Fiction">
            <title lang="en">Harry Potter</title>
            <author>J.K. Rowling</author>
            <price currency="USD">24.99</price>
        </book>
        <book category="Non-Fiction">
            <title lang="en">Introduction to XML</title>
            <author>John Doe</author>
            <price currency="EUR">19.95</price>
        </book>
    </bookstore>`
);

//create XML adpter
const xmlAdapter = new XMLAdapter(dataXML);

//create Reader
const reader = new ReadData();

xmlAdapter.readData(reader);
