import AbstractService from "../AbstractService";
import VehicleDAO from './VehicleDAO';


class VehicleService extends AbstractService {

    constructor(Model) {
        super(new VehicleDAO(Model));
    }
}

export default VehicleService;