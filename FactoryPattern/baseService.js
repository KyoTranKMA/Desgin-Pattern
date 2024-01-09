const Ship = require('./extendSerivces');

class Truck 
{
    constructor({name = 'Thaco', cargo = '1000 kg',price = '10.000', customerInfo = {} })
    {
        this.name = name;
        this.cargo = cargo;
        this.price = price;
        this.customerInfo = customerInfo;

    }

} 

class ServiceLogictics
{
    transport = Truck;
    getTranSport(customerInfo)
    {
        return new this.transport(customerInfo);
    }

}

class ShipService extends ServiceLogictics
{
    transport = Ship;
}

const services = new ShipService();

console.log(' Service:::', services.getTranSport({customerInfo: {name: 'Kyo', age: 20 }}));









