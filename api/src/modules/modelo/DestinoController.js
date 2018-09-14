import DestinoService from './DestinoService';
import Destino from './Destino';
import action from '../actions/actions';

function haveAcessToUser(role) {
    if(role === 'admin') {
        return true;
    } else {
        return false;
    }
}

exports.register = function(server, options ,next) {

    const destino = server.app.db.models.destino

    const service = new DestinoService(destino);

    server.route({
        method: 'GET',
        path: '/destino',
        config: {
            auth:'token',
            handler: (request, reply) => {
                action.find(request,reply,service);
            }
        }
    });

    server.route({
        method: 'POST',
        path: '/destino',
        config: {
            auth:'token',
            handler: (request, reply) => {
                if(haveAcessToUser(request.auth.credentials.role)) {
                    action.insert(request, reply, service);
                } else {
                    action.notAuthorized(request, reply);
                }
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/destino/{id}',
        config: {
            auth:'token',
             handler: (request, reply) => {
                action.findById(request, reply, service);

            }
        }
    });

    server.route({
        method: 'PUT',
        path: '/destino/{id}',
        config: {
            auth:'token',
            handler: (request, reply) => {

                if(haveAcessToUser(request.auth.credentials.role)) {
                    action.update(request, reply, service);
                } else {
                    action.notAuthorized(request, reply);
                }

            }
        }
    });

    server.route({
        method: 'DELETE',
        path: '/destino/{id}',
        config: {
            auth:'token',
            handler: (request, reply) => {

                if(haveAcessToUser(request.auth.credentials.role)) {
                    action.remove(request, reply, service);
                } else {
                    action.notAuthorized(request, reply);
                }

            }
        }
    });

    return next();
}

exports.register.attributes = {
    name: 'destino'
};