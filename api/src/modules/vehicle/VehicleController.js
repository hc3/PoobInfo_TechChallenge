import VehicleService from './VehicleService';
import Vehicle from './Vehicle';

exports.register = function(server, options, next) {

    const vehicle = server.app.db.models.vehicle;

    const service = new VehicleService(vehicle);

    server.route({
        method:'GET',
        path: '/vehicles',
        config: {
            auth:'token',
            handler: (request, reply) => {

                if(service.isAuthorized(request, [])) {
                    service.listAll(reply);
                } else {
                    service.notAuthorizared(reply);
                }

            }
        }
    });

    server.route({
        method: 'POST',
        path:'/create-vehicle',
        config: {
            auth: 'token',
            handler: (request, reply) => {

                if(service.isAuthorized, []) {
                    service.create(request, reply);
                } else {
                    service.notAuthorizared(reply);
                }
            }
        }
    });

    server.route({
        method: 'PUT',
        path: '/vehicle/{id}',
        config: {
            auth:'token',
            handler: (request, reply) => {

                if(service.isSameUser(request)) {
                    service.update(request, reply);
                } else {
                    service.notAuthorizared(reply);
                }
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/vehicle/{id}',
        config: {
            auth:'token',
            handler: (request, reply) => {

                if(service.isSameUser(request)) {
                    service.findOne(request, reply);
                } else {
                    service.notAuthorizared(reply);
                }
            }
        }
    });

    return next();

}

exports.register.attributes = {
    name: 'vehicle'
};