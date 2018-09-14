import AbstractDAO from '../AbstractDAO';

class VehicleDAO extends AbstractDAO {

    constructor(Model) {
        super(Model);
        this.model = Model;
    }
}

export default VehicleDAO;