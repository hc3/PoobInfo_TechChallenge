import mongoose from 'mongoose';
const Schema = mongoose.Schema;

function checkBoard(v) {

    return v;
}

function toLower(v) {

    if (!v) return

    return v.toLowerCase();
}

const InstanceSchema = new Schema({
    driverName: {
        type:String,
        require:true
    },
    driverPhone: {
        type:String,
        require:true
    },
    brand: {
        type: String,
        require: true
    },
    model: {
        type: String,
        require: true
    },
    horseBoard: {
        type: String,
        unique: true,
        require: true
    },
    cartPlate: {
        type: String,
        unique: true,
        require: true
    },
    year: {
        type: Number,
        require: true
    }
}, {
        timestamps: true
    });

InstanceSchema
    .path('horseBoard')
    .validate(function (value) {
        var self = this;
        return this.constructor.findOne({ horseBoard: value })
            .then(function (data) {
                if (data) {
                    if (self._id === data._id) {
                        return true;
                    }
                    return false;
                }
                return true;
            })
            .catch(function (err) {
                throw err;
            });
    }, 'Placa do cavalo já está em uso.');

InstanceSchema
    .path('cartPlate')
    .validate(function (value) {
        var self = this;
        return this.constructor.findOne({ cartPlate: value })
            .then(function (data) {
                if (data) {
                    if (self._id === data._id) {
                        return true;
                    }
                    return false;
                }
                return true;
            })
            .catch(function (err) {
                throw err;
            });
    }, 'Placa da carreta já está em uso');

export default mongoose.model('vehicle', InstanceSchema);