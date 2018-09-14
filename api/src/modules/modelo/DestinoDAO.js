import AbstractDAO from '../AbstractDAO';

class DestinoDAO extends AbstractDAO {

    constructor(Model) {
        super(Model);
        this.model = Model;
    };

}

export default DestinoDAO;