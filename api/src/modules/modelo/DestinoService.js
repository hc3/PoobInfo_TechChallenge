import DestinoDAO from './DestinoDAO';
import AbstractService from '../AbstractService';

class DestinoService extends AbstractService {

    constructor(Model) {
        super(new DestinoDAO(Model));
        this.DestinoDAO = new DestinoDAO(Model);
    };

}

export default DestinoService;