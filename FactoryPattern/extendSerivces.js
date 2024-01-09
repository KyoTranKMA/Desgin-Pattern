class Ship 
{
    constructor({name = 'MSC', cargo = '100.000 kg',price = '100.000', customerInfo = {} })
    {
        this.name = name;
        this.cargo = cargo;
        this.price = price;
        this.customerInfo = customerInfo;
    }

} 

module.exports = Ship;